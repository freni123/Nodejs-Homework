const {stationary} = require("../models");

// ** Create-Stationary */
const createStationary = async (reqBody) => {
    return stationary.create(reqBody);
};
//** Get Stationary List */
const getStationaryList = async (req, res) => {
    return stationary.find();
};
//**  get Stationarydetails by id */
const stationaryById = async (stationaryId) => {
    return stationary.findById(stationaryId);
  };
//** Delete stationary */
  const deleteStationary= async (stationaryId) => {
    return stationary.findByIdAndDelete(stationaryId);
};
module.exports = {
    createStationary,
    getStationaryList,
    stationaryById,
    deleteStationary};

