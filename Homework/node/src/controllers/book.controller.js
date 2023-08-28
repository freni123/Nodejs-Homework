    // const { LEGAL_TLS_SOCKET_OPTIONS } = require("mongodb");
const {bookService} = require("../services");
const { options } = require("joi");
// create-book
const createBook = async(req,res) =>{
    try {
        const reqBody = req.body;
        const book = await bookService.createBook(reqBody);
        if(!book){
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
        success: true,
        message:"Book Created Successfully",
        data: {book},
      });
    } catch (error) {
              res.status(400).json({ success: false, message: error.message });

    }
}
// Get Book List
const getBookList = async (req,res) => {
    try {
        const getBookDetails = await bookService.getBookList(req,res);
        res.status(200).json({
            success:true,
            message:"Book Record get successfully!",
            data:getBookDetails,
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}
// Delete Book
const deleteBook = async (req,res) => {
    try {
        const bookId = req.params.bookId;
        await bookService.deleteBook(bookId);
        res.status(200).json({
            success:true,
            message:"Book Record deleted successfully!",
        })
    } catch (error) {
        res.status(400);json({success:false,message:error.message});
    }
};
//  update Book
const updateBook = async (req,res) => {
    try {
        const bookId = req.params.bookId;
        const bookExists = await bookService.getBookById(bookId);
        if(!bookExists){
            throw new Error("Book not found!");
        }
        await bookService.updateBook(bookId,req.body);
        res.status(200).json({success:true,message:"Book record update successfully!"});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}
module.exports = {
    createBook,
    getBookList,
    deleteBook,
    updateBook
}
