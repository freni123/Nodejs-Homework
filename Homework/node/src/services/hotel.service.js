const {hotel} = require("../models");

// create-hotel
const createHotel = async (reqBody) => {
    return hotel.create(reqBody);
};
// get hotel-list
const getHotelList = async (reqBody) => {
    return hotel.find({$or:[{room_price:4590}]});
};
// get Hotel details by id
const getHotelById = async (hotelId) => {
    return hotel.findById(hotelId);
};
// Delete grocery
const deleteHotel = async (hotelId) => {
    return hotel.findByIdAndDelete(hotelId);
};
// Update hotel
const updateHotel = async(hotelId,updateBody) => {
    return hotel.findByIdAndUpdate(hotelId,{$set:updateBody});
};
module.exports = {
    createHotel,
    getHotelList,
    getHotelById,
    deleteHotel,
    updateHotel
}
