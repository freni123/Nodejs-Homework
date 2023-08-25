const {bus} = require("../models");

// ** Create-Bus */
const createBus = async (reqBody) => {
    return bus.create(reqBody);
};

/** Get Bus-List*/
const getBusList = async(req,res) => {
  return bus.find({$or:[{ticket_price:400}]});
};
/** Delete Bus-List*/
const deleteBus = async (busId) => {
  return bus.findByIdAndDelete(busId);
};
/** Get Bus detalis by id*/
const busById = async (busId) => {
  return bus.findById(busId);
};
module.exports = {
    createBus,
    getBusList,
    deleteBus,
    busById
}
