const express = require('express');
const {userController} = require('../../controller')
const {userValidation} = require('../../validation');
const validate  = require('../../middlewares/validate');

const router = express.Router();

// create-user
router.post(
    '/create-user',
    validate(userValidation.createUser),
    userController.createUser
);
// get user list
router.get(
    '/user-list',
    userController.getUserList
);
// delete user
router.delete(
    "/delete-user/:userId",
    userController.deleteUser
);
module.exports = router;