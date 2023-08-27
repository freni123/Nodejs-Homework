const Joi = require("joi");

//  create product
const createProduct = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    product_code: Joi.string().required().trim(),
    product_desc: Joi.string().required().trim(),
    quality: Joi.string().required().trim(),
    stock: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
  }),
};
module.exports = {
    createProduct,
};