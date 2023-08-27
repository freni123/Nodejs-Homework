const { string } = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true,
        },
        last_name:{
            type:String,
            trim:true,
        },
        phoneNumber:{
            type:Number,
        },
        email:{
            type:String,
            trim:true,
        },
        password:{
            type:String,
            trim:true,
        },
        address:{
            type:String,
            trim:true,
        },
        city:{
            type:String,
            trim:true,
        },
        userState:{
            type:String,
            trim:true,
        },
        is_active:{
            type:Boolean,
            trime:true,
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);
const user = mongoose.model('users',userSchema);
module.exports = user;
