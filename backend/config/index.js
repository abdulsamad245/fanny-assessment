require('dotenv').config()
const config = {
  connectionString: process.env.DB_STRING,
  env: process.env.NODE_ENV,
  port: process.env.PORT || 9000,
  jwtExpiresIn: 86400,
  secretOrKeys: 'secret'
};

if (process.env.NODE_ENV === 'production') {
  console.log('production');
  config.mongoUri = process.env.DB_STRING;
} else {
  console.log('DEV');
  config.mongoUri = process.env.DB_STRING;
    
}
module.exports = config;
