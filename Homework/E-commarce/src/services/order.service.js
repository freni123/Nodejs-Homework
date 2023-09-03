const {order} = require("../models");

// create-order
const createOrder = async(reqBody) => {
    return order.create(reqBody);
};
// get order
const getOrderList = async (req,res) => {
    return order.find();
};
// get order details by id
const getOrderById = async(orderId) => {
    return order.findById(orderId);
};
// delete order
const deleteOrder = async (orderId) => {
    return order.findByIdAndDelete(orderId);
};
// update order
const updateOrder = async(orderId,updateBody) => {
    return order.findByIdAndUpdate(orderId,{$set:updateBody});
};
module.exports ={
    createOrder,
    getOrderList,
    deleteOrder,
    getOrderById,
    updateOrder
};