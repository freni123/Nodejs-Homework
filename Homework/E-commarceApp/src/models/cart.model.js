const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "products",
    },
    cart_status: {
      type: String,
      trim: true,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;
