const {cartService} = require("../services");

// create cart
const createCart = async (req, res) => {
    try {
        const reqBody = req.body;
        const cart = await cartService.createCart(reqBody);
        if (!cart) {
            throw new Error("Couldn't create Cart");
        }

        res.status(200).json({
            success: true,
            message: "Cart Created Successfully!",
            data: cart,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
// Get Cart list
const getCartList = async (req, res) => {
    try {
        const getCart = await cartService.getCartList(req, res);
        res.status(200).json({
            success: true,
            message: "Cart details get successfully!",
            data:getCart,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
// Delete Cart
const deleteCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const cartExists = await cartService.getCartList(cartId);
        if (!cartExists) {
            throw new Error("Cart not found!");
        }
        await cartService.deleteCart(cartId);
        res.status(200).json({
            success: true,
            message: "Cart details delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
// update cart details
const updateCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const cartExists = await cartService.getCartById(cartId);
        if (!cartExists) {
            throw new Error("Cart not found!");
        }
        await cartService.updateCart(cartId, req.body);
        res.status(200).json({
            success: true,
            message: "Cart details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    createCart,
    getCartList,
    deleteCart,
    updateCart
};