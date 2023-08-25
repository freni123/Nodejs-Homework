const {hotel} = require("../models");

// create-hotel
const createHotel = async (reqBody) => {
    return hotel.create(reqBody);
};
// get hotel-list
const getHotelList = async (reqBody) => {
    return hotel.find();
};
// get Hotel details by id
const hotelById = async (hotelId) => {
    return hotel.findById(hotelId);
};
// Delete grocery
const deleteHotel = async (hotelId) => {
    return hotel.findByIdAndDelete(hotelId);
};
module.exports = {
    createHotel,
    getHotelList,
    hotelById,
    deleteHotel
}
