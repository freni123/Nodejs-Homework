const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema(
    {
        hotel_name:{
            type:String,
            trim:true,
        },
        room_number:{
            type:Number,
            trim:true,
        },
        room_price:{
            type:Number,
            trim:true,
        },
        amenities:{
            type:String,
            trim:true,
        },
        hotel_location:{
            type:String,
            trim:true,
        },
        users:{
            type:mongoose.Types.ObjectId,
            ref:"users",
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
const hotel = mongoose.model('hotel',hotelSchema);
module.exports=hotel;