const express = require("express");
const { cartController } = require("../../controllers");

const router = express.Router();

/* ------------------------------- create-cart ------------------------------ */
router.post("/create-cart", cartController.createCart);
/* ------------------------------ get cart list ----------------------------- */
router.get("/cart-list", cartController.getCartList);
/* ------------------------------- delete cart ------------------------------ */
router.delete("/delete-cart/:cartId", cartController.deleteCart);
/* ------------------------------- update cart ------------------------------ */
router.put("/update-cart/:cartId", cartController.updateCart);
module.exports = router;
