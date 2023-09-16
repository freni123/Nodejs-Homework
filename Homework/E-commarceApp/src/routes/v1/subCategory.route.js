const express = require("express");
const { subCategoryController } = require("../../controllers");
const { subCategoryValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create-subcategory
router.post(
  "/create-subcategory",
  validate(subCategoryValidation.createSubCategory),
  subCategoryController.createSubCategory
);
// get-subcategory list
router.get("/subcategory-list", subCategoryController.getSubCategoryList);
// delete-subcategory
router.delete(
  "/delete-subcategory/:subcategoryId",
  subCategoryController.deleteSubCategory
);
// update-subcategory
router.put(
  "/update-subcategory/:subcategoryId",
  subCategoryController.updateSubCategory
);
module.exports = router;
