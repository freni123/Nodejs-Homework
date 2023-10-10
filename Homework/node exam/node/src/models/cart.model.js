const mongoose = require("mongoose");
/* ---------------------------- cart model schema --------------------------- */
const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "product",
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

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
