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
      student_name:{
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
const school = mongoose.model('school',schoolSchema);
module.exports = school;