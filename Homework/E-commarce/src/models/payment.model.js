const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
    {
        user:{
            type:String,
            trim:true,
        },
        order:{
            type:String,
            trim:true,
        },
        paymentMethod:{
            type:String,
            trim:true,
        },
        amount:{
            type:Number,
        },
        transactionId:{
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

const payment = mongoose.model('payment',paymentSchema);

module.exports = payment;