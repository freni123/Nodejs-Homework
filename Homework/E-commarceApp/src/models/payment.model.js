const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    order: {
      type: mongoose.Types.ObjectId,
      ref: "order",
    },
    paymentMethod: {
      type: String,
      trim: true,
    },
    transactionId: {
      type: String,
    },
    amount: {
      type: Number,
    },
    status: {
      type: String,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const payment = mongoose.model("payment", paymentSchema);

module.exports = payment;
