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
    travel: Joi.string().required().trim(),

  })
};
module.exports = {createBus};