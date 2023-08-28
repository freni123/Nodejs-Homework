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
// Delete Pharmacy
router.delete(
    '/delete-pharmacy/:pharmacyId',
    pharmacyController.deletePharmacy
);
// Update Pharmacy
router.put(
    '/update-pharmacy/:pharmacyId',
    pharmacyController.updatePharmacy
)
module.exports = router;