const Joi = require("joi");

// create-subcategory
const createSubChildCate = {
    body: Joi.object().keys({
        subChildCategory_name: Joi.string().required().trim(),
        subChildCategory_desc: Joi.string().required().trim(),
    }),
};
module.exports = {
    createSubChildCate
};