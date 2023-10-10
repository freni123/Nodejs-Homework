const Joi = require("joi");

/* ------------------------------- create-user ------------------------------ */
const createUser = {
  body: Joi.object().keys({
    user_name: Joi.string().required().trim(),
    phoneNo: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    address: Joi.number().integer().required(),
    password: Joi.string().allow().trim(),
  }),
};
module.exports = {
    createUser,
}