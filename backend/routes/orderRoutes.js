
const express = require("express");

const router = express.Router();

const {
    createOrder,
    getMyOrders,
    getOrderById,
} = require("../controllers/orderController");

const protect =
    require("../middleware/authMiddleware");


// CREATE ORDER
router.post(
    "/",
    protect,
    createOrder
);


// GET CUSTOMER ORDERS
router.get(
    "/my-orders",
    protect,
    getMyOrders
);


// GET ONE ORDER
router.get(
    "/:id",
    protect,
    getOrderById
);


module.exports = router;