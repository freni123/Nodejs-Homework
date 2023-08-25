const Joi = require("joi");

//**create bus  */
const createBus = {
  body: Joi.object().keys({
    bus_name: Joi.string().required().trim(),
    bus_number: Joi.number().integer().required(),
    bus_avaliableseats: Joi.number().integer().required(),
    ticket_price:  Joi.number().integer().required(),
    route_name: Joi.string().required().trim(),
    driver_name: Joi.string().required().trim(),
  })
};
/** Get Book List */
const getBusList = {
  query:Joi.object().keys({
    serach:Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  })
}
module.exports = {createBus,getBusList};