const Joi = require("joi");

const createHeroSchema = Joi.object({
  title: Joi.string().trim().min(3).max(255).required(),
  description: Joi.string().trim().min(3).required(),
  button_text: Joi.string().trim().max(100).required(),
  status: Joi.number().integer().valid(0, 1).default(1)
});

const updateHeroSchema = Joi.object({
  title: Joi.string().trim().min(3).max(255).optional(),
  description: Joi.string().trim().min(3).optional(),
  button_text: Joi.string().trim().max(100).optional(),
  status: Joi.number().integer().valid(0, 1).optional()
});

module.exports = { createHeroSchema, updateHeroSchema };