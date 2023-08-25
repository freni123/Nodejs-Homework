const mongoose = require('mongoose')

const grocerySchema = new mongoose.Schema({
    product_name: {
        type: String,
        trim: true,
    },
    productId: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        trim: true,
    },
    qunantity: {
        type: Number,
        trim: true,
    },
    supplier:{
        type:String,
        trim:true,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
},
    {
    timestamps: true,
    versionKey: false,
    }
);
const grocery = mongoose.model('grocery',grocerySchema);
module.exports = grocery;