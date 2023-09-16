const Joi = require("joi");

// create-subcategory
const createSubCategory = {
  body: Joi.object().keys({
    subCategory_name: Joi.string().required().trim(),
    subCategory_desc: Joi.string().required().trim(),
    category: Joi.string().allow().trim(),
  }),
};
module.exports = {
  createSubCategory,
};
