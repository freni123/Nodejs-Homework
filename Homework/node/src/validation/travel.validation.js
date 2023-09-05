const Joi = require("joi");

/** Create Travel*/
const createTravel = {
  body: Joi.object().keys({
    trip_name: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
    destination: Joi.string().required().trim(),
    startDate: Joi.string().required().trim(),
    endDate: Joi.string().required().trim(),
    route: Joi.string().required().trim(),
    }),
};
module.exports = {createTravel};