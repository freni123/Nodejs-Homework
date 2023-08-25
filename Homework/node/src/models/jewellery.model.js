const mongoose = require('mongoose');

const jewellerySchema = new mongoose.Schema(
    {
        jewellers_name:{
            type:String,
            trim:true,
        },
        shop_address:{
            type:String,
            trim:true,
        },
        jewellery_name:{
            type:String,
            trim:true,
        },
        type:{
            type:String,
            trim:true,
        },
        metal:{
            type:String,
            trim:true,
        },
        gemstone:{
            type:String,
            trim:true,
        },
        price:{
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

const  jewellery = mongoose.model('jewelry',jewellerySchema);

module.exports =  jewellery;