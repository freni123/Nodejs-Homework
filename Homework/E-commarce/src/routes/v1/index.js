const express = require('express');
const userRoute = require('./user.route');
const productRoute = require('./product.route');
const categoryRoute = require('./category.route');
const cartRoute = require('./cart.route');
const orderRoute = require('./order.route');
const paymentRoute = require('./payment.route');
const tokenRoute = require('./token.route');
const bannerRoute = require("./banner.route");


const router = express.Router();

router.use("/user",userRoute);
router.use("/product",productRoute);
router.use("/category",categoryRoute);
router.use("/cart",cartRoute);
router.use("/order",orderRoute);
router.use("/payment",paymentRoute);
router.use("/token",tokenRoute);
router.use("/banner", bannerRoute);


module.exports = router;