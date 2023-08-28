const {stationary} = require("../models");

// Create-Stationary
const createStationary = async (reqBody) => {
    return stationary.create(reqBody);
};
// Get Stationary List
const getStationaryList = async (req, res) => {
    return stationary.find({$or:[{price:20}]});
};
// get Stationarydetails by id
const getStationaryById = async (stationaryId) => {
    return stationary.findById(stationaryId);
  };
// Delete stationary
  const deleteStationary= async (stationaryId) => {
    return stationary.findByIdAndDelete(stationaryId);
};
// Update stationary
const updateStationary = async(stationaryId,updateBody) => {
  return stationary.findByIdAndUpdate(stationaryId,{$set:updateBody});
};
module.exports = {
    createStationary,
    getStationaryList,
    getStationaryById,
    deleteStationary,
    updateStationary
  };

