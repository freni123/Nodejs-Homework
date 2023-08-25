const express = require('express');
const {stationaryValidation} = require('../../validation');
const {stationaryController} = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

// Create-stationary
router.post(
    "/create-stationary",
    validate(stationaryValidation.createStationary),
    stationaryController.createStationary
);
// Get Stationary-List
router.get(
    "/stationary-list",
    stationaryController.getStationaryList
);
module.exports = router;
