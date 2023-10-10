const { Product } = require("../models");

/* ----------------------------- create-product ----------------------------- */
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};
/* ---------------------------- get product-list ---------------------------- */
const getProductList = async (req, res) => {
  return Product.find().populate("category");
};
/* ------------------------ get product details by id ----------------------- */
const getProductById = async (productId) => {
  return Product.findById(productId);
};
/* ----------------------------- delete product ----------------------------- */
const deleteProduct = async (productId) => {
  return Product.findByIdAndDelete(productId);
};
/* ----------------------------- update product ----------------------------- */
const updateProduct = async (productId, updateBody) => {
  return Product.findByIdAndUpdate(productId, {
    $set: updateBody,
  });
};
module.exports = {
  createProduct,
  getProductList,
  deleteProduct,
  getProductById,
  updateProduct,
};
