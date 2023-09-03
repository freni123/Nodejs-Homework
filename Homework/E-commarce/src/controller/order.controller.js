const {userService,orderService} = require('../services');
const {options} = require("joi");
//create order
const createOrder = async (req,res) => {
    try {
        const reqBody = req.body;
        const order = await orderService.createOrder(reqBody);
        if(!order){
            throw new Error("Couldn't create orde")
        }
        res.status(200).json({
            success:true,
            message:"Order created successfully!",
            data:order,
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
//get order list
const getOredrList = async (req,res) =>{
    try {
        const getOrder = await orderService.getOrderList(res.res);
        const getUser = await userService.getUserList(req, res);
        res.status(200).json({
        success:true,
        message:"order details get successfully!",
        data:{getUser,getOrder},
      })
    } catch (error) {
      res.status(400).json({success:false,message:error.message});
    }
};
// delete order
const deleteOrder = async (req,res) => {
    try {
        const orderId = req.params.orderId;
        const orderExists = await orderService.getOrderList(orderId);
        if(!orderExists){
            throw new Error("Order not found!");
        }
        await orderService.deleteOrder(orderId);
        res.status(200).json({
            success:true,
            message:"Order Record delete successfully!",
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
// update order
const updateOrder = async (req,res) => {
    try {
        const orderId = req.params.orderId;
        const orderExists = await orderService.getOrderById(orderId);
      if (!orderExists) {
        throw new Error("Order not found!");
      }
      await orderService.updateOrder(orderId, req.body);
      res.status(200).json({
        success: true,
        message: "Order data update successfully!",
});
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createOrder,
    getOredrList,
    deleteOrder,
    updateOrder
};
