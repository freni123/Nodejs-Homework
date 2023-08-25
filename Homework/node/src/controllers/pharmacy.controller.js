const {pharmacyService} = require('../services');
const {options} = require("joi");

// Create-pharmacy
const cratePharmacy = async (req,res) => {
    try {
        const reqBody = req.body;
        const pharmacy = await pharmacyService.cratePharmacy(reqBody);
        if(!pharmacy){
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
            success:true,
            message:"pharmacy Created Successfully",
            data:{pharmacy},
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
// Get Pharmacy List
const getPharmacyList = async(req,res) => {
    try {
        const getPharmacyDetails = await pharmacyService.getPharmacyList(req,res);
        res.status(200).json({
            success:true,
            message:"Pharmacy Deatails get Successfully!",
            data:getPharmacyDetails,
        })
    } catch (error) {
        res.status(400);

    }
}
module.exports = {
    cratePharmacy,
    getPharmacyList
}