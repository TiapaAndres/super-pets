export const EnvironmentConfigurations = () => ({
    env: process.env.NODE_ENV || 'dev',
    mongo_db: process.env.MONGO_DB || 'mongodb://localhost:27017/super-pets',
    port: process.env.PORT || 3033,
    // default_limit: process.env.DEFAULT_LIMIT || 12
});