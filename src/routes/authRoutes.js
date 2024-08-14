const express = require('express');
const { check, validationResult } = require('express-validator');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/signup/initiate', [
  check('email').isEmail().withMessage('Please provide a valid email'),
  check('username').not().isEmpty().withMessage('Username is required')
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, authController.initiateSignUp);

router.post('/signup/verify', [
  check('username').not().isEmpty().withMessage('Username is required'),
  check('otp').isLength({ min: 6 }).withMessage('OTP must be 6 characters long'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  check('name').not().isEmpty().withMessage('Name is required'),
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, authController.verifyOtpAndCompleteSignUp);

router.post('/signin/initiate', [
  check('email').isEmail().withMessage('Please provide a valid email')
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, authController.initiateSignIn);

router.post('/signin/verify', [
  check('username').not().isEmpty().withMessage('Username is required'),
  check('otp').isLength({ min: 6 }).withMessage('OTP must be 6 characters long')
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, authController.verifyOtpAndSignIn);

module.exports = router;
