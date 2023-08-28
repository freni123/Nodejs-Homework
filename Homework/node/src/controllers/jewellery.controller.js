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
};
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
};
// Delete jewellery
const deleteJewellery = async (req,res) => {
    try {
        const jewelleryId = req.params.jewelleryId;
        await jewelleryService.deleteJewellery(jewelleryId);
        res.status(200).json({
            success:true,
            message:"Jewellery Record Delete Successfully!",
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
// Update jewellery
const updateJewellery = async (req,res) => {
    try {
        const jewelleryId = req.params.jewelleryId;
        const jewelleryExists = await jewelleryService.getJewelleryById(jewelleryId);
        if(!jewelleryExists){
            throw new Error("Jewellery not found!");
        }
        await jewelleryService.updateJewellery(jewelleryId,req.body);
        res.status(200).json({success:true,message:"Jewellery record update successfully!"});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}

module.exports ={
    createJewellery,
    getJewelleryList,
    deleteJewellery,
    updateJewellery
}