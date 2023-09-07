const Joi = require("joi");

//  create product
const createProduct = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    product_code: Joi.string().required().trim(),
    product_desc: Joi.string().required().trim(),
    quantity: Joi.number().integer().required(),
    stock: Joi.number().integer().allow(),
    price: Joi.number().integer().required(),
    categorys: Joi.string().required().trim(),
  }),
};
module.exports = {
    createProduct,
};