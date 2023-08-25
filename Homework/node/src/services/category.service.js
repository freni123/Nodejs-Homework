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
    return User.find();
  }

  module.exports = {
    createCategory,
    getCategoryList
  };