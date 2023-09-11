const Joi = require("joi");

//  create category
const createCategory = {
    body: Joi.object().keys({
        cart_status: Joi.string().required().trim(),
        quantity: Joi.string().required().trim(),
    }),
};
module.exports = {
    createCategory,
};