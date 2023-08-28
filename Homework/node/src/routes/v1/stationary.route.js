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
// Delete Stationary
router.delete(
    "/delete-stationary/:stationaryId",
    stationaryController.deleteStationary
);
// Update Stationary
router.put(
    "/update-stationary/:stationaryId",
    stationaryController.updateStationary
)

module.exports = router;
