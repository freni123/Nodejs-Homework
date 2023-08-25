const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema(
    {
        trip_name:{
            type:String,
            trim:true,
          },
        destination:{
            type:String,
            trim:true,
        },
        startDate:{
            type:Date,
            default:Date.Now,
            trim:true,
        },
        endDate:{
            type:Date,
            default:Date.Now,
            trim:true,
        },
        route:{
            type:String,
            trim:true,
          },
        price:{
            type:Number,
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

const travel = mongoose.model('travel',travelSchema);
module.exports = travel;