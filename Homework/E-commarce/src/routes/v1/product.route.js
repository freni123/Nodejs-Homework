const express = require('express');
const {productController} = require('../../controller');
const {productValidation} = require('../../validation');
const validate  = require('../../middlewares/validate');

const router = express.Router();

// create-product
router.post(
    '/create-product',
    validate(productValidation.createProduct),
    productController.createProduct
);
// get product list
router.get(
    '/product-list',
    productController.getProductList
);
// delete product
router.delete(
    "/delete-product/:productId",
    productController.deleteProduct
);
// update product
router.put(
    "/update-product/:productId",
    productController.updateProduct
);
module.exports = router;

