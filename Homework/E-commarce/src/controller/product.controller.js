const {productService,userService} = require("../services");
// create-product
const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;
        const product = await productService.createProduct(reqBody);
        if (!product) {
            throw new Error("Couldn't create product");
        }
        res.status(200).json({
            success: true,
            message:"Product Created Successfully!",
            data:product,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}
// get product-list
const getProductList = async (req, res) => {
    try {
        const getUser = await userService.getUserList(req, res);
        const getProduct = await productService.getProductList(req,res);
        res.status(200).json({
            success: true,
            message: "Product record list successfully!",
            data: {getUser,getProduct}
        })
    } catch (error) {
        res.status(400);
    }
}
//  Delete product
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        await productService.deleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
// update proudct data
const updateProduct = async (req,res) => {
    try {
        const productId = req.params.productId;
        const productExists = await productService.getProductById(productId);
      if (!productExists) {
        throw new Error("Product not found!");
      }
      await productService.updateProduct(productId, req.body);
      res.status(200).json({
        success: true,
        message: "Product data update successfully!",
});
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createProduct,
    getProductList,
    deleteProduct,
    updateProduct
};