const crypto = require('crypto');
const nodemailer = require('nodemailer');

exports.asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Generate OTP
exports.generateOtp = () => {
  return crypto.randomInt(100000, 999999).toString();
};

exports.sendOtpEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Techpadie OTP code',
    text: `Thank you for signingUp with techpadie <br/> Your OTP code is ${otp}`,
  };

  await transporter.sendMail(mailOptions);
};
