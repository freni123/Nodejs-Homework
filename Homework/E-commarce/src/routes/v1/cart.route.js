const express = require('express');
const {cartController} = require('../../controller')

const router = express.Router();

// create-cart
router.post(
    '/create-cart',
    cartController.createCart
);
// get cart list
router.get(
    '/cart-list',
    cartController.getCartList
);
// delete cart
router.delete(
    "/delete-cart/:cartId",
    cartController.deleteCart
);
module.exports = router;