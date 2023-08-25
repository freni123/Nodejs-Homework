const Joi = require("joi");

/** create user */
const createCategory = {
  body: Joi.object().keys({
    category_name: Joi.string().required().trim(),
    category_desc: Joi.string().required().trim(),
  }),
};
// Get user List
const getCategoryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  })
};
module.exports = {
    createCategory,
    getCategoryList
};