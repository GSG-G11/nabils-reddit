const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().min(2).required(),
  content: Joi.string().min(2).required(),
});
