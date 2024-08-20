const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const cookieParser = require('cookie-parser'); 
const authRoutes = require('./src/routes/authRoutes');
const courseRoutes = require('./src/routes/courseRoutes');
const { globalErrorHandler } = require('./src/errors/errorHandler');
const { handleErrors } = require('./src/middlewares/errorMiddleware');
const { authenticate } = require('./src/middlewares/authMiddleware');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 50, 
  message: 'Too many requests from this IP, please try again later',
});
app.use(limiter);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 10 * 60 * 1000 } 
}));

app.use(cookieParser());

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'");
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', authenticate, courseRoutes); 

// Error Handling
app.use(handleErrors);
app.use(globalErrorHandler);

module.exports = app;
