const express = require("express");

const userRoute = require("./user.route");
const blogRoute = require("./blog.route");
const authorRoute = require("./author.route");
const postRoute = require("./post.route");


const router = express.Router();

router.use("/user", userRoute);
router.use("/blog", blogRoute);
router.use("/author", authorRoute);
router.use("/post", postRoute);


module.exports = router;
