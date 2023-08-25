const Joi = require("joi");


const createBus = {
  body: Joi.object().keys({
    bus_name: Joi.string().required().trim(),
    bus_number: Joi.string().required().trim(),
    bus_avaliableseats: Joi.string().required().trim(),
    ticket_price: Joi.string().required().trim(),
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