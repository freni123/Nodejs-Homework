const {options} = require("joi");
const {product} = require("../models");

// create-product
const createProduct = async(reqBody) => {
    return product.create(reqBody);
};
// get product-list
const getProductList = async(req,res) => {
    return product.find({$or:[{price:100}]});
};
// delete product
const deleteProduct = async (productId) => {
    return product.findByIdAndDelete(productId);
};
module.exports = {
    createProduct,
    getProductList,
    deleteProduct
}