const express = require('express');
const {jewelleryValidation} = require('../../validation');
const {jewelleryController} = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

//create-jewellery
router.post(
    "/create-jewellery",
    validate(jewelleryValidation.createJewellery),
    jewelleryController.createJewellery
),
//Get-jewellery List
router.get(
    "/jewellery-list",
    jewelleryController.getJewelleryList
);
//Delete jewellery
router.delete(
    "/delete-jewellery/:jewelleryId",
    jewelleryController.deleteJewellery
)

module.exports = router;