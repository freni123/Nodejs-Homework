const {paymentService} = require("../services");
// create-payment
const createPayment = async (req, res) => {
    try {
        const reqBody = req.body;
        const payment = await paymentService.createPayment(reqBody);
        if (!payment) {
            throw new Error("Couldn't create payment");
        }
        res.status(200).json({
            success: true,
            message:"payment Created Successfully!",
            data:payment,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
// get Payment-list
const getPaymentList = async (req, res) => {
    try {
        const getPayment = await paymentService.getPaymentList(req,res);
        res.status(200).json({
            success: true,
            message: "Payment details list successfully!",
            data: {getPayment}
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
//  Delete payment
const deletePayment = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;
        await paymentService.deletePayment(paymentId);
        res.status(200).json({
            success: true,
            message: "Payment details delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
// update payment details
const updatePayment = async (req,res) => {
    try {
        const paymentId = req.params.paymentId;
        const paymentExists = await paymentService.getPaymentById(paymentId);
      if (!paymentExists) {
        throw new Error("Payment not found!");
      }
      await paymentService.updatePayment(paymentId, req.body);
      res.status(200).json({
        success: true,
        message: "Payment details update successfully!",
});
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createPayment,
    getPaymentList,
    deletePayment,
    updatePayment
};