const express = require("express");
const userRoute = require("./user.route");
const tokenRoute = require("./token.route");
const categoryRoute = require("./category.route");
const subcategoryRoute = require("./subCategory.route");
const childCategoryRoute = require("./subchildCategory.route");
const productRoute = require("./product.route");
const cartRoute = require("./cart.route");
const paymentRoute = require("./payment.route");
const orderRoute = require("./order.route");
const galleryRoute = require("./gallery.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/token", tokenRoute);
router.use("/category", categoryRoute);
router.use("/subCategory", subcategoryRoute);
router.use("/subchildcategory", childCategoryRoute);
router.use("/product", productRoute);
router.use("/cart", cartRoute);
router.use("/payment", paymentRoute);
router.use("/order", orderRoute);
router.use("/gallery", galleryRoute);

module.exports = router;
