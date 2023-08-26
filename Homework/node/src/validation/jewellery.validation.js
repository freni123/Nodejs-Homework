const Joi = require("joi");

/** Create Jewellery*/
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
module.exports = {createJewellery};