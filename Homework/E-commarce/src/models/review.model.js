const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        user:{
            type:String,
            trim:true,
        },
        product:{
            type:String,
            trim:true,
        },
        rating:{
            type:Number,
        },
        comment:{
            type:String,
            trim:true,
        },
        is_active:{
            type:Boolean,
            default:true,
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

const review = mongoose.model('review',reviewSchema);

module.exports = review;