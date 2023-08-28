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
};
// Get Pharmacy List
const getPharmacyList = async(req,res) => {
    try {
        const getPharmacyDetails = await pharmacyService.getPharmacyList(req,res);
        res.status(200).json({
            success:true,
            message:"Pharmacy Deatails get Successfully!",
            data: getPharmacyDetails,
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });

    }
};
// Delete Pharmacy
const deletePharmacy = async (req,res) => {
    try {
        const pharmacyId = req.params.pharmacyId;
        await pharmacyService.deletePharmacy(pharmacyId);
        res.status(200).json({
            success:true,
            message:"Pharmacy Record Delete Successfully!",
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
// Update Pharmacy
const updatePharmacy = async (req,res) => {
    try {
        const pharmacyId = req.params.pharmacyId;
        const pharmacyExists = await pharmacyService.getPharmacyById(pharmacyId);
        if(!pharmacyExists){
            throw new Error("Pharmacy not found!");
        }
        await pharmacyService.updatePharmacy(pharmacyId,req.body);
        res.status(200).json({success:true,message:"Pharmacy record update successfully!"});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

module.exports = {
    cratePharmacy,
    getPharmacyList,
    deletePharmacy,
    updatePharmacy
}