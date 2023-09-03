const express = require('express');
const {orderController} = require('../../controller');

const router = express.Router();

// create-order
router.post(
    '/create-order',
    orderController.createOrder
);
// get order list
router.get(
    '/order-list',
    orderController.getOredrList
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