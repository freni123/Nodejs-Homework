const { subCategory } = require("../models");

// create sub-category
const createSubCategory = async (reqBody) => {
  return subCategory.create(reqBody);
};
// get sub-category list
const getSubCategoryList = async (req, res) => {
  return subCategory.find().populate("category");
};
// get sub-category details by id
const getSubCategoryById = async (subcategoryId) => {
  return subCategory.findById(subcategoryId);
};
// delete sub-category
const deleteSubCategory = async (subcategoryId) => {
  return subCategory.findByIdAndDelete(subcategoryId);
};
// update sub-category details
const updateSubCategory = async (subcategoryId, updateBody) => {
  return subCategory.findByIdAndUpdate(subcategoryId, {
    $set: updateBody,
  });
};
module.exports = {
  createSubCategory,
  getSubCategoryList,
  getSubCategoryById,
  deleteSubCategory,
  updateSubCategory,
};
