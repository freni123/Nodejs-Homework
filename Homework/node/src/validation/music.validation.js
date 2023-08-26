const Joi = require("joi");

/** Create Music */
const createMusic = {
  body: Joi.object().keys({
    title: Joi.string().required().trim(),
    artist: Joi.string().required().trim(),
    album: Joi.string().required().trim(),
    genre: Joi.string().required().trim(),
    releaseDate: Joi.string().required(),
  }),
};
module.exports = {createMusic};