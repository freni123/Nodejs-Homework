const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "products",
    },
    totalprice: {
      type: Number,
    },
    status: {
      type: String,
      trim: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    subChildCategory: {
      type: mongoose.Types.ObjectId,
      ref: "subChildCategory",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const order = mongoose.model("order", orderSchema);

module.exports = order;
