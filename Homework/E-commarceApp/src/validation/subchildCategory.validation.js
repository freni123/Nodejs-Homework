const Joi = require("joi");

// create-subcategory
const createSubChildCate = {
  body: Joi.object().keys({
    subChildCategory_name: Joi.string().required().trim(),
    subChildCategory_desc: Joi.string().required().trim(),
    category: Joi.string().allow().trim(),
    subCategory: Joi.string().allow().trim(),
  }),
};
module.exports = {
  createSubChildCate,
};
