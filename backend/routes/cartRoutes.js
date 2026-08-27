// const express = require("express");

// const router = express.Router();

// const guestMiddleware = require("../middleware/guestMiddleware");
// const optionalProtect = require("../middleware/optionalProtect");


// console.log("guestMiddleware =", guestMiddleware);
// console.log("optionalProtect =", optionalProtect);
// const {
//     addToCart,
//     getCart,
//     updateCartQuantity,
//     removeFromCart,
//     clearCart,
//     mergeGuestCart,
// } = require("../controllers/cartController");

// // Every cart request gets guest/customer identity
// router.use(optionalProtect);
// router.use(guestMiddleware);

// router.post("/add", addToCart);

// router.get("/", getCart);

// router.put("/:productId", updateCartQuantity);

// router.delete("/:productId", removeFromCart);

// router.delete("/clear", clearCart);
// router.post("/merge",mergeGuestCart);
// module.exports = router;
//------------------------------------------------------------------------------------------------
// const express = require("express");

// const router = express.Router();

// const guestMiddleware = require("../middleware/guestMiddleware");
// const optionalProtect = require("../middleware/optionalProtect");

// const {
//     addToCart,
//     getCart,
//     updateCartQuantity,
//     removeFromCart,
//     clearCart,
//     mergeGuestCart,
// } = require("../controllers/cartController");

// // ======================================================
// // CART IDENTITY
// // ======================================================

// // Every cart request gets either:
// // 1. Logged-in customer identity
// // OR
// // 2. Guest identity

// router.use(optionalProtect);
// router.use(guestMiddleware);


// router.post(
//     "/add",
//     addToCart
// );




// router.get(
//     "/",
//     getCart
// );




// router.delete(
//     "/clear",
//     clearCart
// );



// // router.put("/:productId", updateCartQuantity);




// // router.delete("/:productId",removeFromCart);
// router.put("/item/:itemId", updateCartQuantity);

// router.delete("/item/:itemId", removeFromCart);


// // ======================================================
// // MERGE GUEST CART
// // ======================================================

// router.post(
//     "/merge",
//     mergeGuestCart
// );


// module.exports = router;
//-----------------------------------------------------------------------------------------
// const express = require("express");

// const router = express.Router();

// const guestMiddleware = require("../middleware/guestMiddleware");
// const optionalProtect = require("../middleware/optionalProtect");

// const {
//     addToCart,
//     getCart,
//     updateCartQuantity,
//     removeFromCart,
//     clearCart,
//     mergeGuestCart,
// } = require("../controllers/cartController");

// // ======================================================
// // CART IDENTITY
// // ======================================================

// router.use(optionalProtect);
// router.use(guestMiddleware);

// // ======================================================
// // ADD TO CART
// // ======================================================

// router.post("/add", addToCart);

// // ======================================================
// // GET CART
// // ======================================================

// router.get("/", getCart);

// // ======================================================
// // CLEAR CART
// // ======================================================

// router.delete("/clear", clearCart);

// // ======================================================
// // UPDATE CART ITEM
// // ======================================================

// router.put(
//     "/item/:itemId",
//     updateCartQuantity
// );

// // ======================================================
// // REMOVE CART ITEM
// // ======================================================

// router.delete(
//     "/item/:itemId",
//     removeFromCart
// );

// // ======================================================
// // MERGE GUEST CART
// // ======================================================

// router.post(
//     "/merge",
//     mergeGuestCart
// );

// module.exports = router;

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


// ======================================================
// NORMAL CART REQUESTS
// ======================================================

router.use(optionalProtect);
router.use(guestMiddleware);


// ======================================================
// ADD
// ======================================================

router.post(
    "/add",
    addToCart
);


// ======================================================
// GET
// ======================================================

router.get(
    "/",
    getCart
);


// ======================================================
// CLEAR
// ======================================================

router.delete(
    "/clear",
    clearCart
);


// ======================================================
// UPDATE
// ======================================================

router.put(
    "/item/:itemId",
    updateCartQuantity
);


// ======================================================
// REMOVE
// ======================================================

router.delete(
    "/item/:itemId",
    removeFromCart
);


// ======================================================
// MERGE
// ======================================================

// IMPORTANT:
// This route is already behind optionalProtect + guestMiddleware.
// Therefore req.guestId becomes null after login.
//
// We will fix this by reading the cookie directly
// inside the merge controller.

router.post(
    "/merge",
    mergeGuestCart
);


module.exports = router;