const Joi = require("joi");

/** Create Stationary */
const createStationary = {
  body: Joi.object().keys({
    stationary_name: Joi.string().required().trim(),
    product_id: Joi.string().required().trim(),
    product_name: Joi.string().required().trim(),
    quantity: Joi.string().required().trim(),
    price: Joi.string().required().trim(),
    supplier: Joi.string().required().trim(),
    }),
};
/** Get Stationary List */
const getStationaryList = {
  query:Joi.object().keys({
    serach:Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  })
}
module.exports = {createStationary,getStationaryList};