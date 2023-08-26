const Joi = require("joi");

/** Create Stationary */
const createStationary = {
  body: Joi.object().keys({
    stationary_name: Joi.string().required().trim(),
    product_id: Joi.string().required().trim(),
    product_name: Joi.string().required().trim(),
    quantity: Joi.number().integer().required(),
    price: Joi.number().integer().required(),
    supplier: Joi.string().required().trim(),
    }),
};
module.exports = {createStationary};