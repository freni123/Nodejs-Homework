const express = require('express');
const {schoolValidation} = require('../../validation');
const {schoolController} = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

// create-school
router.post(
    '/create-school',
    validate(schoolValidation.createSchool),
    schoolController.createSchool,
),
//Get-Book List
router.get(
    "/school-list",
    schoolController.getSchoolList,
    )
module.exports = router;