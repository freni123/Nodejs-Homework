const express = require('express');
const {paymentController} = require('../../controller');
const {paymentValidation} = require('../../validation');
const validate  = require('../../middlewares/validate');

const router = express.Router();

// create-payment
router.post(
    '/create-payment',
    validate(paymentValidation.createPayment),
    paymentController.createPayment
);
// get payment list
router.get(
    '/payment-list',
    paymentController.getPaymentList
);
// delete payment
router.put(
    '/delete-payment/:paymentId',
    paymentController.deletePayment
);
// update payment data
router.put(
    '/update-payment/:paymentId',
    paymentController.updatePayment
);
module.exports = router;