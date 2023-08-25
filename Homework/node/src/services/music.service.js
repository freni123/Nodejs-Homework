const {music} = require("../models");

// create-music
const createMusic = async (reqBody) => {
    return music.create(reqBody);
};

// get music list
const getMusicList = async(req,res) => {
    return music.find({$or:[{is_active:true}]});
};
module.exports = {
    createMusic,
    getMusicList
}