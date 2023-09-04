const {options} = require("joi");
const {payment} = require("../models");

// create-payment
const createPayment = async(reqBody) => {
    return payment.create(reqBody);
};
// get payment-list
const getPaymentList = async(req,res) => {
    return payment.find({$or:[{price:100}]});
};
// get payment details by id
const getPaymentById = async(paymentId) => {
    return payment.findById(paymentId);
};
// delete payment
const deletePayment = async (paymentId) => {
    return payment.findByIdAndDelete(paymentId);
};
// update payment
const updatePayment = async (paymentId,updateBody) => {
    return payment.findByIdAndUpdate(paymentId,{$set:updateBody});
};
module.exports = {
    createPayment,
    getPaymentList,
    getPaymentById,
    deletePayment,
    updatePayment
}