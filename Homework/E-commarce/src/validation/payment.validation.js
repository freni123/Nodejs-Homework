const Joi = require("joi");

//  create payment
const createPayment = {
  body: Joi.object().keys({
    user: Joi.string().required().trim(),
    order: Joi.string().required().trim(),
    paymentMethod: Joi.string().required().trim(),
    transactionId: Joi.string().required().trim(),
    amount: Joi.number().integer().required(),
  }),
};
module.exports = {
    createPayment,
};