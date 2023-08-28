const express = require('express');
const {userValidation} = require('../../validation');
const {userController} = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

// create user
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);
// GET User List
router.get(
    "/list",
    userController.getUserList
);
// Delete user
router.delete(
    "/delete-user/:userId",
    userController.deleteUser
);
// Update user
router.put(
    "/update-details/:userId",
       userController.updateDetails
);

module.exports = router;