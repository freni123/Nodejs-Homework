const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const dashboard = mongoose.model("dashboard", dashboardSchema);
module.exports = dashboard;
