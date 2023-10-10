const express = require("express");
const { userController } = require("../../controllers");

const router = express.Router();

/* ------------------------------- create-user ------------------------------ */
router.post("/create-user", userController.createUser);
/* ------------------------------ get user list ----------------------------- */
router.get("/user-list", userController.getUserList);
/* ---------------------------- delete user list ---------------------------- */
router.delete("/delete-user/:userId", userController.deleteUser);
/* ---------------------------- update user list ---------------------------- */
router.put("/update-user/:userId", userController.updateDetails);

/* -------------------------------- Send mail ------------------------------- */
router.post("/send-mail", userController.sendMail);
module.exports = router;
