const {movie} = require("../models");

// create-movie
const createMovie = async (reqBody) => {
    return movie.create(reqBody);
};
// Get Movie-List
const getMovieList = async(req,res) => {
  // return movie.find({$or:[{ticket_price:210}]}).populate("music");
  return movie.find().populate("music");
};
// get Movie details by id
const getMovieById = async (movieId) => {
  return movie.findById(movieId);
};
// Delete movie
const deleteMovie = async (movieId) => {
  return movie.findByIdAndDelete(movieId);
};
// Update Movie
const updateMovie = async(movieId,updateBody) => {
  return movie.findByIdAndUpdate(movieId,{$set:updateBody});
};

module.exports = {
    createMovie,
    getMovieList,
    getMovieById,
    deleteMovie,
    updateMovie
}