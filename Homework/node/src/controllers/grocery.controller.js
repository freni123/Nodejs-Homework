const {groceryService} = require('../services');
const {options} = require("joi");

// create-grocery
const createGrocery = async (req,res) => {
    try {
        const reqBody = req.body;
        const grocery = await groceryService.createGrocery(reqBody);
        if(!grocery){
            throw new Error("Couldn't create grocery");
        }
        res.status(200).json({
            success:true,
            message:"Grocery Created Successfully",
            data:{grocery},
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });

    }
}
// get grocery list
const getGroceryList = async (req,res) => {
    try {
        const getGroceryDetails = await groceryService.getGroceryList(req,res);
        res.status(200).json({
            success:true,
            message:"Grocery List successfully!",
            data:getGroceryDetails,
        })

    } catch (error) {
        res.status(400);
    }
}
// Delete Grocery
const deleteGrocery = async (req,res) => {
    try {
        const groceryId = req.params.groceryId;
        await groceryService.deleteGrocery(groceryId);
        res.status(200).json({
            success:true,
            message:"Grocery Record Delete Successfully!",
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
// Update Grocery
const updateGrocery = async (req,res) => {
    try {
        const groceryId = req.params.groceryId;
        const groceryExists = await groceryService.getGroceryById(groceryId);
        if(!groceryExists){
            throw new Error("grocery not found");
        }
        await groceryService.updateGrocery(groceryId.req.body);
        res.status(200).json({success:true,message:"Grocery record update successfully!"});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}
module.exports = {
    createGrocery,
    getGroceryList,
    deleteGrocery,
    updateGrocery
}