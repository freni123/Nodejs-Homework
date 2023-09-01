const mongoose = require('mongoose');

const busSchema = new mongoose.Schema(
    {
      bus_name:{
        type:String,
        trim:true,
      },
      bus_number:{
        type:Number,
        trim:true,
      },
      bus_avaliableseats:{
        type:Number,
        trim:true,
      },
      ticket_price:{
        type:Number,
        trim:true,
      },
      route_name:{
        type:String,
        trim:true,
      },
      driver_name:{
        type:String,
        trim:true,
      },
      travel:{
        type:mongoose.Types.ObjectId,
        ref:"travel",
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
const bus = mongoose.model('bus',busSchema);
module.exports = bus;