const crypto = require("crypto");

const Order = require("../models/Order");
const razorpay = require("../config/razorpay");

// ======================================================
// CREATE RAZORPAY ORDER
// ======================================================

const createPaymentOrder = async (
    customerId,
    orderId
) => {

    // --------------------------------------------------
    // Validate customer
    // --------------------------------------------------

    if (!customerId) {
        throw new Error(
            "Customer ID is required"
        );
    }

    // --------------------------------------------------
    // Validate order
    // --------------------------------------------------

    if (!orderId) {
        throw new Error(
            "Order ID is required"
        );
    }

    // --------------------------------------------------
    // Find order
    // --------------------------------------------------

    const order =
        await Order.findOne({
            _id: orderId,
            customer: customerId,
        });

    if (!order) {
        throw new Error(
            "Order not found"
        );
    }

    // --------------------------------------------------
    // Already paid
    // --------------------------------------------------

    if (
        order.paymentStatus === "paid"
    ) {
        throw new Error(
            "Order is already paid"
        );
    }

    // --------------------------------------------------
    // Validate amount
    // --------------------------------------------------

    const totalAmount =
        Number(order.totalAmount);

    if (
        !Number.isFinite(totalAmount) ||
        totalAmount <= 0
    ) {
        throw new Error(
            "Invalid order amount"
        );
    }

    // --------------------------------------------------
    // Convert INR to paise
    // --------------------------------------------------

    const amountInPaise =
        Math.round(
            totalAmount * 100
        );

    // --------------------------------------------------
    // Create Razorpay order
    // --------------------------------------------------

    const options = {
        amount: amountInPaise,
        currency: "INR",
        receipt: order.orderNumber,
    };

    console.log(
        "CREATING RAZORPAY ORDER:",
        options
    );

    const razorpayOrder =
        await razorpay.orders.create(
            options
        );

    console.log(
        "RAZORPAY ORDER CREATED:",
        razorpayOrder
    );

    // --------------------------------------------------
    // Save Razorpay order ID
    // --------------------------------------------------

    order.razorpayOrderId =
        razorpayOrder.id;

    await order.save();

    // --------------------------------------------------
    // Public key
    // --------------------------------------------------

    const razorpayKeyId =
        process.env.RAZORPAY_KEY_ID;

    if (!razorpayKeyId) {
        throw new Error(
            "RAZORPAY_KEY_ID is not configured"
        );
    }

    // --------------------------------------------------
    // Return
    // --------------------------------------------------

    return {
        order,

        razorpayOrder: {
            id:
                razorpayOrder.id,

            amount:
                razorpayOrder.amount,

            currency:
                razorpayOrder.currency,
        },

        razorpayKeyId,
    };
};

// ======================================================
// VERIFY PAYMENT
// ======================================================

const verifyPayment = async (
    customerId,
    paymentData
) => {

    const {
        orderId,
        razorpayOrderId,
        razorpayPaymentId,
        razorpaySignature,
    } = paymentData;

    // --------------------------------------------------
    // Validate
    // --------------------------------------------------

    if (!customerId) {
        throw new Error(
            "Customer ID is required"
        );
    }

    if (!orderId) {
        throw new Error(
            "Order ID is required"
        );
    }

    if (!razorpayOrderId) {
        throw new Error(
            "Razorpay order ID is required"
        );
    }

    if (!razorpayPaymentId) {
        throw new Error(
            "Razorpay payment ID is required"
        );
    }

    if (!razorpaySignature) {
        throw new Error(
            "Razorpay signature is required"
        );
    }

    // --------------------------------------------------
    // Find order
    // --------------------------------------------------

    const order =
        await Order.findOne({
            _id: orderId,
            customer: customerId,
        });

    if (!order) {
        throw new Error(
            "Order not found"
        );
    }

    // --------------------------------------------------
    // Check Razorpay order
    // --------------------------------------------------

    if (
        order.razorpayOrderId !==
        razorpayOrderId
    ) {
        throw new Error(
            "Razorpay order does not match"
        );
    }

    // --------------------------------------------------
    // Secret
    // --------------------------------------------------

    const secret =
        process.env.RAZORPAY_SECRET;

    if (!secret) {
        throw new Error(
            "RAZORPAY_SECRET is not configured"
        );
    }

    // --------------------------------------------------
    // Generate signature
    // --------------------------------------------------

    const generatedSignature =
        crypto
            .createHmac(
                "sha256",
                secret
            )
            .update(
                `${razorpayOrderId}|${razorpayPaymentId}`
            )
            .digest("hex");

    // --------------------------------------------------
    // Compare
    // --------------------------------------------------

    const generatedBuffer =
        Buffer.from(
            generatedSignature,
            "utf8"
        );

    const receivedBuffer =
        Buffer.from(
            razorpaySignature,
            "utf8"
        );

    const isValid =
        generatedBuffer.length ===
            receivedBuffer.length &&
        crypto.timingSafeEqual(
            generatedBuffer,
            receivedBuffer
        );

    // --------------------------------------------------
    // Invalid
    // --------------------------------------------------

    if (!isValid) {

        order.paymentStatus =
            "failed";

        await order.save();

        throw new Error(
            "Payment verification failed"
        );
    }

    // --------------------------------------------------
    // Success
    // --------------------------------------------------

    order.paymentStatus =
        "paid";

    order.razorpayPaymentId =
        razorpayPaymentId;

    order.razorpaySignature =
        razorpaySignature;

    order.orderStatus =
        "confirmed";

    await order.save();

    return order;
};

// ======================================================
// EXPORT
// ======================================================

module.exports = {
    createPaymentOrder,
    verifyPayment,
};