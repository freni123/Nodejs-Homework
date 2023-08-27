const express = require('express');
const userRoute = require('./user.route');
const productRoute = require('./product.route');
const categoryRoute = require('./category.route');
const cartRoute = require('./cart.route');





const router = express.Router();

router.use("/user",userRoute);
router.use("/product",productRoute);
router.use("/category",categoryRoute);
router.use("/cart",cartRoute);

module.exports = router;