const Joi = require("joi");

//  create category
const createCategory= {
  body: Joi.object().keys({
    items_name: Joi.string().required().trim(),
    product_code: Joi.string().required().trim(),
    quantity: Joi.number().integer().required(),
    discount: Joi.number().integer().required(),
  }),
};
module.exports = {
    createCategory,
};