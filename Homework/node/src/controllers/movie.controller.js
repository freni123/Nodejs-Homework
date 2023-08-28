const {movieService} = require("../services");
const { options } = require("joi");
// create-movie
const createMovie = async(req,res) =>{
    try {
        const reqBody = req.body;
        const movie = await movieService.createMovie(reqBody);
        if(!movie){
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
        success: true,
        message:"Movie Created Successfully",
        data: {movie},
      });
    } catch (error) {
              res.status(400).json({ success: false, message: error.message });

    }
};
// Get movie List
const getMovieList = async (req,res) => {
    try {
        const getMovieDetails = await movieService.getMovieList(req,res);
        res.status(200).json({
            success:true,
            message:"Movie List successfully!",
            data:getMovieDetails,
        })
    } catch (error) {
        res.status(400);
    }
};
// Delete Movie
const deleteMovie = async (req,res) => {
    try {
        const movieId = req.params.movieId;
        await movieService.deleteMovie(movieId);
        res.status(200).json({
            success:true,
            message:"Movie Record Delete Successfully!",
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
// Update Movie
const updateMovie = async (req,res) => {
    try {
        const movieId = req.params.movieId;
        const movieExists = await movieService.getMovieById(movieId);
        if(!movieExists){
            throw new Error("Movie not found!");
        }
        await movieService.updateMovie(movieId,req.body);
        res.status(200).json({success:true,message:"Movie record update successfully!"});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};


module.exports = {
        createMovie,
        getMovieList,
        deleteMovie,
        updateMovie
}
