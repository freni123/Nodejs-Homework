const Joi = require("joi");

// create-product
const createProduct = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    product_desc: Joi.string().required().trim(),
    product_brand: Joi.string().required().trim(),
    product_offers: Joi.string().required().trim(),
    product_image: Joi.string().allow().trim(),
    price: Joi.number().integer().required(),
    category: Joi.string().required().trim(),
    subCategory: Joi.string().required().trim(),
    subChildCategory: Joi.string().required().trim(),
  }),
};
module.exports = {
  createProduct,
};
