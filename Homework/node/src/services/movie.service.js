const {movie} = require("../models");

// **create-movie*/
const createMovie = async (reqBody) => {
    return movie.create(reqBody);
  };

/** Get Book-List*/
const getMovieList = async(req,res) => {
  return movie.find({$or:[{ticket_price:200}]});
};
module.exports = {
    createMovie,
    getMovieList,
}