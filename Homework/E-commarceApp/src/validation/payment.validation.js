const Joi = require("joi");

//  create payment
const createPayment = {
  body: Joi.object().keys({
    paymentMethod: Joi.string().required().trim(),
    transactionId: Joi.string().required().trim(),
    amount: Joi.string().required().trim(),
    status: Joi.number().integer().allow(),
  }),
};
module.exports = {
    createPayment,
};