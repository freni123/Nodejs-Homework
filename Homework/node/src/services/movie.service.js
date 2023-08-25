const {movie} = require("../models");

// **create-movie*/
const createMovie = async (reqBody) => {
    return movie.create(reqBody);
  };

/** Get Movie-List*/
const getMovieList = async(req,res) => {
  return movie.find({$or:[{ticket_price:210}]});
};
// get Movie details by id
const movieById = async (movieId) => {
  return movie.findById(movieId);
};
// Delete movie
const deleteMovie = async (movieId) => {
  return movie.findByIdAndDelete(movieId);
};

module.exports = {
    createMovie,
    getMovieList,
    movieById,
    deleteMovie
}