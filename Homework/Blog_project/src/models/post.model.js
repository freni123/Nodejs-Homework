const mongoose = require("mongoose");

const postsSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    datePublished: {
      type: Number,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "author",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    numComments: {
      type: Number,
    },
    numLikes: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

var Posts = mongoose.model("post", postsSchema);

module.exports = Posts;
