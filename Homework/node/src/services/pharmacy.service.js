const {pharmacy} = require("../models");

//Create-Pharmacy
const cratePharmacy = async (reqBody) => {
    return pharmacy.create(reqBody);
};
// get pharmacy-List
const getPharmacyList = async (req,res) => {
    return pharmacy.find({$or:[{is_active:false}]});
};
// get pharmacy details by id
const pharmacyById = async (pharmacyId) => {
    return pharmacy.findById(pharmacyId);
};
// Delete Pharmacy
  const deletePharmacy = async (pharmacyId) => {
    return pharmacy.findByIdAndDelete(pharmacyId);
};

module.exports = {
    cratePharmacy,
    getPharmacyList,
    pharmacyById,
    deletePharmacy
}
