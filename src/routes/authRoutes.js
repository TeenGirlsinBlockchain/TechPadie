const express = require('express');
const { check, validationResult } = require('express-validator');
const authController = require('../controllers/authController');
const { authenticate } = require('../middlewares/authMiddleware');

// Validation Middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post('/signup', [
  check('fullName').not().isEmpty().withMessage('Full name is required'),
  check('email').isEmail().withMessage('Please provide a valid email'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  check('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
    return true;
  })
], handleValidationErrors, authController.signUp);

router.post('/signup-gmail', authController.signUpWithGmail);

router.post('/verify-email', [
  check('userId').isInt().withMessage('User ID must be an integer'),
  check('otp').isLength({ min: 6 }).withMessage('OTP must be 6 characters long')
], handleValidationErrors, authController.verifyEmail);

router.post('/signin', [
  check('email').isEmail().withMessage('Please provide a valid email'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], handleValidationErrors, authController.signIn);

router.post('/refresh-token', authController.refreshToken);

router.post('/forgot-password', [
  check('email').isEmail().withMessage('Please provide a valid email')
], handleValidationErrors, authController.forgotPassword);

router.post('/reset-password', [
  check('userId').isInt().withMessage('User ID must be an integer'),
  check('otp').isLength({ min: 6 }).withMessage('OTP must be 6 characters long'),
  check('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters long'),
  check('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.newPassword) {
      throw new Error('Password confirmation does not match new password');
    }
    return true;
  })
], handleValidationErrors, authController.resetPassword);

// Protected routes 
router.use(authenticate); 

router.post('/onboarding', [
  check('userId').isInt().withMessage('User ID must be an integer'),
  check('techpadieReason').not().isEmpty().withMessage('Please tell us what brings you to Techpadie'),
  check('educationLevel').not().isEmpty().withMessage('Please specify your highest level of education'),
  check('preferredSocialMedia').not().isEmpty().withMessage('Please specify your preferred social media'),
  check('applicationMode').not().isEmpty().withMessage('Please specify your preferred application mode'),
  check('web3Experience').not().isEmpty().withMessage('Please specify your highest level of Web3 experience')
], handleValidationErrors, authController.onboarding);

module.exports = router;
