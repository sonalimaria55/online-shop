// const orderService =
//     require("../services/orderService");


// // ======================================================
// // CREATE ORDER
// // ======================================================

// const createOrder = async (
//     req,
//     res
// ) => {

//     try {

//         const customerId =
//             req.user._id;

//         const {
//             shippingAddress,
//         } = req.body;

//         const order =
//             await orderService.createOrder(
//                 customerId,
//                 shippingAddress
//             );

//         return res.status(201).json({
//             success: true,
//             order,
//         });

//     } catch (error) {

//         console.error(
//             "CREATE ORDER ERROR:",
//             error
//         );

//         return res.status(500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// };


// // ======================================================
// // GET MY ORDERS
// // ======================================================

// // const getMyOrders = async (
// //     req,
// //     res
// // ) => {

// //     try {

// //         const orders =
// //             await orderService.getMyOrders(
// //                 req.user._id
// //             );

// //         // return res.status(200).json({
// //         //     success: true,
// //         //     orders,
// //         // });
// //         return res.status(200).json({
// //             success: true,
// //             order: result.order,
// //             razorpayOrder: result.razorpayOrder,
// //             razorpayKeyId: process.env.RAZORPAY_KEY_ID,
// //         });

// //     } catch (error) {

// //         console.error(
// //             "GET MY ORDERS ERROR:",
// //             error
// //         );

// //         return res.status(500).json({
// //             success: false,
// //             message: error.message,
// //         });
// //     }
// // };
// const Order = require("../models/Order");
// const Cart = require("../models/Cart");

// // ======================================================
// // CREATE ORDER
// // ======================================================

// const createOrder = async (req, res) => {
//     try {
//         const customerId = req.user._id;

//         const {
//             shippingAddress,
//         } = req.body;

//         // --------------------------------------------------
//         // FIND CUSTOMER CART
//         // --------------------------------------------------

//         const cart = await Cart.findOne({
//             customer: customerId,
//         }).populate({
//             path: "items.product",
//             select: `
//                 productName
//                 sellingPrice
//                 productVariants
//                 images
//             `,
//         });

//         if (!cart) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Cart not found",
//             });
//         }

//         if (!cart.items || cart.items.length === 0) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Cart is empty",
//             });
//         }

//         console.log(
//             "========== ORDER CART =========="
//         );

//         console.log(
//             JSON.stringify(
//                 cart,
//                 null,
//                 2
//             )
//         );

//         // --------------------------------------------------
//         // BUILD ORDER ITEMS
//         // --------------------------------------------------

//         const orderItems = cart.items.map(
//             (item) => {

//                 const product =
//                     item.product;

//                 if (!product) {
//                     throw new Error(
//                         "Product not found in cart"
//                     );
//                 }

//                 // ------------------------------------------
//                 // FIND SELECTED VARIANT
//                 // ------------------------------------------

//                 let price =
//                     product.sellingPrice;

//                 if (
//                     item.variant &&
//                     product.productVariants &&
//                     product.productVariants.length
//                 ) {
//                     const selectedVariant =
//                         product.productVariants.find(
//                             (variant) =>
//                                 variant._id.toString() ===
//                                 item.variant.toString()
//                         );

//                     if (selectedVariant) {
//                         price =
//                             selectedVariant.sellingPrice ||
//                             product.sellingPrice;
//                     }
//                 }

//                 return {
//                     product:
//                         product._id,

//                     productName:
//                         product.productName,

//                     quantity:
//                         item.quantity,

//                     price,

//                     image:
//                         product.images?.[0]?.url || "",
//                 };
//             }
//         );

//         // --------------------------------------------------
//         // CALCULATE TOTAL
//         // --------------------------------------------------

//         const totalAmount =
//             orderItems.reduce(
//                 (total, item) =>
//                     total +
//                     item.price *
//                     item.quantity,
//                 0
//             );

//         // --------------------------------------------------
//         // CREATE ORDER
//         // --------------------------------------------------

//         const order =
//             await Order.create({

//                 orderNumber:
//                     `SERINA-${Date.now()}`,

//                 customer:
//                     customerId,

//                 items:
//                     orderItems,

//                 shippingAddress: {
//                     name:
//                         shippingAddress?.name,

//                     phone:
//                         shippingAddress?.phone,

//                     addressLine:
//                         shippingAddress?.addressLine,

//                     city:
//                         shippingAddress?.city,

//                     state:
//                         shippingAddress?.state,

//                     pincode:
//                         shippingAddress?.pincode,
//                 },

//                 totalAmount,

//                 paymentStatus:
//                     "pending",

//                 orderStatus:
//                     "placed",
//             });

//         console.log(
//             "========== ORDER CREATED =========="
//         );

//         console.log(order);

//         return res.status(201).json({
//             success: true,
//             message:
//                 "Order created successfully",

//             order,
//         });

//     } catch (error) {

//         console.error(
//             "CREATE ORDER ERROR:",
//             error
//         );

//         return res.status(500).json({
//             success: false,
//             message:
//                 error.message,
//         });
//     }
// };


// // ======================================================
// // GET MY ORDERS
// // ======================================================

// const getMyOrders = async (req, res) => {

//     try {

//         const customerId =
//             req.user._id;

//         console.log(
//             "========== GET MY ORDERS =========="
//         );

//         console.log(
//             "CUSTOMER:",
//             customerId
//         );

//         const orders =
//             await Order.find({
//                 customer:
//                     customerId,
//             })
//             .sort({
//                 createdAt: -1,
//             })
//             .lean();

//         console.log(
//             "ORDERS FOUND:",
//             orders.length
//         );

//         return res.status(200).json({

//             success: true,

//             orders,

//         });

//     } catch (error) {

//         console.error(
//             "GET MY ORDERS ERROR:",
//             error
//         );

//         return res.status(500).json({

//             success: false,

//             message:
//                 error.message,

//         });
//     }
// };


// // ======================================================
// // GET SINGLE ORDER
// // ======================================================

// const getOrderById = async (req, res) => {

//     try {

//         const customerId =
//             req.user._id;

//         const {
//             id,
//         } = req.params;

//         const order =
//             await Order.findOne({

//                 _id: id,

//                 customer:
//                     customerId,

//             }).lean();

//         if (!order) {

//             return res.status(404).json({

//                 success: false,

//                 message:
//                     "Order not found",

//             });
//         }

//         return res.status(200).json({

//             success: true,

//             order,

//         });

//     } catch (error) {

//         console.error(
//             "GET ORDER ERROR:",
//             error
//         );

//         return res.status(500).json({

//             success: false,

//             message:
//                 error.message,

//         });
//     }
// };


// // ======================================================
// // EXPORT
// // ======================================================

// module.exports = {

//     createOrder,

//     getMyOrders,

//     getOrderById,

// };

const Order = require("../models/Order");
const Cart = require("../models/Cart");

// ======================================================
// CREATE ORDER
// ======================================================

const createOrder = async (req, res) => {
    try {
        const customerId = req.user._id;

        const {
            shippingAddress,
        } = req.body;

        // --------------------------------------------------
        // FIND CUSTOMER CART
        // --------------------------------------------------

        const cart = await Cart.findOne({
            customer: customerId,
        }).populate({
            path: "items.product",
            select: `
                productName
                sellingPrice
                productVariants
                images
            `,
        });

        if (!cart) {
            return res.status(400).json({
                success: false,
                message: "Cart not found",
            });
        }

        if (!cart.items || cart.items.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Cart is empty",
            });
        }

        console.log(
            "========== ORDER CART =========="
        );

        console.log(
            JSON.stringify(
                cart,
                null,
                2
            )
        );

        // --------------------------------------------------
        // BUILD ORDER ITEMS
        // --------------------------------------------------

        const orderItems = cart.items.map(
            (item) => {

                const product =
                    item.product;

                if (!product) {
                    throw new Error(
                        "Product not found in cart"
                    );
                }

                // ------------------------------------------
                // FIND SELECTED VARIANT
                // ------------------------------------------

                let price =
                    product.sellingPrice;

                if (
                    item.variant &&
                    product.productVariants &&
                    product.productVariants.length
                ) {
                    const selectedVariant =
                        product.productVariants.find(
                            (variant) =>
                                variant._id.toString() ===
                                item.variant.toString()
                        );

                    if (selectedVariant) {
                        price =
                            selectedVariant.sellingPrice ||
                            product.sellingPrice;
                    }
                }

                return {
                    product:
                        product._id,

                    productName:
                        product.productName,

                    quantity:
                        item.quantity,

                    price,

                    image:
                        product.images?.[0]?.url || "",
                };
            }
        );

        // --------------------------------------------------
        // CALCULATE TOTAL
        // --------------------------------------------------

        const totalAmount =
            orderItems.reduce(
                (total, item) =>
                    total +
                    item.price *
                    item.quantity,
                0
            );

        // --------------------------------------------------
        // CREATE ORDER
        // --------------------------------------------------

        const order =
            await Order.create({

                orderNumber:
                    `SERINA-${Date.now()}`,

                customer:
                    customerId,

                items:
                    orderItems,

                shippingAddress: {
                    name:
                        shippingAddress?.name,

                    phone:
                        shippingAddress?.phone,

                    addressLine:
                        shippingAddress?.addressLine,

                    city:
                        shippingAddress?.city,

                    state:
                        shippingAddress?.state,

                    pincode:
                        shippingAddress?.pincode,
                },

                totalAmount,

                paymentStatus:
                    "pending",

                orderStatus:
                    "placed",
            });

        console.log(
            "========== ORDER CREATED =========="
        );

        console.log(order);

        return res.status(201).json({
            success: true,
            message:
                "Order created successfully",

            order,
        });

    } catch (error) {

        console.error(
            "CREATE ORDER ERROR:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                error.message,
        });
    }
};


// ======================================================
// GET MY ORDERS
// ======================================================

const getMyOrders = async (req, res) => {

    try {

        const customerId =
            req.user._id;

        console.log(
            "========== GET MY ORDERS =========="
        );

        console.log(
            "CUSTOMER:",
            customerId
        );

        const orders =
            await Order.find({
                customer:
                    customerId,
            })
            .sort({
                createdAt: -1,
            })
            .lean();

        console.log(
            "ORDERS FOUND:",
            orders.length
        );

        return res.status(200).json({

            success: true,

            orders,

        });

    } catch (error) {

        console.error(
            "GET MY ORDERS ERROR:",
            error
        );

        return res.status(500).json({

            success: false,

            message:
                error.message,

        });
    }
};


// ======================================================
// GET SINGLE ORDER
// ======================================================

const getOrderById = async (req, res) => {

    try {

        const customerId =
            req.user._id;

        const {
            id,
        } = req.params;

        const order =
            await Order.findOne({

                _id: id,

                customer:
                    customerId,

            }).lean();

        if (!order) {

            return res.status(404).json({

                success: false,

                message:
                    "Order not found",

            });
        }

        return res.status(200).json({

            success: true,

            order,

        });

    } catch (error) {

        console.error(
            "GET ORDER ERROR:",
            error
        );

        return res.status(500).json({

            success: false,

            message:
                error.message,

        });
    }
};


// ======================================================
// EXPORT
// ======================================================

module.exports = {

    createOrder,

    getMyOrders,

    getOrderById,

};