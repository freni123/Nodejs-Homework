const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      trim: true,
    },
    product_desc: {
      type: String,
      trim: true,
    },
    product_brand: {
      type: String,
      trim: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    subCategory: {
      type: mongoose.Types.ObjectId,
      ref: "subCategory",
    },
    subChildCategory: {
      type: mongoose.Types.ObjectId,
      ref: "subChildCategory",
    },
    product_image: {
      type: String,
    },
    product_offers: {
      type: String,
    },
    price: {
      type: Number,
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const product = mongoose.model("products", productSchema);

module.exports = product;
