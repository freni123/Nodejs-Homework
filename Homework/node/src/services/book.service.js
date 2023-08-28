const { book } = require("../models");

// Create-Book
const createBook = async (reqBody) => {
    return book.create(reqBody);
};

//  Get Book-List
const getBookList = async(req,res) => {
  return book.find({$or:[{is_active:true}]});
};
// Delete Book
const deleteBook = async (bookId) => {
  return book.findByIdAndDelete(bookId);
};
// get Book by id
const getBookById = async (bookId) => {
  return book.findById(bookId);
};
// get Book update
const updateBook = async(bookId,updateBody)=>{
  return book.findByIdAndUpdate(bookId,{$set:updateBody});
};
module.exports = {
  createBook,
  getBookList,
  deleteBook,
  getBookById,
  updateBook
}