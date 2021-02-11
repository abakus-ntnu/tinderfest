module.exports = {
    // // Node environment. 'development' or 'production'
    // NODE_ENV: process.env.NODE_ENV || 'development',
  
    PORT: process.env.PORT || 5000,
    // Host used when binding. Use 0.0.0.0 to bind all interfaces
    //HOST: process.env.HOST || 'localhost',
    
    REDIS_URL: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
  
  };