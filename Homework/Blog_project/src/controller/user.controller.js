const { userService } = require("../services");

/**create user */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;
    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("user not found !");
    }

    res.status(200).json({
      success: true,
      message: "user created !",
      data: user,
    });
  } catch (error) {
    res.status(error?.message).json({
      success: false,
      message: "Something wents wrong , please try again or later !",
    });
  }
};

/** get list */
const getUserList = async (req, res) => {
  try {
    const getList = await userService.getUserList();
    if (!getList) {
      throw new Error("user not found !");
    }

    res.status(200).json({
      success: true,
      message: "user list !",
      data: getList,
    });
  } catch (error) {
    res.status(error?.message || 400).json({
      success: false,
      message:
        error?.message || "Something wents wrong , please try again or later !",
    });
  }
};
// delete data
const deleteRecord = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExist = await userService.getUserList(userId);
    if (!userExist) {
      throw new Error("user is not found !");
    }

    await userService.deleteRecord(userId);

    res.status(200).json({
      success: true,
      message: "Record deleted successfully !",
    });
  } catch (error) {
    res.status(error?.message || 400).json({
      success: false,
      message:
        "Something wents error?.message || wrong , please try again or later !",
    });
  }
};

// update data
const updateRecord = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userEx = await userService.getUserById(userId);
    if (!userEx) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await userService.updateRecord(userId, req.body);

    res.status(200).json({
      success: true,
      message: "Record updated !",
      data: updated,
    });
  } catch (error) {
    res.status(error?.message || 400).json({
      success: false,
      message:
        "Something wents error?.message || wrong , please try again or later !",
    });
  }
};

module.exports = {
  createUser,
  getUserList,
  updateRecord,
  deleteRecord,
};
