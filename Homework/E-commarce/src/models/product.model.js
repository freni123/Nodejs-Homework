const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        trim: true,
    },
    product_code: {
        type: String,
        trim: true,
    },
    product_desc: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        trim: true,
    },
    quantity: {
        type: Number,
    },
    categorys:{
        type:mongoose.Types.ObjectId,
        ref:"categorys",
    },
    stock: {
        type: Number,
        trim: true,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});

const product = mongoose.model("product", productSchema)

module.exports = product;