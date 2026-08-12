// const Cart = require("../models/Cart");
// const Order = require("../models/Order");


// const createOrder = async(customerId)=>{

//     const cart = await Cart.findOne({
//         customer: customerId
//     }).populate("items.product");

// console.log(JSON.stringify(cart, null, 2));


//     if(!cart || cart.items.length===0){
//         throw new Error("Cart is empty");
//     }


//     const order = await Order.create({

//         orderNumber:
//         "SERINA-" + Date.now(),


//         customer: customerId,


//         items: cart.items.map(item=>({

//             product:item.product._id,

//             productName:item.product.productName,

//             quantity:item.quantity,

//             price:item.product.sellingPrice,

//             image:item.product.images[0].url

//         })),


//         totalAmount:cart.totalAmount

//     });


//     return order;

// };


// module.exports={
//     createOrder
// };
//---------------------------------------------------

// const Cart = require("../models/Cart");
// const Order = require("../models/Order");

// // ======================================================
// // CREATE ORDER
// // ======================================================

// const createOrder = async (
//     customerId,
//     shippingAddress
// ) => {

//     // ==================================================
//     // FIND CART
//     // ==================================================

//     const cart = await Cart.findOne({
//         customer: customerId,
//     }).populate({
//         path: "items.product",
//         select:
//             "productName sellingPrice images productVariants",
//     });


//     if (
//         !cart ||
//         !cart.items ||
//         cart.items.length === 0
//     ) {
//         throw new Error("Cart is empty");
//     }


//     // ==================================================
//     // ORDER ITEMS
//     // ==================================================

//     const orderItems = [];

//     let subtotal = 0;


//     for (const item of cart.items) {

//         // ----------------------------------------------
//         // Broken cart item
//         // ----------------------------------------------

//         if (!item.product) {
//             continue;
//         }


//         const product = item.product;


//         // ----------------------------------------------
//         // Default product price
//         // ----------------------------------------------

//         let price =
//             Number(product.sellingPrice) || 0;


//         let variantName = "";
//         let sku = "";


//         // ==================================================
//         // SELECTED VARIANT
//         // ==================================================

//         if (item.variant) {

//             const selectedVariant =
//                 product.productVariants?.find(
//                     (variant) =>
//                         variant._id.toString() ===
//                         item.variant.toString()
//                 );


//             if (selectedVariant) {

//                 // ------------------------------------------
//                 // VARIANT PRICE
//                 // ------------------------------------------

//                 price =
//                     Number(
//                         selectedVariant.sellingPrice
//                     ) || 0;


//                 // ------------------------------------------
//                 // SKU
//                 // ------------------------------------------

//                 sku =
//                     selectedVariant.sku || "";


//                 // ------------------------------------------
//                 // VARIANT ATTRIBUTES
//                 // ------------------------------------------

//                 variantName =
//                     selectedVariant.attributes
//                         ?.map(
//                             (attribute) =>
//                                 attribute.value
//                         )
//                         .filter(Boolean)
//                         .join(" / ") || "";

//             }

//         }


//         // ==================================================
//         // VALIDATE PRICE
//         // ==================================================

//         if (price <= 0) {

//             throw new Error(
//                 `Invalid price for ${product.productName}`
//             );

//         }


//         // ==================================================
//         // QUANTITY
//         // ==================================================

//         const quantity =
//             Number(item.quantity);


//         if (
//             !Number.isInteger(quantity) ||
//             quantity < 1
//         ) {

//             throw new Error(
//                 "Invalid product quantity"
//             );

//         }


//         // ==================================================
//         // ITEM TOTAL
//         // ==================================================

//         const itemTotal =
//             price * quantity;


//         subtotal += itemTotal;


//         // ==================================================
//         // SNAPSHOT ORDER ITEM
//         // ==================================================

//         orderItems.push({

//             product:
//                 product._id,

//             variant:
//                 item.variant || null,

//             productName:
//                 product.productName,

//             variantName,

//             sku,

//             quantity,

//             price,

//             image:
//                 product.images?.[0]?.url || "",
//         });

//     }


//     // ==================================================
//     // VALIDATE ITEMS
//     // ==================================================

//     if (orderItems.length === 0) {

//         throw new Error(
//             "No valid products found in cart"
//         );

//     }


//     // ==================================================
//     // SHIPPING
//     // ==================================================

//     // For now:
//     // Free shipping.
//     //
//     // Later this will come from
//     // Shiprocket/serviceability calculation.

//     const shippingAmount = 0;


//     // ==================================================
//     // TOTAL
//     // ==================================================

//     const totalAmount =
//         subtotal +
//         shippingAmount;


//     // ==================================================
//     // CREATE ORDER
//     // ==================================================

//     const order = await Order.create({

//         orderNumber:
//             "SERINA-" + Date.now(),

//         customer:
//             customerId,

//         items:
//             orderItems,

//         shippingAddress,

//         subtotal,

//         shippingAmount,

//         totalAmount,

//         paymentMethod:
//             "razorpay",

//         paymentStatus:
//             "pending",

//         orderStatus:
//             "placed",
//     });


//     return order;
// };


// module.exports = {
//     createOrder,
// };
//------------------------------------
const Cart = require("../models/Cart");
const Order = require("../models/Order");

// ======================================================
// CREATE ORDER
// ======================================================

const createOrder = async (
    customerId,
    shippingAddress
) => {

    // ==================================================
    // FIND CUSTOMER CART
    // ==================================================

    const cart = await Cart.findOne({
        customer: customerId,
    }).populate({
        path: "items.product",
        select:
            "productName sellingPrice images productVariants",
    });

    console.log(
        "========== ORDER CART =========="
    );

    console.log(
        JSON.stringify(cart, null, 2)
    );

    // ==================================================
    // VALIDATE CART
    // ==================================================

    if (
        !cart ||
        !cart.items ||
        cart.items.length === 0
    ) {
        throw new Error("Cart is empty");
    }

    // ==================================================
    // VALID ITEMS
    // ==================================================

    const validItems = cart.items.filter(
        (item) => item.product
    );

    if (validItems.length === 0) {
        throw new Error(
            "Cart contains no valid products"
        );
    }

    // ==================================================
    // CALCULATE ITEMS + TOTAL
    // ==================================================

    let totalAmount = 0;

    const orderItems = validItems.map((item) => {

        const product = item.product;

        // ------------------------------------------
        // FIND SELECTED VARIANT
        // ------------------------------------------

        let selectedVariant = null;

        if (
            item.variant &&
            product.productVariants
        ) {

            selectedVariant =
                product.productVariants.find(
                    (variant) =>
                        variant._id.toString() ===
                        item.variant.toString()
                );
        }

        // ------------------------------------------
        // PRICE
        // ------------------------------------------

        const price =
            selectedVariant?.sellingPrice ??
            product.sellingPrice ??
            0;

        const quantity =
            Number(item.quantity) || 1;

        // ------------------------------------------
        // TOTAL
        // ------------------------------------------

        totalAmount += price * quantity;

        // ------------------------------------------
        // IMAGE
        // ------------------------------------------

        const image =
            product.images?.[0]?.url || "";

        return {
            product: product._id,

            productName:
                product.productName,

            quantity,

            price,

            image,
        };
    });

    // ==================================================
    // CREATE ORDER
    // ==================================================

    const order = await Order.create({

        orderNumber:
            "SERINA-" + Date.now(),

        customer:
            customerId,

        items:
            orderItems,

        shippingAddress: {

            name:
                shippingAddress?.name || "",

            phone:
                shippingAddress?.phone || "",

            addressLine:
                shippingAddress?.addressLine || "",

            city:
                shippingAddress?.city || "",

            state:
                shippingAddress?.state || "",

            pincode:
                shippingAddress?.pincode || "",
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

    return order;
};


// ======================================================
// GET MY ORDERS
// ======================================================

const getMyOrders = async (
    customerId
) => {

    const orders = await Order.find({
        customer: customerId,
    })
        .populate(
            "items.product",
            "productName images"
        )
        .sort({
            createdAt: -1,
        });

    return orders;
};


// ======================================================
// EXPORT
// ======================================================

module.exports = {
    createOrder,
    getMyOrders,
};