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
  return book.find({$or:[{is_active:true}]});
};
/** Delete Book */
const deleteBook = async (bookId) => {
  return book.findByIdAndDelete(bookId);
}
module.exports = {
  createBook,
  getBookList,
  deleteBook
}