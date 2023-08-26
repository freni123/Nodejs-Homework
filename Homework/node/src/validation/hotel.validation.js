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
module.exports = {createHotel}