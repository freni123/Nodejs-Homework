const express = require('express');
const {musicValidation} = require('../../validation');
const {musicController} = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

// create-music
router.post(
    "/create-music",
    validate(musicValidation.createMusic),
    musicController.createMusic
);
// Get Music List
router.get(
    "/music-list",
    musicController.getMusicList
);
//Delete Music
router.delete(
    "/delete-music/:musicId",
    musicController.deleteMusic
)
module.exports = router;