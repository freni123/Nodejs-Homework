const Joi = require("joi");

/** Create Movie*/
const createMovie = {
  body: Joi.object().keys({
    cinema_name: Joi.string().required().trim(),
    cinema_location: Joi.string().required().trim(),
    movie_name: Joi.string().required().trim(),
    movie_language: Joi.string().required().trim(),
    avaliableseats: Joi.number().integer().required(),
    screen_number: Joi.number().integer().required(),
    movie_showtime: Joi.number().integer().allow(),
    movie_director: Joi.string().required().trim(),
    releaseDate: Joi.string().required().allow(),
    ticket_price: Joi.number().integer(),
    })
};
module.exports = {createMovie};