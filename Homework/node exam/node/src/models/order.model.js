const mongoose = require("mongoose");

/* --------------------------- Order model schema --------------------------- */
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "product",
    },
    totalprice: {
      type: Number,
    },
    status: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;

