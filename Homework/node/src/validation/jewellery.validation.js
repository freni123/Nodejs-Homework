const Joi = require("joi");

/** Create Book*/
const createJewellery = {
  body: Joi.object().keys({
    jewellers_name: Joi.string().required().trim(),
    shop_address: Joi.string().required().trim(),
    jewellery_name: Joi.string().required().trim(),
    type: Joi.string().required().trim(),
    metal: Joi.string().required().trim(),
    gemstone: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
  }),
};
/** Get Book List */
const getJewelleryList = {
  query:Joi.object().keys({
    serach:Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  })
}
module.exports = {createJewellery,getJewelleryList};