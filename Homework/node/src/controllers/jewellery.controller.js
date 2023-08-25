const {jewelleryService} = require("../services");
const { options } = require("joi");

// create jewellery
const createJewellery = async(req,res) =>{
    try {
        const reqBody = req.body;
        const jewellery = await jewelleryService.createJewellery(reqBody);
        if(!jewellery){
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
        success: true,
        message:"Jewellery Created Successfully",
        data: {jewellery},
      });
    } catch (error) {
              res.status(400).json({ success: false, message: error.message });

    }
}
// Get jewellery List
const getJewelleryList = async (req,res) => {
    try {
        const getJewelleryDetails = await jewelleryService.getJewelleryList(req,res);
        res.status(200).json({
            success:true,
            message:"Jewellery details get successfully!",
            data:getJewelleryDetails,
        })
    } catch (error) {
        res.status(400);
    }
}
module.exports ={createJewellery,getJewelleryList}