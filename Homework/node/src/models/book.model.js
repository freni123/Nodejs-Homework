const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        book_title:{
        type:String,
        trim:true,
       },
        book_author:{
        type:String,
        trim:true,
       },
        book_desc:{
        type:String,
        trim:true,
       },
        book_price:{
        type:Number,
        trim:true,
       },
       stationary:{
        type:mongoose.Types.ObjectId,
        ref:"stationary",
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
const book = mongoose.model('bookstore',bookSchema);
module.exports=book;