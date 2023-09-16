const mongoose = require("mongoose");

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
        email:{
            type:String,
            trim:true,
        },
        address:{
            type:String,
            trim:true,
        },
        phoneNumber:{
            type:String,
        },
        password:{
            type:String,
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
            default:true,
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);
const User = mongoose.model("users",userSchema);

module.exports = User;