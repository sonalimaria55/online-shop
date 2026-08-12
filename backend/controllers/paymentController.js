// const razorpay = require("../config/razorpay");


// const createPaymentOrder = async (req, res) => {

//     try {

//         const options = {
//             amount: 50000, // ₹500
//             currency: "INR",
//             receipt: "serina_order_001"
//         };


//         const order = await razorpay.orders.create(options);


//         res.status(200).json({
//             success: true,
//             order
//         });


//     } catch (error) {

//         res.status(500).json({
//             success:false,
//             message:error.message
//         });

//     }

// };


// module.exports = {
//     createPaymentOrder
// };
//-------------------------------------------------------------------------

// const Order = require("../models/Order");
// const razorpay = require("../config/razorpay");

// const createPaymentOrder = async (req, res) => {
//     try {

//         const { orderId } = req.body;

//         const order = await Order.findById(orderId);

//         if (!order) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Order not found",
//             });
//         }

//         const options = {
//             amount: order.totalAmount * 100,
//             currency: "INR",
//             receipt: order.orderNumber,
//         };

//         const razorpayOrder = await razorpay.orders.create(options);

//         order.razorpayOrderId = razorpayOrder.id;
//         await order.save();

//         res.status(200).json({
//             success: true,
//             razorpayOrder,
//         });

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// };

// module.exports = {
//     createPaymentOrder,
// };
//-------------------------------------------------------
const paymentService = require("../services/paymentService");

// ======================================================
// CREATE RAZORPAY ORDER
// ======================================================

const createPaymentOrder = async (req, res) => {
    try {
        const customerId = req.user._id;

        const { orderId } = req.body;

        const result =
            await paymentService.createPaymentOrder(
                customerId,
                orderId
            );

        return res.status(200).json({
            success: true,

            order: result.order,

            razorpayOrder: result.razorpayOrder,

            razorpayKeyId: result.razorpayKeyId,
        });

    } catch (error) {

        console.error(
            "CREATE PAYMENT ORDER ERROR:",
            error
        );

        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// ======================================================
// VERIFY PAYMENT
// ======================================================

const verifyPayment = async (req, res) => {
    try {
        const customerId = req.user._id;

        const payment =
            await paymentService.verifyPayment(
                customerId,
                req.body
            );

        return res.status(200).json({
            success: true,
            message: "Payment verified successfully",
            order: payment,
        });

    } catch (error) {

        console.error(
            "VERIFY PAYMENT ERROR:",
            error
        );

        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// ======================================================
// EXPORT
// ======================================================

module.exports = {
    createPaymentOrder,
    verifyPayment,
};