const app = require('./app');
const config = require('./src/config');

const server = app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

// Graceful shutdownn
const shutdown = () => {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });


  setTimeout(() => {
    console.error('Forcing server shutdown');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', shutdown); 
process.on('SIGINT', shutdown);  
