const joi = require('joi');

const logInValidate = (dataObj) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).max(30).required(),
  });

  return schema.validateAsync(dataObj);
};

module.exports = logInValidate;
