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
            message:"hotel details get successfully!",
            data:getHotelDetails,
        })
    } catch (error) {
        res.status(400);
    }
}
module.exports = {
    createHotel,
    getHotelList
}