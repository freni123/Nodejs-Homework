const express = require('express');
const {groceryValidation} = require('../../validation');
const {groceryController} = require('../../controllers');
const validate = require('../..//middlewares/validate');

const router = express.Router();
// create-grocery
router.post(
    "/create-grocery",
    validate(groceryValidation.createGrocery),
    groceryController.createGrocery
);
// get-grocery list
router.get(
    "/grocery-list",
    groceryController.getGroceryList
);
// Delete Grocery
router.delete(
    "/delete-grocery/:groceryId",
    groceryController.deleteGrocery
);
// Update Grocery
router.put(
    "/update-grocery/:groceryId",
    groceryController.updateGrocery
)
module.exports = router;