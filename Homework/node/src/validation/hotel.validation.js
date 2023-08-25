const joi = require('joi');

/** create hotel*/
const createHotel = {
    body:joi.object().keys({
        hotel_name:joi.string().required().trim(),
        room_number:joi.number().integer().required(),
        room_price:joi.number().integer().required(),
        amenities:joi.string().required().trim(),
        hotel_location:joi.string().required().trim(),

    }),
};
/** Get Book List */
const getHotelList = {
    query:joi.object().keys({
      serach:joi.string().trim().allow(""),
      sortBy: joi.string().trim().allow(""),
      limit: joi.number().integer().allow(""),
      page: joi.number().integer().allow(""),
    })
  }
module.exports = {createHotel,getHotelList}