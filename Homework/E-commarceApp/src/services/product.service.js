const { options } = require("joi");
const { product } = require("../models");

// create-product
const createProduct = async (reqBody) => {
  return product.create(reqBody);
};
// get product-list
const getProductList = async (req, res) => {
  return await product
    .find()
    .populate("category", "category_name")
    .populate("subCategory", "subCategory_name")
    .populate("subChildCategory", "subChildCategory_name");
};
// get product details by id
const getProductById = async (productId) => {
  return product.findById(productId);
};
// delete product
const deleteProduct = async (productId) => {
  return product.findByIdAndDelete(productId);
};
// update product
const updateProduct = async (productId, updateBody) => {
  return product.findByIdAndUpdate(productId, {
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
