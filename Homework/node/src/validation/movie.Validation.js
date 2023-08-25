const Joi = require("joi");

/** Create Movie*/
const createMovie = {
  body: Joi.object().keys({
    cinema_name: Joi.string().required().trim(),
    cinema_location: Joi.string().required().trim(),
    movie_name: Joi.string().required().trim(),
    movie_language: Joi.string().required().trim(),
    avaliableseats: Joi.number().integer(),
    screen_number: Joi.number().integer(),
    // movie_showtime: Joi.number().integer(),
    movie_director: Joi.string().required().trim(),
    // releaseDate: Joi.date().required().trim(),
    ticket_price: Joi.number().integer(),
    })
};
/** Get Movie List */
const getMovieList = {
  query:Joi.object().keys({
    serach:Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  })
}
module.exports = {createMovie,getMovieList};