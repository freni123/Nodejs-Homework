const express = require("express");
const { productController } = require("../../controllers");

const router = express.Router();

/* ----------------------------- create-product ----------------------------- */
router.post("/create-product", productController.createProduct);
/* ---------------------------- get product list ---------------------------- */
router.get("/product-list", productController.getProductList);
/* ----------------------------- delete product ----------------------------- */
router.delete("/delete-product/:productId", productController.deleteProduct);
/* ----------------------------- update product ----------------------------- */
router.put("/update-product/:productId", productController.updateProduct);
module.exports = router;
