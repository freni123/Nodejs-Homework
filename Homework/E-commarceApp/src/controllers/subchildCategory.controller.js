const {subChildCateService} = require("../services");
// create-subchildcategory
const createSubChildCate = async (req,res) => {
    try {
        const reqBody = req.body;
        const subChildCategory = await subChildCateService.createSubChildCate(reqBody);
        if(!subChildCategory){
            throw new Error("Could not create child category");
        }
        res.status(200).json({
            success:true,
            message:"Successfully created child category!",
            data:subChildCategory,
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
// get subchild category list
const getSubChildCatelist = async (req,res) => {
    try {
        const getsubChildCategory = await subChildCateService.getSubChildCatelist(req,res);
        res.status(200).json({
            success:true,
            message:"subChild category details get successfully!",
            data:getsubChildCategory,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
// delete subchild category
const deleteSubChildcate = async (req,res) => {
    try {
        const subchildcateId = req.params.subchildcateId;
        const subchildcateExi = await subChildCateService.getSubChildCateById(subchildcateId);
        if(!subchildcateExi){
            throw new Error("subChild category not found!");
        }
        await subChildCateService.deleteSubChildcate(subchildcateId);
        res.status(200).json({
            success:true,
            message:"subChild category details delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
// update subchild category
const updateSubChildCate = async (req,res) => {
    try {
        const subchildcateId =req.params.subchildcateId;
        const subchildcateExi = await subChildCateService.getSubChildCateById(subchildcateId);
        if(!subchildcateExi){
            throw new Error("subChild category not found!");
        }
        await subChildCateService.updateSubChildCate(subchildcateId);
        res.status(200).json({success:true,message:"subchild category details update successfully!"});
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    createSubChildCate,
    getSubChildCatelist,
    deleteSubChildcate,
    updateSubChildCate
};