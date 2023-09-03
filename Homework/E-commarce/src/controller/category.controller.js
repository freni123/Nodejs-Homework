const { categoryService,userService} = require("../services");
const { options } = require("joi");
// create category
const createCategory = async (req, res) => {
    try {
      const reqBody = req.body;
      const category = await categoryService.createCategory(reqBody);
      if (!category) {
        throw new Error("Couldn't create Category");
      }

      res.status(200).json({
        success: true,
        message:"Category Create Successfully!",
        data: category,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
  // Get Category list
  const getCategoryList = async (req,res) =>{
    try {
      const getUser = await userService.getUserList(req, res);
      const getCategory = await categoryService.getCategoryList(req,res);

      res.status(200).json({
        success:true,
        message:"Category details get successfully!",
        data:{getCategory,getUser},
      })
    } catch (error) {
      res.status(400);
    }
  }
  // Delete Category
  const deleteCategory = async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
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
  // update category
  const updateCategory = async (req,res) => {
    try {
        const categoryId= req.params.categoryId;
        const categoryExists = await categoryService.getCategoryById(categoryId);
      if (!categoryExists) {
        throw new Error("Category not found!");
      }
      await categoryService.updateCategory(categoryId, req.body);
      res.status(200).json({
        success: true,
        message: "Category data update successfully!",
});
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
};

  module.exports = {
    createCategory,
    getCategoryList,
    deleteCategory,
    updateCategory
  }

