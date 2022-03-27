const joi = require('joi');

const postValidate = (dataObj) => {
  const schema = joi.object({
    title: joi.string().min(2).required(),
    content: joi.string().min(2).required(),
  });

  return schema.validate(dataObj, { abortEarly: false });
};

module.exports = postValidate;
