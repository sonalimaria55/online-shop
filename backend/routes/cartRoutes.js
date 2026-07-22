const express = require("express");

const router = express.Router();

const guestMiddleware = require("../middleware/guestMiddleware");
const optionalProtect = require("../middleware/optionalProtect");
const {
    addToCart,
    getCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    mergeGuestCart,
} = require("../controllers/cartController");

// Every cart request gets guest/customer identity
router.use(optionalProtect);
router.use(guestMiddleware);

router.post("/add", addToCart);

router.get("/", getCart);

router.put("/:productId", updateCartQuantity);

router.delete("/:productId", removeFromCart);

router.delete("/clear", clearCart);
router.post("/merge",mergeGuestCart);
module.exports = router;