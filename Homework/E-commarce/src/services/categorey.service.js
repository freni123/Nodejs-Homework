const { category } = require("../models");

// create-category
const createCategory = async (reqBody) => {
    return category.create(reqBody);
  };
// get category list
  const getCategoryList = async(req, res ) => {
    return category.find({$or:[{is_active:true}]});
  }
// Delete category
const deleteCategory = async (categoryId) => {
  return category.findByIdAndDelete(categoryId);
}
  module.exports = {
    createCategory,
    getCategoryList,
    deleteCategory
  };