const mongoose = require("mongoose");

/* -------------------------- user model schema -------------------------- */
const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      trim: true,
    },
    phoneNo: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    address:{
        type:String,
        trim:true,
    },
    password:{
        type:String,
        trim:true,
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
const User = mongoose.model("user", userSchema);

module.exports = User;
