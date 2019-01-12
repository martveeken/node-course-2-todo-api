const env = process.env.NODE_ENV || 'development';
const config = require('./config.json');

console.log('env ******', env);

if (env === 'development' || 'test') {
  const envConfig = config[env];
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
