const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        cinema_name:{
            type:String,
            trim:true,
        },
        cinema_location:{
            type:String,
            trim:true,
        },
        movie_name:{
            type:String,
            trim:true,
        },
        movie_language:{
            type:String,
            trim:true,
        },
        movie_showtime:{
            type:Date,
            default:Date.now(),
            trim:true,
        },
        screen_number:{
            type:Number,
            trim:true,
        },
        avaliableseats:{
            type:Number,
        },
        movie_director:{
            type:String,
            trim:true,
        },
        releaseDate:{
            type:Date,
        },
        ticket_price:{
            type:Number,
        },
        is_active:{
            type:Boolean,
            default:true,
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);
const movie = mongoose.model('movie',movieSchema);

module.exports = movie;
