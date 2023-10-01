const express = require("express");

const userRoute = require("./user.route");
const blogRoute = require("./blog.route");


const router = express.Router();

router.use("/user", userRoute);
const blogRoute = require("./blog.route");


module.exports = router