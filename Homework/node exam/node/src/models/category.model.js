const mongoose = require("mongoose");
/* -------------------------- category model schema ------------------------- */
const categorySchema = new mongoose.Schema(
  {
    category_name: {
      type: String,
      trim: true,
    },
    category_desc: {
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
const Category = mongoose.model("category", categorySchema);

module.exports = Category;
