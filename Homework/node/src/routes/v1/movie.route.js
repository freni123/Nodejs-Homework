const express = require('express');
const {movieValidation} = require('../../validation');
const {movieController} = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

//Create-Movie
router.post(
    "/create-movie",
    validate(movieValidation.createMovie),
    movieController.createMovie
);
//Get-Movie List
router.get(
    "/movie-list",
    movieController.getMovieList
);
//Delete Movie
router.delete(
    "/delete-movie/:movieId",
    movieController.deleteMovie
)
module.exports = router;
