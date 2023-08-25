const express = require('express');
const { categoryValidation } = require('../../validation');
const { categoryController} = require('../../controllers');
const validate  = require('../../middlewares/validate');

const router = express.Router();

// create category
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);
// get category list
router.get(
    "/category-list",
    categoryController.getCategoryList
);
router.delete(
    "/delete-category/:categoryId",
    categoryController.deleteCategory
)


module.exports = router;
