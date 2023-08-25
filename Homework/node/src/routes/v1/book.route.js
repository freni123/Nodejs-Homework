const express = require('express');
const {bookValidation} = require('../../validation');
const {bookController} = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

//Create-Book
router.post(
    "/create-book",
    validate(bookValidation.createBook),
    bookController.createBook
);
//Get-Book List
router.get(
    "/book-list",
    bookController.getBookList
);
// Delete Book
router.delete(
    "/delete-book/:bookId",
    bookController.deleteBook
)
module.exports = router;