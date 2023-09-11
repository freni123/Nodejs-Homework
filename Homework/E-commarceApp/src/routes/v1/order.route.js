const express = require('express');
const {orderController} = require('../../controllers');
const {orderValidation} = require('../../validation');
const validate  = require('../../middlewares/validate');

const router = express.Router();

// create-order
router.post(
    '/create-order',
    validate(orderValidation.createOrder),
    orderController.createOrder
);
// get order list
router.get(
    '/order-list',
    orderController.getOrderList
);
// delete order
router.put(
    '/delete-order/:orderId',
    orderController.deleteOrder
);
// update order data
router.put(
    '/update-order/:orderId',
    orderController.updateOrder
);
module.exports = router;