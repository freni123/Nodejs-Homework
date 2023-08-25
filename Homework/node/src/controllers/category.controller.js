const { categoryService} = require("../services");
/** create category */
const createCategory = async (req, res) => {
    try {
      const reqBody = req.body;
      // console.log(reqBody);
      // const userExists = await userService.getUserByEmail(reqBody.email);
      // if (userExists) {
      //   throw new Error("User already created by this email!");
      // }

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
  module.exports = {
    createCategory,
    getCategoryList}

