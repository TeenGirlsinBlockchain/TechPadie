const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const CustomError = require('../errors/customError');
const { asyncHandler, generateOtp, sendOtpEmail } = require('../helpers/utility');

exports.initiateSignUp = asyncHandler(async (req, res, next) => {
  const { email, username } = req.body;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new CustomError('Email already in use', 400);
  }

  const existingUsername = await prisma.user.findUnique({ where: { username } });
  if (existingUsername) {
    throw new CustomError('Username already in use', 400);
  }

  const otp = generateOtp();
  const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); 

  const user = await prisma.user.create({
    data: {
      email,
      username,
      otp,
      otpExpiresAt,
    },
  });

  await sendOtpEmail(email, otp);
  res.status(201).json({ message: 'OTP sent to email', username: user.username });
});

exports.verifyOtpAndCompleteSignUp = asyncHandler(async (req, res, next) => {
  const { username, otp, password, name, web3Experience, interests } = req.body;

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user || user.otp !== otp || user.otpExpiresAt < new Date()) {
    throw new CustomError('Invalid or expired OTP', 400);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.update({
    where: { username: user.username },
    data: {
      password: hashedPassword,
      name,
      web3Experience,
      interests,
      otp: null, 
      otpExpiresAt: null,
    },
  });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ message: 'Sign-up complete', token });
});

exports.initiateSignIn = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new CustomError('Email not registered', 404);
  }

  const otp = generateOtp();
  const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); 

  await prisma.user.update({
    where: { id: user.id },
    data: { otp, otpExpiresAt },
  });

  await sendOtpEmail(email, otp);
  res.status(200).json({ message: 'OTP sent to email', username: user.username });
});

exports.verifyOtpAndSignIn = asyncHandler(async (req, res, next) => {
  const { username, otp } = req.body;

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user || user.otp !== otp || user.otpExpiresAt < new Date()) {
    throw new CustomError('Invalid or expired OTP', 400);
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ message: 'Sign-in complete', token });
});
