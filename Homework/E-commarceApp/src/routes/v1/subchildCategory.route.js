const express = require('express');
const {subChildCateController} = require('../../controllers');
const {subChildCateValidation} = require('../../validation');
const validate = require('../../middlewares/validate');

const router = express.Router();

// create subchild-category
router.post(
    '/create-subchildcategory',
    validate(subChildCateValidation.createSubChildCate),
    subChildCateController.createSubChildCate
);
// get subchild-category list
router.get(
    '/subchildcategory-list',
    subChildCateController.getSubChildCatelist
);
// delete subchild-category
router.delete(
    '/delete-subchildcategory/:subchildcateId',
    subChildCateController.deleteSubChildcate
);
// update subchild-category
router.put(
    '/update-subchildcategory/:subchildcateId',
    subChildCateController.updateSubChildCate
);
module.exports = router;
