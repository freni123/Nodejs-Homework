const {pharmacy} = require("../models");

//Create-Pharmacy
const cratePharmacy = async (reqBody) => {
    return pharmacy.create(reqBody);
};
// get pharmacy-List
const getPharmacyList = async (req,res) => {
    return pharmacy.find({$or:[{is_active:true}]});
};
// get pharmacy details by id
const getPharmacyById = async (pharmacyId) => {
    return pharmacy.findById(pharmacyId);
};
// Delete Pharmacy
  const deletePharmacy = async (pharmacyId) => {
    return pharmacy.findByIdAndDelete(pharmacyId);
};
// Update Pharmacy
const updatePharmacy = async(pharmacyId,updateBody) => {
    return pharmacy.findByIdAndUpdate(pharmacyId,{$set:updateBody});
};
module.exports = {
    cratePharmacy,
    getPharmacyList,
    getPharmacyById,
    deletePharmacy,
    updatePharmacy
}
