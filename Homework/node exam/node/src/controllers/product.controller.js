const { productService } = require("../services");
/* ----------------------------- create-product ----------------------------- */
const createProduct = async (req, res) => {
  try {
    const reqBody = req.body;
    const product = await productService.createProduct(reqBody);
    if (!product) {
      throw new Error("Couldn't create product");
    }
    res.status(200).json({
      success: true,
      message: "Product Created Successfully!",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- get product-list ---------------------------- */
const getProductList = async (req, res) => {
  try {
    const getProduct = await productService.getProductList(req, res);
    res.status(200).json({
      success: true,
      message: "Product details list successfully!",
      data: getProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ----------------------------- delete product ----------------------------- */
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productExis = await productService.getProductById(subcategoryId);
    if (!productExis) {
      throw new Error("product not found!");
    }
    await productService.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product details successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------- update proudct details ------------------------- */
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productExis = await productService.getProductById(productId);
    if (!productExis) {
      throw new Error("Product not found!");
    }
    await productService.updateProduct(productId, req.body);
    res.status(200).json({
      success: true,
      message: "Product details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createProduct,
  getProductList,
  deleteProduct,
  updateProduct,
};
