const Joi = require("joi");

/** Create Music */
const createMusic = {
  body: Joi.object().keys({
    title: Joi.string().required().trim(),
    artist: Joi.string().required().trim(),
    album: Joi.string().required().trim(),
    genre: Joi.string().required().trim(),
    releaseDate: Joi.string().required().trim(),
  }),
};
/** Get Music List */
const getMusicList = {
  query:Joi.object().keys({
    serach:Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  })
}
module.exports = {createMusic,getMusicList};