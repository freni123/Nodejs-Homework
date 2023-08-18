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
        email:{
            type:String,
            trim:true,
        },
        password:{
            type:Number,
            trim:true,
        },
    },
    {
        timesstamps:true,
        versionKey:false,
    }
);

const User = mongoose.model('users',userSchema);

module.exports=User;
