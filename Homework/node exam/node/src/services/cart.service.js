const { Cart } = require("../models");

/* ------------------------------- create-cart ------------------------------ */
const createCart = async (reqBody) => {
  return Cart.create(reqBody);
};
/* ------------------------------ get cart list ----------------------------- */
const getCartList = async (req, res) => {
  return Cart.find().populate("user").populate("product");
};
/* ------------------------- get cart details by id ------------------------- */
const getCartById = async (cartId) => {
  return Cart.findById(cartId);
};
/* ------------------------------- Delete cart ------------------------------ */
const deleteCart = async (cartId) => {
  return Cart.findByIdAndDelete(cartId);
};
/* ---------------------------- update cart data ---------------------------- */
const updateCart = async (cartId, updateBody) => {
  return Cart.findByIdAndUpdate(cartId, {
    $set: updateBody,
  });
};
module.exports = {
  createCart,
  getCartList,
  getCartById,
  deleteCart,
  updateCart,
};
