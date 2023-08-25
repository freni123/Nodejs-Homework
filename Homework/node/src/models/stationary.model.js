const mongoose = require('mongoose');

const stationarySchema = new mongoose.Schema(
    {
        stationary_name:{
            type:String,
            trim:true,
        },
        product_id:{
            type:String,
            trim:true,
        },
        product_name:{
            type:String,
            trim:true,
        },
        quantity:{
            type:Number,
            trim:true,
        },
        price:{
            type:Number,
            trim:true,
        },
        supplier:{
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

const stationary = mongoose.model("stationary",stationarySchema);
module.exports = stationary;