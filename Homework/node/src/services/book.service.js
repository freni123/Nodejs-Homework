const { book } = require("../models");

/**
 * Create-Book
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBook = async (reqBody) => {
    return book.create(reqBody);
  };

/** Get Book-List*/
const getBookList = async(req,res) => {
  return book.find();
};
module.exports = {
  createBook,
  getBookList,
}