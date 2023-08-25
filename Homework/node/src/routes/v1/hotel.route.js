const express = require('express');
const {hotelValidation} = require('../../validation');
const {hotelController} = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

// create-hotel
router.post(
    "/create-hotel",
    validate(hotelValidation.createHotel),
    hotelController.createHotel
)
// get hotel list
router.get(
    "/hotel-list",
    hotelController.getHotelList
)
module.exports = router;