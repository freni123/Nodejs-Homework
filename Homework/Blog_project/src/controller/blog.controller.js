const { blogService } = require("../services");

// create blog
const createBlog = async (req, res) => {
  try {
    const reqBody = req.body;

    const blog = await blogService.createBlog(reqBody);
    if (!blog) {
      throw new Error("Blog not found !");
    }

    res.status(200).json({
      success: true,
      message: "Blog created !",
      data: blog,
    });
  } catch (error) {
    res.status(error?.message).json({
      success: false,
      message:
        error?.message || "Something wents wrong , please try again or later !",
    });
  }
};
// get blog list
const getBlogList = async (req, res) => {
  try {
    const getList = await blogService.getBlogList();
    if (!getList) {
      throw new Error("Blog not found !");
    }

    res.status(200).json({
      success: true,
      message: "Blog list !",
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
// blog delete record
const deleteRecord = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const blogExist = await blogService.getBlogById(blogId);
    if (!blogExist) {
      throw new Error("blog is not found !");
    }

    await blogService.deleteRecord(blogId);

    res.status(200).json({
      success: true,
      message: "Record deleted successfully !",
    });
  } catch (error) {
    res.status(error?.message || 400).json({
      success: false,
      message:
        error?.message || "Something wents wrong , please try again or later !",
    });
  }
};
// blog update record
const updateRecord = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const blogEx = await blogService.getBlogById(blogId);
    if (!blogEx) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await blogService.updateRecord(blogId, req.body);

    res.status(200).json({
      success: true,
      message: "Record updated !",
      data: updated,
    });
  } catch (error) {
    res.status(error?.message || 400).json({
      success: false,
      message:
        error?.message || "Something wents wrong , please try again or later !",
    });
  }
};

module.exports = {
  createBlog,
  getBlogList,
  updateRecord,
  deleteRecord,
};
