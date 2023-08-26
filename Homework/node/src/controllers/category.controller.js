const { categoryService} = require("../services");
const { options } = require("joi");
// create category 
const createCategory = async (req, res) => {
    try {
      const reqBody = req.body;
      const category = await categoryService.createCategory(reqBody);
      if (!category) {
        throw new Error("Something went wrong, please try again or later!");
      }

      res.status(200).json({
        success: true,
        message: reqBody,
        data: { reqBody },
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
  // Get Category list
  const getCategoryList = async (req,res) =>{
    try {
      const getDetails = await categoryService.getCategoryList(req,res);
      res.status(200).json({
        success:true,
        message:"Category details get successfully!",
        data:getDetails,
      })
    } catch (error) {
      res.status(400);
    }
  }
  // Delete Category
  const deleteCategory = async (req, res) => {
    try {
      const categoryId = req.params.userId;
      const categoryExists = await categoryService.getCategoryList(categoryId);
      if (!categoryExists) {
        throw new Error("Category not found!");
      }
      await categoryService.deleteCategory(categoryId);
      res.status(200).json({
        success: true,
        message: "Category Record delete successfully!",
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
  module.exports = {
    createCategory,
    getCategoryList,
    deleteCategory
  }

