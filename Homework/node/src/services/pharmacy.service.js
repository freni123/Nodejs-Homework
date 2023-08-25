const {pharmacy} = require("../models");

/** Create-Pharmacy */
const cratePharmacy = async (reqBody) => {
    return pharmacy.create(reqBody);
};
/** get pharmacy-List */
const getPharmacyList = async (req,res) => {
    return pharmacy.find();
};
module.exports = {cratePharmacy,getPharmacyList}