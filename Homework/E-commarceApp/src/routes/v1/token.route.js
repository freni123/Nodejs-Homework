const express = require('express');
const {tokenController} = require('../../controllers');
const {tokenValidation} = require('../../validation');
const validate = require('../../middlewares/validate');

const router = express.Router();

// createt token
router.post(
    '/create-token',
    // validate(tokenValidation.generateToken),
    tokenController.generateToken
);
/** Verify token to get user details */
// router.get("/verify-token", auth(), tokenController.verifyToken);

module.exports = router;