const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema(
    {
        Medication_name:{
            type:String,
            trim:true,
        },
        dosage:{
            type:Number,
            trim:true,
        },
        manufacturer:{
            type:String,
            trim:true,
        },
        medicines_price:{
            type:Number,
            trim:true,
        },
        patientName:{
            type:String,
            trim:true,
        },
        quantity:{
            type:Number,
            trim:true,
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

const pharmacy = mongoose.model('pharmacy',pharmacySchema);
module.exports = pharmacy;