const {productService,categoryService,userService,cartService} = require("../services");
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
            message: reqBody,
            data: {reqBody}
        })
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
        const getCategory = await categoryService.getCategoryList(req,res);
        const getProduct = await productService.getProductList(req,res);
        const getCart = await cartService.getCartList(req,res);
        res.status(200).json({
            success: true,
            message: "Product record list successfully!",
            data: {getUser,getCategory,getProduct,getCart}
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
module.exports = {
    createProduct,
    getProductList,
    deleteProduct
}