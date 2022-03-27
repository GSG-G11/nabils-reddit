const joi = require('joi');

const signupValidate = (dataObj) => {
  const schema = joi.object({
    username: joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).max(30).required(),
  });

  return schema.validate(dataObj, { abortEarly: false });
};

module.exports = signupValidate;
