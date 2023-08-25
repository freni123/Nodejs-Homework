const express = require('express');
const {pharmacyValidation} = require('../../validation');
const {pharmacyController} = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

// Create-Pharmacy
router.post(
    '/create-pharmacy',
    validate(pharmacyValidation.createPharmacy),
    pharmacyController.cratePharmacy
);
// Get-pharmacy List
router.get(
    '/pharmacy-list',
    pharmacyController.getPharmacyList
);
module.exports = router;