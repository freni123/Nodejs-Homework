const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            trim:true,
        },
        artist:{
            type:String,
            trim:true,
        },
        album:{
            type:String,
            trim:true,
        },
        genre:{
            type:String,
            trim:true,
        },
        releaseDate:{
            type:String,
            trim:true,
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
const music = mongoose.model('music',musicSchema);
module.exports =  music;

