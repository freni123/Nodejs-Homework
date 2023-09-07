const Joi = require("joi");

//  create order
const createOrder= {
  body: Joi.object().keys({
    user: Joi.string().required().trim(),
    products: Joi.string().required().trim(),
    status:Joi.string().required().trim(),
    total:Joi.number().integer().required(),
  })
};
module.exports = {
  createOrder
};