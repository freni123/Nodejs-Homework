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
router.get(
    "/list",
    categoryController.getCategoryList
)


module.exports = router;
