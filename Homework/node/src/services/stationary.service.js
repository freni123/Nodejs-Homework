const {stationary} = require("../models");

// ** Create-Stationary */
const createStationary = async (reqBody) => {
    return stationary.create(reqBody);
};
//**Get Stationary List */
const getStationaryList = async (req, res) => {
    return stationary.find();
}
module.exports = {createStationary,getStationaryList,};

