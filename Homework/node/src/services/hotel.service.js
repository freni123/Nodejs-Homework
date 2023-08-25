const {hotel} = require("../models");

// create-hotel
const createHotel = async (reqBody) => {
    return hotel.create(reqBody);
};
// get hotel-list
const getHotelList = async (reqBody) => {
    return hotel.find();
};
module.exports = {
    createHotel,
    getHotelList,
}
