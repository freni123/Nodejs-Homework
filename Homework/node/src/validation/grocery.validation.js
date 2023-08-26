const Joi = require("joi");

/** Create Grocery */
const createGrocery = {
  body: Joi.object().keys({
    product_name:Joi.string().required().trim(),
    productId:Joi.string().required().trim(),
    category:Joi.string().required().trim(),
    price:Joi.number().integer().required(),
    qunantity:Joi.number().integer().required(),
    supplier:Joi.string().required().trim(),
  }),
};
module.exports = {createGrocery};