"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentConfigurations = void 0;
const EnvironmentConfigurations = () => ({
    env: process.env.NODE_ENV || 'dev',
    mongo_db: process.env.MONGO_DB || 'mongodb://localhost:27017/super-pets',
    port: process.env.PORT || 3033,
});
exports.EnvironmentConfigurations = EnvironmentConfigurations;
//# sourceMappingURL=env.config.js.map