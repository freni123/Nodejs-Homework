const { cart } = require("../models");

// create-cart
const createCart = async (reqBody) => {
    return cart.create(reqBody);
  };
// get cart list
  const getCartList = async(req, res ) => {
    return cart.find({$or:[{is_active:true}]});
  }
// Delete cart
const deleteCart = async (cartId) => {
  return cart.findByIdAndDelete(cartId);
}
  module.exports = {
    createCart,
    getCartList,
    deleteCart
  };