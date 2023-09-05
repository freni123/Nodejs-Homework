const {travelService} = require('../services');
const {options} = require("joi");
// create-travel
const createTravel = async(req,res) => {
    try {
        const reqBody = req.body;
        const travel = await travelService.createTravel(reqBody);
        if(!travel){
            throw new Error ("Something went wrong, please try again or later!");
        }
        res.status(200).json({
            success:true,
            message:"travel data created successfully",
            data:{travel},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}
//  get travel list
const getTravelList = async (req,res) => {
    try {
        const getTravelDetails = await travelService.getTravelList(req,res);
        res.status(200).json({
            success:true,
            message:"travel List successfully!",
            data:getTravelDetails,
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}
// Delete travel Record
const deleteTravel = async (req,res) => {
    try {
        const travelId = req.params.travelId;
        await travelService.deleteTravel(travelId);
        res.status(200).json({
            success:true,
            message:"travel data Delete Successfully!",
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
// Update travel
const updateTravel = async (req,res) => {
    try {
        const travelId = req.params.travelId;
        const travelExists = await travelService.getTravelById(travelId);
        if(!travelExists){
            throw new Error("travel not found!");
        }
        await travelService.updateTravel(travelId,req.body);
        res.status(200).json({success:true,message:"Travel data update successfully!"});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

module.exports = {
    createTravel,
    getTravelList,
    deleteTravel,
    updateTravel
}