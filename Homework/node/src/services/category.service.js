const { category } = require("../models");

/**
 * Create Category
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createCategory = async (reqBody) => {
    return category.create(reqBody);
  };
  //**Get category List */
  const getCategoryList = async(req, res ) => {
    return category.find();
  }
//**Delete category */
const deleteCategory = async (categoryId) => {
  return category.findByIdAndDelete(categoryId);
}
/** Get Category detalis by id*/
const categoryById = async (categoryId) => {
  return category.findById(categoryId);
}

  module.exports = {
    createCategory,
    getCategoryList,
    deleteCategory,
    categoryById
  };