const { userService} = require("../services");
/** create user */
const createUser = async (req, res) => {
    try {
      const reqBody = req.body;
      // console.log(reqBody);
      // const userExists = await userService.getUserByEmail(reqBody.email);
      // if (userExists) {
      //   throw new Error("User already created by this email!");
      // }

      const user = await userService.createUser(reqBody);
      if (!user) {
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
  // Get user list
  const getUserList = async (req,res) =>{
    try {
      const getDetails = await userService.getUserList(req,res);
      res.status(200).json({
        success:true,
        message:"User details get successfully!",
        data:getDetails,
      })
    } catch (error) {
      res.status(400);
    }
  }
  /** Delete user */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    // const userExists = await userService.getUserById(userId);
    // if (!userExists) {
    //   throw new Error("User not found!");
    // }

    await userService.deleteUser(userId);

    res.status(200).json({
      success: true,
      message: "User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
// update user
const updateDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    await userService.updateDetails(userId, req.body);

    res
      .status(200)
      .json({ success: true, message: "User details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};



  module.exports = {
    createUser,
    getUserList,
    deleteUser,
    updateDetails
  }

