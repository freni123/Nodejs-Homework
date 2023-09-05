const Joi = require("joi");

/** Create Book*/
const createBook = {
  body: Joi.object().keys({
    book_title: Joi.string().required().trim(),
    book_author: Joi.string().required().trim(),
    book_desc: Joi.string().required().trim(),
    book_price: Joi.number().integer().required(),
    stationary: Joi.string().required().trim(),
  }),
};

module.exports = {createBook};