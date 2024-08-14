const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const authRoutes = require('./src/routes/authRoutes');
const courseRoutes = require('./src/routes/courseRoutes');
const { globalErrorHandler } = require('./src/errors/errorHandler');
const { handleErrors } = require('./src/middlewares/errorMiddleware');

const app = express();

app.use(helmet()); 
app.use(cors()); 
app.use(morgan('combined')); 

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 50, 
  message: 'Too many requests from this IP, please try again later',
});
app.use(limiter);

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

// Error Handling
app.use(handleErrors); 
app.use(globalErrorHandler);

module.exports = app;
