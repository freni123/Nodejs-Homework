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
//Get-School List
router.get(
    "/school-list",
    schoolController.getSchoolList,
),
//Delete School
router.delete(
    '/delete-school/:schoolId',
    schoolController.deleteSchool
),
//Update School
router.put(
    '/update-school/:schoolId',
    schoolController.updateSchool
)
module.exports = router;