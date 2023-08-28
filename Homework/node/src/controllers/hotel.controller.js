const {hotelService} = require('../services');
const {options} = require("joi");
// create-hotel
const createHotel = async(req,res) => {
    try {
        const reqBody = req.body;
        const hotel = await hotelService.createHotel(reqBody);
        if(!hotel){
            throw new Error ("Something went wrong, please try again or later!");
        }
        res.status(200).json({
            success:true,
            message:"Hotel created successfully",
            data:{hotel},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}
//  get hotel list
const getHotelList = async (req,res) => {
    try {
        const getHotelDetails = await hotelService.getHotelList(req,res);
        res.status(200).json({
            success:true,
            message:"hotel List successfully!",
            data:getHotelDetails,
        })
    } catch (error) {
        res.status(400);
    }
}
// Delete Hotel Record
const deleteHotel = async (req,res) => {
    try {
        const hotelId = req.params.hotelId;
        await hotelService.deleteHotel(hotelId);
        res.status(200).json({
            success:true,
            message:"Hotel Record Delete Successfully!",
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
// Update Hotel
const updateHotel = async (req,res) => {
    try {
        const hotelId = req.params.hotelId;
        const hotelExists = await hotelService.getHotelById(hotelId);
        if(!hotelExists){
            throw new Error("Hotel not found!");
        }
        await hotelService.updateHotel(hotelId,req.body);
        res.status(200).json({success:true,message:"Hotel record update successfully!"});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

module.exports = {
    createHotel,
    getHotelList,
    deleteHotel,
    updateHotel
}