const {category} = require("../models");

// create-category
const createCategory = async (reqBody) => {
  return category.create(reqBody);
};
// get category list
const getCategoryList = async (req, res) => {
  return category.find({
    $or: [{
      is_active: false
    }]
  });
};
// Delete category
const deleteCategory = async (categoryId) => {
  return category.findByIdAndDelete(categoryId);
};
//  Get Category detalis by id
const getCategoryById = async (categoryId) => {
  return category.findById(categoryId);
};
// update category
const updateCategry = async (categoryId, updatebody) => {
  return category.findByIdAndUpdate(categoryId, { $set: updatebody });
};
module.exports = {
  createCategory,
  getCategoryList,
  deleteCategory,
  getCategoryById,
  updateCategry
};