const mongoose = require("mongoose");

/* -------------------------- product model schema -------------------------- */
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
const Product = mongoose.model("product", productSchema);

module.exports = Product;
