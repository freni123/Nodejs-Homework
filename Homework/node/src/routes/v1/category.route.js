const express = require('express');
// const { userValidation } = require('../../validations');
const { categoryController} = require('../../controllers');
// const validate  = require('../../middlewares/validate');

const router = express.Router();

// create category
router.post(
    "/create-category",
    // validate(userValidation.createUser),
    categoryController.createCategory
);
// get category list
router.get(
    "/list",
    categoryController.getCategoryList
)


module.exports = router;
