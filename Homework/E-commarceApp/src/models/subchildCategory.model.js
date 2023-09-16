const mongoose = require("mongoose");

const subchildCateSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    subCategory: {
      type: mongoose.Types.ObjectId,
      ref: "subCategory",
    },
    subChildCategory_name: {
      type: String,
      trim: true,
    },
    subChildCategory_desc: {
      type: String,
      trim: true,
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
const subChildCategory = mongoose.model("subChildCategory", subchildCateSchema);

module.exports = subChildCategory;
