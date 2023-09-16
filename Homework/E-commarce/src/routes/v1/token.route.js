const express = require('express');
const {tokenController} = require('../../controller');
const {tokenValidation} = require('../../validation');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');

const router = express.Router();

/**Create JWT */
router.post('/create-token',
    validate(tokenValidation.generateToken),
    tokenController.generateToken
);
/** Verify token to get user details */
router.get("/verify-token", auth(), tokenController.verifyToken);


module.exports = router;