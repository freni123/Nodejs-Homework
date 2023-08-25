const express = require('express');
const {busValidation} = require('../../validation');
const {busController} = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

// Create-Bus
router.post(
    "/create-bus",
    validate(busValidation.createBus),
    busController.createBus
);
// Get-Bus List
router.get(
    "/bus-list",
    busController.getBusList
);
module.exports = router;

