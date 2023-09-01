const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema(
    {
      school_name:{
        type:String,
        trim:true,
      },
      address:{
        type:String,
        trim:true,
      },
      principal_name:{
        type:String,
        trim:true,
      },
      faculty_name:{
        type:String,
        trim:true,
      },
      faculty_subject:{
        type:String,
        trim:true,
      },
      student_details:{
        type:String,
        trim:true,
      },
      student:{
        type:mongoose.Types.ObjectId,
        ref:"student",
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
const school = mongoose.model('school',schoolSchema);
module.exports = school;