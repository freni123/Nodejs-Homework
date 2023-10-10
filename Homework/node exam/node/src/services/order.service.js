const { Order } = require("../models");

/* ------------------------------ create-order ------------------------------ */
const createOrder = async (reqBody) => {
  return Order.create(reqBody);
};
/* -------------------------------- get order ------------------------------- */
const getOrderList = async (req, res) => {
  return Order.find().populate("user").populate("product");
};
/* ------------------------- get order details by id ------------------------ */
const getOrderById = async (orderId) => {
  return Order.findById(orderId);
};
/* ------------------------------ delete order ------------------------------ */
const deleteOrder = async (orderId) => {
  return Order.findByIdAndDelete(orderId);
};
/* ------------------------------ update order ------------------------------ */
const updateOrder = async (orderId, updateBody) => {
  return Order.findByIdAndUpdate(orderId, { $set: updateBody });
};
module.exports = {
  createOrder,
  getOrderList,
  deleteOrder,
  getOrderById,
  updateOrder,
};
