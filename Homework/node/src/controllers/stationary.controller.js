const {stationaryService} = require("../services");
const { options } = require("joi");

// create-stationary
const createStationary = async(req,res) => {
    try {
        const reqBody = req.body;
        const stationary = await stationaryService.createStationary(reqBody);
        if(!stationary){
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message:"Stationary Details Successfully",
            data: {stationary},
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
// Get-Stationary List
const getStationaryList = async (req,res) => {
    try {
        const getStationaryDetails = await stationaryService.getStationaryList(req,res);
        res.status(200).json({
            success:true,
            message:"Stationary details get successfully!",
            data:{getStationaryDetails},
        })
    } catch (error) {
        res.status(400);
    }
}
//Delete Stationary
const deleteStationary = async (req,res) => {
    try {
        const stationaryId = req.params.stationaryId;
        await stationaryService.deleteStationary(stationaryId);
        res.status(200).json({
            success:true,
            message:"Stationary Record Delete Successfully!",
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}

module.exports = {
    createStationary,
    getStationaryList,
    deleteStationary
}