const {travel} = require("../models");

// create-travel
const createTravel = async (reqBody) => {
    return travel.create(reqBody);
};
// Get travel-List
const getTravelList = async(req,res) => {
    return travel.find();
};
// get travel details by id
const getTravelById = async (travelId) => {
  return travel.findById(travelId);
};
// Delete travel
const deleteTravel = async (travelId) => {
  return travel.findByIdAndDelete(travelId);
};
// Update travel
const updateTravel = async(travelId,updateBody) => {
  return travel.findByIdAndUpdate(travelId,{$set:updateBody});
};

  module.exports = {
    createTravel,
    getTravelList,
    getTravelById,
    deleteTravel,
    updateTravel
};
