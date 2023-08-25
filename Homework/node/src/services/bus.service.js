const {bus} = require("../models");

// ** Create-Bus */
const createBus = async (reqBody) => {
    return bus.create(reqBody);
  };

/** Get Book-List*/
const getBusList = async(req,res) => {
  return bus.find();
}
module.exports = {
    createBus,
    getBusList,
}