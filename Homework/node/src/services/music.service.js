const {music} = require("../models");

// create-music
const createMusic = async (reqBody) => {
    return music.create(reqBody);
};
// get music list
const getMusicList = async(req,res) => {
    return music.find({$or:[{is_active:true}]});
};
// get Music details by id
const musicById = async (musicId) => {
    return music.findById(musicId);
};
  // Delete music
  const deleteMusic = async (musicId) => {
    return music.findByIdAndDelete(musicId);
};
module.exports = {
    createMusic,
    getMusicList,
    musicById,
    deleteMusic
}