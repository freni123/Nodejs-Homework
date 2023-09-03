const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        user:{
            type:String,
            trim:true,
        },
        products:{
            type:String,
            trim:true,
        },
        status:{
            type:String,
            trim:true,
        },
        total:{
            type:Number,
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

const order = mongoose.model('order',orderSchema);

module.exports = order;