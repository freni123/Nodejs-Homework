const Joi = require("joi");

//  create user
const createUser = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
    city: Joi.string().required().trim(),
    userState: Joi.string().required().trim(),
    phoneNumber: Joi.number().integer().required(),
  }),
};
module.exports = {
  createUser,
};