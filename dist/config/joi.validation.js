"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiValidationSchema = void 0;
const Joi = require("joi");
exports.JoiValidationSchema = Joi.object({
    MONGO_DB: Joi.required(),
    PORT: Joi.number().default(3333),
    DEFAULT_LIMIT: Joi.number().default(10),
});
//# sourceMappingURL=joi.validation.js.map