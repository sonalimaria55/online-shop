const express = require("express");

const router = express.Router();

const protect =
    require("../middleware/authMiddleware");

const {
    createPaymentOrder,
    verifyPayment,
} = require("../controllers/paymentController");


// ======================================================
// CREATE RAZORPAY ORDER
// ======================================================

router.post(
    "/create",
    protect,
    createPaymentOrder
);


// ======================================================
// VERIFY PAYMENT
// ======================================================

router.post(
    "/verify",
    protect,
    verifyPayment
);


module.exports = router;