const { category } = require("../models");

// create-category
const createCategory = async (reqBody) => {
    return category.create(reqBody);
  };
// get category list
  const getCategoryList = async(req, res ) => {
    return category.find({$or:[{is_active:false}]});
  }
// Delete category
const deleteCategory = async (categoryId) => {
  return category.findByIdAndDelete(categoryId);
}
//  Get Category detalis by id
const categoryById = async (categoryId) => {
  return category.findById(categoryId);
}

  module.exports = {
    createCategory,
    getCategoryList,
    deleteCategory,
    categoryById
  };