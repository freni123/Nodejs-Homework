const express = require('express');
const {travelValidation} = require('../../validation');
const {travelController} = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

// create-travel
router.post(
    "/create-travel",
    validate(travelValidation.createTravel),
    travelController.createTravel
);
// get travel list
router.get(
    "/travel-list",
    travelController.getTravelList
);
//Delete travel
router.delete(
    "/delete-travel/:travelId",
    travelController.deleteTravel
);
//  Update travel
router.put(
    "/update-travel/:travelId",
    travelController.updateTravel
);
module.exports = router;