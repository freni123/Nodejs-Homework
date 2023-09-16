const mongoose = require("mongoose");

const userreviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "products",
    },
    rating: {
      type: String,
      trim: true,
    },
    comment: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const userReview = mongoose.model("userreview", userreviewSchema);

module.exports = userReview;
