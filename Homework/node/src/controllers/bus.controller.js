const {busService} = require("../services");
const {options} = require("joi");

// create-bus
const createBus = async (req,res) => {
    try {
        const reqBody = req.body;
        const bus = await busService.createBus(reqBody);
        if(!bus){
            throw new Error("Could not create Bus ");
        }
        res.status(200).json({
            success:true,
            message:"Bus Created Successfully",
            data:{bus},
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
// Get Bus List
const getBusList = async(req,res) => {
    try {
        const getBusDetails = await busService.getBusList(req,res);
        res.status(200).json({
            success:true,
            message:"Bus details get successfully!",
            data:getBusDetails,
        })
    } catch (error) {
        res.status(400);
  }
}
module.exports = {createBus,getBusList}