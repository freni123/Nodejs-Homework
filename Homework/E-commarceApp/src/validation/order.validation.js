const Joi = require("joi");

//  create order
const createOrder = {
  body: Joi.object().keys({
    totalprice: Joi.number().integer().required(),
    status: Joi.string().required().trim(),
  }),
};
module.exports = {
  createOrder,
};
