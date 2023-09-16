const mongoose = require("mongoose");
const config = require("../config/config");

const gallerySchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      trim: true,
    },
    product_image: {
      type: String,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "products",
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.product_image) {
          data.product_image = `${config.base_url}product_images/${data.product_image}`;
        }
      },
    },
  }
);

const gallery = mongoose.model("gallery", gallerySchema);

module.exports = gallery;
