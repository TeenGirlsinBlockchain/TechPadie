const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const CustomError = require('../errors/customError');
const { asyncHandler, generateOtp, sendOtpEmail } = require('../helpers/utility');

// Google OAuth2.0 Client
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

function generateTokens(userId) {
  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
  return { accessToken, refreshToken };
}

// Sign-Up
exports.signUp = asyncHandler(async (req, res, next) => {
  const { fullName, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    throw new CustomError('Passwords do not match', 400);
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new CustomError('Email already in use', 400);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const otp = generateOtp();
  const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); 

  const user = await prisma.user.create({
    data: {
      email,
      name: fullName,
      password: hashedPassword,
      otp,
      otpExpiresAt,
    },
  });

  await sendOtpEmail(email, otp);
  res.status(201).json({ message: 'Sign-up successful, OTP sent to email', userId: user.id });
});

// Sign-Up / Sign-In with Google
exports.signUpWithGmail = asyncHandler(async (req, res, next) => {
  const { tokenId } = req.body;

  // Verify the token with Google
  const ticket = await googleClient.verifyIdToken({
    idToken: tokenId,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();
  const { sub, email, name } = payload;

  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    user = await prisma.user.create({
      data: {
        googleId: sub,
        email,
        name,
        password: null, 
      },
    });
  }

  // Generate Tokens
  const { accessToken, refreshToken } = generateTokens(user.id);

  // Send refresh token as HTTP-only cookie
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 
  });

  res.status(200).json({ message: 'Google sign-up/sign-in successful', accessToken });
});

// Email Verification
exports.verifyEmail = asyncHandler(async (req, res, next) => {
  const { userId, otp } = req.body;

  const user = await prisma.user.findUnique({ where: { id: parseInt(userId) } });
  if (!user || user.otp !== otp || user.otpExpiresAt < new Date()) {
    throw new CustomError('Invalid or expired OTP', 400);
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      otp: null, 
      otpExpiresAt: null,
    },
  });

  const { accessToken, refreshToken } = generateTokens(user.id);

  // Send refresh token as HTTP-only cookie
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });

  res.status(200).json({ message: 'Email verification complete', accessToken });
});

// Sign-In with Email
exports.signIn = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new CustomError('Invalid credentials', 401);
  }

  const { accessToken, refreshToken } = generateTokens(user.id);

  // Send refresh token as HTTP-only cookie
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 
  });

  res.status(200).json({ message: 'Sign-in successful', accessToken });
});

// Refresh Token
exports.refreshToken = asyncHandler(async (req, res, next) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).json({ message: 'No refresh token provided' });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const { accessToken, refreshToken: newRefreshToken } = generateTokens(decoded.userId);

    // Send new refresh token as HTTP-only cookie
    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.json({ accessToken });
  } catch (error) {
    res.status(403).json({ message: 'Invalid refresh token' });
  }
});

// Onboarding
exports.onboarding = asyncHandler(async (req, res, next) => {
  const { userId, techpadieReason, educationLevel, preferredSocialMedia, applicationMode, web3Experience } = req.body;

  await prisma.user.update({
    where: { id: parseInt(userId) },
    data: {
      techpadieReason,
      educationLevel,
      preferredSocialMedia,
      applicationMode,
      web3Experience,
    },
  });

  res.status(200).json({ message: 'Onboarding complete' });
});

// Forgot Password
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new CustomError('Email not registered', 404);
  }

  const otp = generateOtp();
  const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP valid for 10 minutes

  await prisma.user.update({
    where: { id: user.id },
    data: { otp, otpExpiresAt },
  });

  await sendOtpEmail(email, otp);
  res.status(200).json({ message: 'OTP sent to email for password reset', userId: user.id });
});

// Reset Password
exports.resetPassword = asyncHandler(async (req, res, next) => {
  const { userId, otp, newPassword, confirmPassword } = req.body;

  if (newPassword !== confirmPassword) {
    throw new CustomError('Passwords do not match', 400);
  }

  const user = await prisma.user.findUnique({ where: { id: parseInt(userId) } });
  if (!user || user.otp !== otp || user.otpExpiresAt < new Date()) {
    throw new CustomError('Invalid or expired OTP', 400);
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: hashedPassword,
      otp: null, 
      otpExpiresAt: null,
    },
  });

  res.status(200).json({ message: 'Password reset successful' });
});
