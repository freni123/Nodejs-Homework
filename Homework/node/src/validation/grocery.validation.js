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
/** Get Grocery List */
const getGroceryList = {
  query:Joi.object().keys({
    serach:Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  })
}
module.exports = {createGrocery,getGroceryList};