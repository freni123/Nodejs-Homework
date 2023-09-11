const {subCategoryService} = require("../services");
// create-subcategory
const createSubCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        const subcategory = await subCategoryService.createSubCategory(reqBody);
        if (!subcategory) {
            throw new Error("Couldn't create subCategory");
        }

        res.status(200).json({
            success: true,
            message: "subCategory Create Successfully!",
            data: subcategory,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
// Get subcategory list
const getSubCategoryList = async (req, res) => {
    try {
        const getsubCategory = await subCategoryService.getSubCategoryList(req, res);
        res.status(200).json({
            success: true,
            message: "subCategory details get successfully!",
            data: {getsubCategory},
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
// Delete subcategory
const deleteSubCategory = async (req, res) => {
    try {
        const subcategoryId = req.params.subcategoryId;
        const subcateExists = await subCategoryService.getSubCategoryById(subcategoryId);
        if (!subcateExists) {
            throw new Error("subCategory not found!");
        }
        await subCategoryService.deleteSubCategory(subcategoryId);
        res.status(200).json({
            success: true,
            message: "subCategory details delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
// update subcategory list
const updateSubCategory = async (req, res) => {
    try {
        const subcategoryId = req.params.subcategoryId;
        const subcateExists = await subCategoryService.getSubCategoryById(subcategoryId);
        if (!subcateExists) {
            throw new Error("subCategory not found!");
        }
        await subCategoryService.updateSubCategory(subcategoryId, req.body);
        res.status(200).json({
            success: true,
            message: "subCategory details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createSubCategory,
    getSubCategoryList,
    deleteSubCategory,
    updateSubCategory
}