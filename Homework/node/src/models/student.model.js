const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        school_name:{
            type:String,
            trim:true,
        },
        student_name:{
            type:String,
            trim:true,
        },
        student_details:{
            type:String,
            trim:true,
        },
        student_study:{
            type:String,
            trim:true,
        },
        student_age:{
            type:Number,
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

const student = mongoose.model('student',studentSchema);

module.exports = student;