// const Cart = require("../models/Cart");


// // Find cart by customer or guest
// // const findCart = async (owner) => {

// //     let cart;


// //     if (owner.customer) {

// //         cart = await Cart.findOne({
// //             customer: owner.customer
// //         });

// //     }
// //     else if (owner.guestId) {

// //         cart = await Cart.findOne({
// //             guestId: owner.guestId
// //         });

// //     }


// //     return cart.populate(
// //         "items.product",
// //         "productName sellingPrice image sku"
// //     );

// // };

// const findCart = async (owner) => {

//     let cart;


//     if (owner.customer) {

//         cart = await Cart.findOne({
//             customer: owner.customer
//         });

//     } else if (owner.guestId) {

//         cart = await Cart.findOne({
//             guestId: owner.guestId
//         });

//     }


//     if (!cart) {
//         return null;
//     }


//     await cart.populate(
//         "items.product",
//         "productName sellingPrice image sku"
//     );


//     return cart;

// };


// // ===============================
// // Add To Cart
// // ===============================
// //const addToCart = async (owner, productId, quantity = 1) => {
// // const addToCart = async (
// //     owner,
// //     productId,
// //     variantId,
// //     quantity = 1
// // ) => {
// //     let cart = await findCart(owner);

// //     if (!cart) {

// //         cart = await Cart.create({
// //             customer: owner.customer || null,
// //             guestId: owner.guestId || null,
// //             items: [
// //                 {
// //                     product: productId,
// //                     variant: variantId,
// //                     quantity: Number(quantity)
// //                 }
// //             ]
// //         });

// //         await cart.populate(
// //             "items.product",
// //             "productName sellingPrice image sku"
// //         );

// //         return cart;
// //     }

// //     console.log("=========== CART ITEMS ===========");

// //     cart.items.forEach((item, index) => {
// //         console.log("ITEM", index);
// //         console.log("item.product =", item.product);
// //         console.log(
// //             "product id =",
// //             item.product._id
// //                 ? item.product._id.toString()
// //                 : item.product.toString()
// //         );
// //         console.log("quantity =", item.quantity);
// //     });

// //     console.log("Incoming Product:", productId);

// //     const itemIndex = cart.items.findIndex((item) => {

// //         const existingId = item.product._id
// //             ? item.product._id.toString()
// //             : item.product.toString();

// //         console.log("COMPARE", existingId, "==", productId);

// //         return existingId === productId;
// //     });

// //     console.log("FOUND INDEX:", itemIndex);

// //     if (itemIndex > -1) {

// //         console.log("Increasing quantity...");

// //         cart.items[itemIndex].quantity += Number(quantity);

// //     } else {

// //         console.log("Adding new product...");

// //         cart.items.push({
// //             product: productId,
// //             variant: variantId,
// //             quantity: Number(quantity),
// //         });

// //     }

// //     await cart.save();

// //     await cart.populate(
// //         "items.product",
// //         "productName sellingPrice image sku"
// //     );

// //     console.log("FINAL CART:", cart.items);

// //     return cart;
// // };

// const addToCart = async (
//     owner,
//     productId,
//     variantId,
//     quantity = 1
// ) => {

//     let cart = await findCart(owner);

//     if (!cart) {

//         cart = await Cart.create({
//             customer: owner.customer || null,
//             guestId: owner.guestId || null,
//             items: [
//                 {
//                     product: productId,
//                     variant: variantId,
//                     quantity: Number(quantity)
//                 }
//             ]
//         });

//         await cart.populate(
//             "items.product",
//             "productName sellingPrice image sku"
//         );

//         return cart;
//     }

//     // ...
// }




// // ===============================
// // Get Cart
// // ===============================
// // const getCart = async (owner) => {

// //     const cart = await findCart(owner);


// //     if (!cart) {

// //         return {
// //             items: []
// //         };

// //     }


// //     return cart.populate(
// //         "items.product",
// //         "productName sellingPrice image sku"
// //     );

// // };

// const cartData = {
//     items: [
//         {
//             product: productId,
//             variant: variantId,
//             quantity: Number(quantity),
//         },
//     ],
// };

// if (owner.customer) {
//     cartData.customer = owner.customer;
// }

// if (owner.guestId) {
//     cartData.guestId = owner.guestId;
// }

// const cart = await Cart.create(cartData);




// // ===============================
// // Update Quantity
// // ===============================
// // const updateCartQuantity = async (
// //     owner,
// //     productId,
// //     quantity
// // ) => {


// //     const cart = await findCart(owner);


// //     if (!cart) {

// //         throw new Error("Cart not found");

// //     }



// //     const item = cart.items.find(
// //         item =>
// //             item.product.toString() === productId
// //     );


// //     if (!item) {

// //         throw new Error("Product not in cart");

// //     }


// //     item.quantity = quantity;


// //     await cart.save();


// //     return cart;

// // };
// const updateCartQuantity = async (
//     owner,
//     productId,
//     quantity
// ) => {


//     const cart = await findCart(owner);


//     if (!cart) {

//         throw new Error("Cart not found");

//     }


//     const item = cart.items.find((item) => {
//         const id = item.product._id
//             ? item.product._id.toString()
//             : item.product.toString();

//         return id === productId;
//     });


//     if (!item) {

//         throw new Error("Product not in cart");

//     }


//     item.quantity = quantity;


//     await cart.save();


//     return cart;

// };



// // ===============================
// // Remove Item
// // ===============================
// const removeFromCart = async (
//     owner,
//     productId
// ) => {


//     const cart = await findCart(owner);


//     if (!cart) {

//         throw new Error("Cart not found");

//     }


//     cart.items = cart.items.filter((item) => {
//         const id = item.product._id
//             ? item.product._id.toString()
//             : item.product.toString();

//         return id !== productId;
//     });


//     await cart.save();


//     return cart.populate(
//         "items.product",
//         "productName sellingPrice image sku"
//     );

// };



// // ===============================
// // Clear Cart
// // ===============================
// const clearCart = async (owner) => {


//     const cart = await findCart(owner);


//     if (cart) {

//         cart.items = [];

//         await cart.save();

//     }


//     return cart;

// }
// // ===============================
// // Merge Guest Cart
// // ===============================
// const mergeGuestCart = async (
//     guestId,
//     customerId
// ) => {


//     const guestCart = await Cart.findOne({
//         guestId
//     });


//     if (!guestCart) {
//         return null;
//     }



//     let customerCart = await Cart.findOne({
//         customer: customerId
//     });



//     if (!customerCart) {

//         // customerCart = await Cart.create({

//         //     customer: customerId,
//         //     guestId: null,
//         //     items: guestCart.items

//         // });

// const cartData = {
//     items: [
//         {
//             product: productId,
//             variant: variantId,
//             quantity: Number(quantity)
//         }
//     ]
// };

// if (owner.customer) {
//     cartData.customer = owner.customer;
// }

// if (owner.guestId) {
//     cartData.guestId = owner.guestId;
// }

// cart = await Cart.create(cartData);
//     }
//     else {

//         guestCart.items.forEach((guestItem) => {

//             const existing = customerCart.items.find((item) => {

//                 const customerProductId = item.product._id
//                     ? item.product._id.toString()
//                     : item.product.toString();

//                 const guestProductId = guestItem.product._id
//                     ? guestItem.product._id.toString()
//                     : guestItem.product.toString();

//                 return customerProductId === guestProductId;
//             });

//             if (existing) {

//                 existing.quantity += guestItem.quantity;

//             } else {
//                 customerCart.items.push({
//                     product: guestItem.product,
//                     variant: guestItem.variant,
//                     quantity: guestItem.quantity,
//                 });

//             }

//         });

//         await customerCart.save();
//     }


//     // Delete guest cart
//     await Cart.deleteOne({
//         guestId,
//     });


//     // Populate products
//     await customerCart.populate(
//         "items.product",
//         "productName sellingPrice image sku"
//     );


//     return customerCart;

// };

// module.exports = {

//     addToCart,
//     getCart,
//     updateCartQuantity,
//     removeFromCart,
//     clearCart,
//     mergeGuestCart

// };

//---------------------------------

// const Cart = require("../models/Cart");

// // =====================================================
// // FIND CART
// // =====================================================
// const findCart = async (owner) => {
//     let cart = null;

//     // Logged-in customer
//     if (owner.customer) {
//         cart = await Cart.findOne({
//             customer: owner.customer,
//         });
//     }

//     // Guest customer
//     else if (owner.guestId) {
//         cart = await Cart.findOne({
//             guestId: owner.guestId,
//         });
//     }

//     if (!cart) {
//         return null;
//     }

//     await cart.populate(
//         "items.product",
//         "productName sellingPrice images sku"
//     );

//     return cart;
// };


// // =====================================================
// // ADD TO CART
// // =====================================================
// const addToCart = async (
//     owner,
//     productId,
//     variantId = null,
//     quantity = 1
// ) => {

//     quantity = Number(quantity);

//     if (!productId) {
//         throw new Error("Product is required");
//     }

//     if (!quantity || quantity < 1) {
//         throw new Error("Quantity must be at least 1");
//     }

//     if (!owner.customer && !owner.guestId) {
//         throw new Error("Cart owner is required");
//     }

//     // -------------------------------------------------
//     // Find existing cart
//     // -------------------------------------------------
//     let cart = await findCart(owner);


//     // =================================================
//     // CREATE NEW CART
//     // =================================================
//     if (!cart) {

//         const cartData = {
//             items: [
//                 {
//                     product: productId,
//                     variant: variantId || null,
//                     quantity,
//                 },
//             ],
//         };

//         // IMPORTANT:
//         // Only add customer OR guestId.
//         // Never store guestId: null.
//         if (owner.customer) {
//             cartData.customer = owner.customer;
//         }

//         if (owner.guestId) {
//             cartData.guestId = owner.guestId;
//         }

//         cart = await Cart.create(cartData);

//         await cart.populate(
//             "items.product",
//             "productName sellingPrice images sku"
//         );

//         return cart;
//     }


//     // =================================================
//     // EXISTING CART
//     // =================================================

//     /*
//         Product + Variant together identify a cart item.

//         Example:

//         Product A
//           - Red / M
//           - Blue / M

//         These should be two separate cart items.
//     */

//     const itemIndex = cart.items.findIndex((item) => {

//         const existingProductId = item.product?._id
//             ? item.product._id.toString()
//             : item.product.toString();

//         const existingVariantId = item.variant
//             ? item.variant.toString()
//             : null;

//         const incomingVariantId = variantId
//             ? variantId.toString()
//             : null;

//         return (
//             existingProductId === productId.toString() &&
//             existingVariantId === incomingVariantId
//         );
//     });


//     // -------------------------------------------------
//     // Existing product + same variant
//     // -------------------------------------------------
//     if (itemIndex !== -1) {

//         cart.items[itemIndex].quantity += quantity;

//     }

//     // -------------------------------------------------
//     // New product or different variant
//     // -------------------------------------------------
//     else {

//         cart.items.push({
//             product: productId,
//             variant: variantId || null,
//             quantity,
//         });

//     }


//     await cart.save();


//     await cart.populate(
//         "items.product",
//         "productName sellingPrice images sku"
//     );


//     return cart;
// };


// // =====================================================
// // GET CART
// // =====================================================
// const getCart = async (owner) => {

//     const cart = await findCart(owner);

//     if (!cart) {
//         return {
//             items: [],
//         };
//     }

//     return cart;
// };


// // =====================================================
// // UPDATE CART QUANTITY
// // =====================================================
// const updateCartQuantity = async (
//     owner,
//     productId,
//     quantity
// ) => {

//     quantity = Number(quantity);

//     if (!quantity || quantity < 1) {
//         throw new Error("Quantity must be at least 1");
//     }


//     const cart = await findCart(owner);

//     if (!cart) {
//         throw new Error("Cart not found");
//     }


//     const item = cart.items.find((item) => {

//         const id = item.product?._id
//             ? item.product._id.toString()
//             : item.product.toString();

//         return id === productId.toString();
//     });


//     if (!item) {
//         throw new Error("Product not found in cart");
//     }


//     item.quantity = quantity;


//     await cart.save();


//     await cart.populate(
//         "items.product",
//         "productName sellingPrice images sku"
//     );


//     return cart;
// };


// // =====================================================
// // REMOVE FROM CART
// // =====================================================
// const removeFromCart = async (
//     owner,
//     productId
// ) => {

//     const cart = await findCart(owner);

//     if (!cart) {
//         throw new Error("Cart not found");
//     }


//     cart.items = cart.items.filter((item) => {

//         const id = item.product?._id
//             ? item.product._id.toString()
//             : item.product.toString();

//         return id !== productId.toString();
//     });


//     await cart.save();


//     await cart.populate(
//         "items.product",
//         "productName sellingPrice images sku"
//     );


//     return cart;
// };


// // =====================================================
// // CLEAR CART
// // =====================================================
// const clearCart = async (owner) => {

//     const cart = await findCart(owner);

//     if (!cart) {
//         return {
//             items: [],
//         };
//     }


//     cart.items = [];


//     await cart.save();


//     return cart;
// };


// // =====================================================
// // MERGE GUEST CART INTO CUSTOMER CART
// // =====================================================
// const mergeGuestCart = async (
//     guestId,
//     customerId
// ) => {

//     if (!guestId) {
//         return null;
//     }

//     if (!customerId) {
//         throw new Error("Customer is required");
//     }


//     // -------------------------------------------------
//     // Find guest cart
//     // -------------------------------------------------
//     const guestCart = await Cart.findOne({
//         guestId,
//     });


//     if (!guestCart) {
//         return null;
//     }


//     // -------------------------------------------------
//     // Find customer's existing cart
//     // -------------------------------------------------
//     let customerCart = await Cart.findOne({
//         customer: customerId,
//     });


//     // =================================================
//     // CUSTOMER HAS NO CART
//     // =================================================
//     if (!customerCart) {

//         customerCart = await Cart.create({
//             customer: customerId,
//             items: guestCart.items.map((item) => ({
//                 product: item.product,
//                 variant: item.variant || null,
//                 quantity: item.quantity,
//             })),
//         });

//     }

//     // =================================================
//     // CUSTOMER ALREADY HAS CART
//     // =================================================
//     else {

//         guestCart.items.forEach((guestItem) => {

//             const guestProductId =
//                 guestItem.product?._id
//                     ? guestItem.product._id.toString()
//                     : guestItem.product.toString();

//             const guestVariantId =
//                 guestItem.variant
//                     ? guestItem.variant.toString()
//                     : null;


//             const existingItem = customerCart.items.find(
//                 (customerItem) => {

//                     const customerProductId =
//                         customerItem.product?._id
//                             ? customerItem.product._id.toString()
//                             : customerItem.product.toString();

//                     const customerVariantId =
//                         customerItem.variant
//                             ? customerItem.variant.toString()
//                             : null;


//                     return (
//                         customerProductId === guestProductId &&
//                         customerVariantId === guestVariantId
//                     );
//                 }
//             );


//             // Same product + same variant
//             if (existingItem) {

//                 existingItem.quantity += guestItem.quantity;

//             }

//             // New product/variant
//             else {

//                 customerCart.items.push({
//                     product: guestItem.product,
//                     variant: guestItem.variant || null,
//                     quantity: guestItem.quantity,
//                 });

//             }

//         });


//         await customerCart.save();
//     }


//     // -------------------------------------------------
//     // Delete guest cart
//     // -------------------------------------------------
//     await Cart.deleteOne({
//         _id: guestCart._id,
//     });


//     // -------------------------------------------------
//     // Populate customer cart
//     // -------------------------------------------------
//     await customerCart.populate(
//         "items.product",
//         "productName sellingPrice images sku"
//     );


//     return customerCart;
// };


// module.exports = {
//     addToCart,
//     getCart,
//     updateCartQuantity,
//     removeFromCart,
//     clearCart,
//     mergeGuestCart,
// };
//-------------------------------------------


// const Cart = require("../models/Cart");


// // ======================================================
// // HELPER: Convert ObjectId / populated object to string
// // ======================================================

// const getIdString = (value) => {

//     if (!value) {
//         return null;
//     }

//     if (value._id) {
//         return value._id.toString();
//     }

//     return value.toString();
// };


// // ======================================================
// // FIND CART
// // ======================================================

// const findCart = async (owner) => {

//     let cart = null;


//     // Logged-in customer
//     if (owner.customer) {

//         cart = await Cart.findOne({
//             customer: owner.customer,
//         });

//     }

//     // Guest customer
//     else if (owner.guestId) {

//         cart = await Cart.findOne({
//             guestId: owner.guestId,
//         });

//     }


//     if (!cart) {
//         return null;
//     }


//     await cart.populate(
//         "items.product",
//         "productName sellingPrice images image sku"
//     );


//     return cart;
// };


// // ======================================================
// // ADD TO CART
// // ======================================================

// const addToCart = async (
//     owner,
//     productId,
//     variantId = null,
//     quantity = 1
// ) => {

//     if (!productId) {
//         throw new Error("Product is required");
//     }


//     const qty = Number(quantity);


//     if (!Number.isFinite(qty) || qty < 1) {
//         throw new Error("Quantity must be at least 1");
//     }


//     // ------------------------------------------
//     // Find existing cart
//     // ------------------------------------------

//     let cart = await findCart(owner);


//     // ------------------------------------------
//     // No cart -> create new cart
//     // ------------------------------------------

//     if (!cart) {

//         const cartData = {

//             items: [
//                 {
//                     product: productId,
//                     variant: variantId || null,
//                     quantity: qty,
//                 },
//             ],

//         };


//         // VERY IMPORTANT:
//         // Only add customer when it exists
//         if (owner.customer) {

//             cartData.customer = owner.customer;

//         }


//         // Only add guestId when it exists
//         if (owner.guestId) {

//             cartData.guestId = owner.guestId;

//         }


//         cart = await Cart.create(cartData);


//         await cart.populate(
//             "items.product",
//             "productName sellingPrice images image sku"
//         );


//         return cart;
//     }


//     // ------------------------------------------
//     // Existing cart
//     // ------------------------------------------

//     const itemIndex = cart.items.findIndex((item) => {

//         const existingProductId = getIdString(
//             item.product
//         );


//         const existingVariantId = getIdString(
//             item.variant
//         );


//         const incomingProductId =
//             productId.toString();


//         const incomingVariantId =
//             variantId
//                 ? variantId.toString()
//                 : null;


//         return (
//             existingProductId === incomingProductId &&
//             existingVariantId === incomingVariantId
//         );

//     });


//     // ------------------------------------------
//     // Same product + same variant
//     // ------------------------------------------

//     if (itemIndex !== -1) {

//         cart.items[itemIndex].quantity += qty;

//     }


//     // ------------------------------------------
//     // Different variant/product
//     // ------------------------------------------

//     else {

//         cart.items.push({

//             product: productId,

//             variant: variantId || null,

//             quantity: qty,

//         });

//     }


//     await cart.save();


//     await cart.populate(
//         "items.product",
//         "productName sellingPrice images image sku"
//     );


//     return cart;
// };


// // ======================================================
// // GET CART
// // ======================================================

// const getCart = async (owner) => {

//     const cart = await findCart(owner);


//     if (!cart) {

//         return {
//             items: [],
//         };

//     }


//     return cart;
// };


// // ======================================================
// // UPDATE QUANTITY
// // ======================================================

// const updateCartQuantity = async (
//     owner,
//     productId,
//     quantity
// ) => {

//     const cart = await findCart(owner);


//     if (!cart) {

//         throw new Error("Cart not found");

//     }


//     const qty = Number(quantity);


//     if (!Number.isFinite(qty) || qty < 1) {

//         throw new Error(
//             "Quantity must be at least 1"
//         );

//     }


//     const item = cart.items.find((item) => {

//         return (
//             getIdString(item.product) ===
//             productId.toString()
//         );

//     });


//     if (!item) {

//         throw new Error(
//             "Product not found in cart"
//         );

//     }


//     item.quantity = qty;


//     await cart.save();


//     await cart.populate(
//         "items.product",
//         "productName sellingPrice images image sku"
//     );


//     return cart;
// };


// // ======================================================
// // REMOVE FROM CART
// // ======================================================

// const removeFromCart = async (
//     owner,
//     productId
// ) => {

//     const cart = await findCart(owner);


//     if (!cart) {

//         throw new Error("Cart not found");

//     }


//     cart.items = cart.items.filter((item) => {

//         return (
//             getIdString(item.product) !==
//             productId.toString()
//         );

//     });


//     await cart.save();


//     await cart.populate(
//         "items.product",
//         "productName sellingPrice images image sku"
//     );


//     return cart;
// };


// // ======================================================
// // CLEAR CART
// // ======================================================

// const clearCart = async (owner) => {

//     const cart = await findCart(owner);


//     if (!cart) {

//         return {
//             items: [],
//         };

//     }


//     cart.items = [];


//     await cart.save();


//     return cart;
// };


// // ======================================================
// // MERGE GUEST CART INTO CUSTOMER CART
// // ======================================================

// const mergeGuestCart = async (
//     guestId,
//     customerId
// ) => {

//     if (!guestId) {

//         return null;

//     }


//     if (!customerId) {

//         throw new Error(
//             "Customer is required"
//         );

//     }


//     // ------------------------------------------
//     // Find guest cart
//     // ------------------------------------------

//     const guestCart = await Cart.findOne({
//         guestId,
//     });


//     if (!guestCart) {

//         return null;

//     }


//     // ------------------------------------------
//     // Find customer cart
//     // ------------------------------------------

//     let customerCart = await Cart.findOne({
//         customer: customerId,
//     });


//     // ------------------------------------------
//     // Customer has no cart
//     // Move guest cart to customer
//     // ------------------------------------------

//     if (!customerCart) {

//         customerCart = await Cart.create({

//             customer: customerId,

//             items: guestCart.items.map(
//                 (guestItem) => ({

//                     product: guestItem.product,

//                     variant:
//                         guestItem.variant || null,

//                     quantity:
//                         guestItem.quantity,

//                 })
//             ),

//         });

//     }


//     // ------------------------------------------
//     // Customer already has cart
//     // Merge items
//     // ------------------------------------------

//     else {

//         guestCart.items.forEach(
//             (guestItem) => {

//                 const guestProductId =
//                     getIdString(
//                         guestItem.product
//                     );


//                 const guestVariantId =
//                     getIdString(
//                         guestItem.variant
//                     );


//                 const existingItem =
//                     customerCart.items.find(
//                         (customerItem) => {

//                             const customerProductId =
//                                 getIdString(
//                                     customerItem.product
//                                 );


//                             const customerVariantId =
//                                 getIdString(
//                                     customerItem.variant
//                                 );


//                             return (
//                                 customerProductId ===
//                                     guestProductId &&
//                                 customerVariantId ===
//                                     guestVariantId
//                             );

//                         }
//                     );


//                 // Same product + same variant
//                 if (existingItem) {

//                     existingItem.quantity +=
//                         guestItem.quantity;

//                 }


//                 // New product / variant
//                 else {

//                     customerCart.items.push({

//                         product:
//                             guestItem.product,

//                         variant:
//                             guestItem.variant ||
//                             null,

//                         quantity:
//                             guestItem.quantity,

//                     });

//                 }

//             }
//         );


//         await customerCart.save();

//     }


//     // ------------------------------------------
//     // Delete guest cart
//     // ------------------------------------------

//     await Cart.deleteOne({
//         _id: guestCart._id,
//     });


//     // ------------------------------------------
//     // Populate final customer cart
//     // ------------------------------------------

//     await customerCart.populate(
//         "items.product",
//         "productName sellingPrice images image sku"
//     );


//     return customerCart;
// };


// // ======================================================
// // EXPORT
// // ======================================================

// module.exports = {

//     addToCart,

//     getCart,

//     updateCartQuantity,

//     removeFromCart,

//     clearCart,

//     mergeGuestCart,

// };
//--------------------------------------------------------

// const Cart = require("../models/Cart");

// // ======================================================
// // Find Cart
// // ======================================================

// const findCart = async (owner) => {
//     let cart = null;

//     if (owner.customer) {
//         cart = await Cart.findOne({
//             customer: owner.customer,
//         });
//     } else if (owner.guestId) {
//         cart = await Cart.findOne({
//             guestId: owner.guestId,
//         });
//     }

//     if (!cart) {
//         return null;
//     }

//     await cart.populate(
//         "items.product",
//         "productName sellingPrice image sku"
//     );

//     return cart;
// };

// // ======================================================
// // Add To Cart
// // ======================================================

// const addToCart = async (
//     owner,
//     productId,
//     variantId,
//     quantity = 1
// ) => {
//     console.log("========== ADD TO CART SERVICE ==========");
//     console.log("OWNER:", owner);
//     console.log("PRODUCT:", productId);
//     console.log("VARIANT:", variantId);
//     console.log("QUANTITY:", quantity);

//     if (!owner.customer && !owner.guestId) {
//         throw new Error("Cart owner not found");
//     }

//     let cart = await findCart(owner);

//     // --------------------------------------------------
//     // No existing cart -> create one
//     // --------------------------------------------------

//     if (!cart) {
//         const cartData = {
//             items: [
//                 {
//                     product: productId,
//                     variant: variantId || null,
//                     quantity: Number(quantity) || 1,
//                 },
//             ],
//         };

//         // IMPORTANT:
//         // Only add the owner field that actually exists.
//         // Do NOT put null into the other unique field.

//         if (owner.customer) {
//             cartData.customer = owner.customer;
//         }

//         if (owner.guestId) {
//             cartData.guestId = owner.guestId;
//         }

//         console.log("CREATING CART:", cartData);

//         cart = await Cart.create(cartData);

//         await cart.populate(
//             "items.product",
//             "productName sellingPrice image sku"
//         );

//         return cart;
//     }

//     // --------------------------------------------------
//     // Existing cart
//     // --------------------------------------------------

//     console.log("EXISTING CART:", cart._id);

//     const incomingProductId = productId.toString();

//     const itemIndex = cart.items.findIndex((item) => {
//         const existingProductId = item.product?._id
//             ? item.product._id.toString()
//             : item.product.toString();

//         const existingVariantId = item.variant
//             ? item.variant.toString()
//             : null;

//         const incomingVariantId = variantId
//             ? variantId.toString()
//             : null;

//         // Same product + same variant = increase quantity
//         return (
//             existingProductId === incomingProductId &&
//             existingVariantId === incomingVariantId
//         );
//     });

//     // --------------------------------------------------
//     // Product already exists
//     // --------------------------------------------------

//     if (itemIndex !== -1) {
//         cart.items[itemIndex].quantity += Number(quantity) || 1;
//     }

//     // --------------------------------------------------
//     // New product / variant
//     // --------------------------------------------------

//     else {
//         cart.items.push({
//             product: productId,
//             variant: variantId || null,
//             quantity: Number(quantity) || 1,
//         });
//     }

//     await cart.save();

//     await cart.populate(
//         "items.product",
//         "productName sellingPrice image sku"
//     );

//     console.log("FINAL CART:", cart);

//     return cart;
// };

// // ======================================================
// // Get Cart
// // ======================================================

// const getCart = async (owner) => {
//     const cart = await findCart(owner);

//     if (!cart) {
//         return {
//             items: [],
//         };
//     }

//     return cart;
// };

// // ======================================================
// // Update Quantity
// // ======================================================

// const updateCartQuantity = async (
//     owner,
//     productId,
//     quantity
// ) => {
//     const cart = await findCart(owner);

//     if (!cart) {
//         throw new Error("Cart not found");
//     }

//     const item = cart.items.find((item) => {
//         const id = item.product?._id
//             ? item.product._id.toString()
//             : item.product.toString();

//         return id === productId.toString();
//     });

//     if (!item) {
//         throw new Error("Product not in cart");
//     }

//     const newQuantity = Number(quantity);

//     if (!Number.isInteger(newQuantity) || newQuantity < 1) {
//         throw new Error("Quantity must be at least 1");
//     }

//     item.quantity = newQuantity;

//     await cart.save();

//     await cart.populate(
//         "items.product",
//         "productName sellingPrice image sku"
//     );

//     return cart;
// };

// // ======================================================
// // Remove Item
// // ======================================================

// const removeFromCart = async (
//     owner,
//     productId
// ) => {
//     const cart = await findCart(owner);

//     if (!cart) {
//         throw new Error("Cart not found");
//     }

//     cart.items = cart.items.filter((item) => {
//         const id = item.product?._id
//             ? item.product._id.toString()
//             : item.product.toString();

//         return id !== productId.toString();
//     });

//     await cart.save();

//     await cart.populate(
//         "items.product",
//         "productName sellingPrice image sku"
//     );

//     return cart;
// };

// // ======================================================
// // Clear Cart
// // ======================================================

// const clearCart = async (owner) => {
//     const cart = await findCart(owner);

//     if (!cart) {
//         return {
//             items: [],
//         };
//     }

//     cart.items = [];

//     await cart.save();

//     await cart.populate(
//         "items.product",
//         "productName sellingPrice image sku"
//     );

//     return cart;
// };

// // ======================================================
// // Merge Guest Cart Into Customer Cart
// // ======================================================

// const mergeGuestCart = async (
//     guestId,
//     customerId
// ) => {
//     if (!guestId) {
//         return null;
//     }

//     if (!customerId) {
//         throw new Error("Customer ID is required");
//     }

//     console.log("========== MERGE CART ==========");
//     console.log("GUEST:", guestId);
//     console.log("CUSTOMER:", customerId);

//     const guestCart = await Cart.findOne({
//         guestId,
//     });

//     if (!guestCart) {
//         return null;
//     }

//     let customerCart = await Cart.findOne({
//         customer: customerId,
//     });

//     // --------------------------------------------------
//     // Customer does not have cart
//     // Move guest cart to customer
//     // --------------------------------------------------

//     if (!customerCart) {
//         guestCart.customer = customerId;

//         // IMPORTANT:
//         // Remove guestId completely.
//         guestCart.guestId = undefined;

//         await guestCart.save();

//         await guestCart.populate(
//             "items.product",
//             "productName sellingPrice image sku"
//         );

//         return guestCart;
//     }

//     // --------------------------------------------------
//     // Customer already has cart
//     // Merge items
//     // --------------------------------------------------

//     for (const guestItem of guestCart.items) {
//         const guestProductId = guestItem.product?._id
//             ? guestItem.product._id.toString()
//             : guestItem.product.toString();

//         const guestVariantId = guestItem.variant
//             ? guestItem.variant.toString()
//             : null;

//         const existingItem = customerCart.items.find(
//             (customerItem) => {
//                 const customerProductId =
//                     customerItem.product?._id
//                         ? customerItem.product._id.toString()
//                         : customerItem.product.toString();

//                 const customerVariantId =
//                     customerItem.variant
//                         ? customerItem.variant.toString()
//                         : null;

//                 return (
//                     customerProductId === guestProductId &&
//                     customerVariantId === guestVariantId
//                 );
//             }
//         );

//         if (existingItem) {
//             existingItem.quantity += guestItem.quantity;
//         } else {
//             customerCart.items.push({
//                 product: guestItem.product,
//                 variant: guestItem.variant || null,
//                 quantity: guestItem.quantity,
//             });
//         }
//     }

//     await customerCart.save();

//     // Delete old guest cart
//     await Cart.deleteOne({
//         _id: guestCart._id,
//     });

//     await customerCart.populate(
//         "items.product",
//         "productName sellingPrice image sku"
//     );

//     return customerCart;
// };

// // ======================================================
// // EXPORT
// // ======================================================

// module.exports = {
//     addToCart,
//     getCart,
//     updateCartQuantity,
//     removeFromCart,
//     clearCart,
//     mergeGuestCart,
// };

const Cart = require("../models/Cart");

// ======================================================
// POPULATE CART
// ======================================================

const populateCart = async (cart) => {
    if (!cart) {
        return null;
    }

    await cart.populate(
        "items.product",
        "productName sellingPrice images sku"
    );

    return cart;
};

// ======================================================
// FIND CART
// ======================================================

const findCart = async (owner) => {
    let cart = null;

    if (owner.customer) {
        cart = await Cart.findOne({
            customer: owner.customer,
        });
    } else if (owner.guestId) {
        cart = await Cart.findOne({
            guestId: owner.guestId,
        });
    }

    if (!cart) {
        return null;
    }

    await populateCart(cart);

    return cart;
};

// ======================================================
// ADD TO CART
// ======================================================

const addToCart = async (
    owner,
    productId,
    variantId,
    quantity = 1
) => {
    console.log("========== ADD TO CART SERVICE ==========");
    console.log("OWNER:", owner);
    console.log("PRODUCT:", productId);
    console.log("VARIANT:", variantId);
    console.log("QUANTITY:", quantity);

    // --------------------------------------------------
    // Validate owner
    // --------------------------------------------------

    if (!owner.customer && !owner.guestId) {
        throw new Error("Cart owner not found");
    }

    // --------------------------------------------------
    // Validate product
    // --------------------------------------------------

    if (!productId) {
        throw new Error("Product ID is required");
    }

    const incomingProductId = productId.toString();

    const incomingVariantId = variantId
        ? variantId.toString()
        : null;

    const incomingQuantity = Number(quantity) || 1;

    // --------------------------------------------------
    // Find existing cart
    // --------------------------------------------------

    let cart = await findCart(owner);

    // ==================================================
    // CREATE NEW CART
    // ==================================================

    if (!cart) {
        const cartData = {
            items: [
                {
                    product: productId,
                    variant: variantId || null,
                    quantity: incomingQuantity,
                },
            ],
        };

        if (owner.customer) {
            cartData.customer = owner.customer;
        }

        if (owner.guestId) {
            cartData.guestId = owner.guestId;
        }

        console.log("CREATING CART:", cartData);

        cart = await Cart.create(cartData);

        await populateCart(cart);

        console.log("NEW CART:", cart);

        return cart;
    }

    // ==================================================
    // EXISTING CART
    // ==================================================

    console.log("EXISTING CART:", cart._id);

    console.log(
        "CURRENT CART ITEMS:",
        cart.items.map((item) => ({
            product: item.product,
            variant: item.variant,
            quantity: item.quantity,
        }))
    );

    // --------------------------------------------------
    // Find same product + variant
    // --------------------------------------------------

    const itemIndex = cart.items.findIndex((item) => {

        // IMPORTANT:
        // Old/broken cart data may contain product: null.
        // Ignore such items instead of calling .toString()
        // on null.

        if (!item.product) {
            console.warn(
                "WARNING: Cart contains item with null product:",
                item
            );

            return false;
        }

        // Product can be:
        // 1. ObjectId
        // 2. populated Product object

        let existingProductId = null;

        if (item.product._id) {
            existingProductId =
                item.product._id.toString();
        } else {
            existingProductId =
                item.product.toString();
        }

        // Variant can be:
        // 1. ObjectId
        // 2. null

        let existingVariantId = null;

        if (item.variant) {
            if (item.variant._id) {
                existingVariantId =
                    item.variant._id.toString();
            } else {
                existingVariantId =
                    item.variant.toString();
            }
        }

        console.log("COMPARING CART ITEM:", {
            existingProductId,
            incomingProductId,
            existingVariantId,
            incomingVariantId,
        });

        return (
            existingProductId === incomingProductId &&
            existingVariantId === incomingVariantId
        );
    });

    // ==================================================
    // EXISTING PRODUCT + VARIANT
    // ==================================================

    if (itemIndex !== -1) {

        console.log(
            "EXISTING PRODUCT + VARIANT FOUND"
        );

        cart.items[itemIndex].quantity +=
            incomingQuantity;
    }

    // ==================================================
    // NEW PRODUCT / VARIANT
    // ==================================================

    else {

        console.log(
            "NEW PRODUCT + VARIANT - ADDING ITEM"
        );

        cart.items.push({
            product: productId,
            variant: variantId || null,
            quantity: incomingQuantity,
        });
    }

    // ==================================================
    // REMOVE BROKEN CART ITEMS
    // ==================================================

    cart.items = cart.items.filter((item) => {

        if (!item.product) {
            console.warn(
                "Removing broken cart item:",
                item
            );

            return false;
        }

        return true;
    });

    // ==================================================
    // SAVE
    // ==================================================

    await cart.save();

    await populateCart(cart);

    console.log("FINAL CART:", cart);

    return cart;
};

// ======================================================
// GET CART
// ======================================================

const getCart = async (owner) => {

    const cart = await findCart(owner);

    if (!cart) {
        return {
            items: [],
        };
    }

    // Remove corrupted items
    cart.items = cart.items.filter(
        (item) => item.product
    );

    return cart;
};

// ======================================================
// UPDATE QUANTITY
// ======================================================

const updateCartQuantity = async (
    owner,
    productId,
    quantity
) => {

    const cart = await findCart(owner);

    if (!cart) {
        throw new Error("Cart not found");
    }

    if (!productId) {
        throw new Error("Product ID is required");
    }

    const incomingProductId =
        productId.toString();

    const item = cart.items.find((item) => {

        if (!item.product) {
            return false;
        }

        const existingProductId =
            item.product._id
                ? item.product._id.toString()
                : item.product.toString();

        return (
            existingProductId ===
            incomingProductId
        );
    });

    if (!item) {
        throw new Error(
            "Product not in cart"
        );
    }

    const newQuantity =
        Number(quantity);

    if (
        !Number.isInteger(newQuantity) ||
        newQuantity < 1
    ) {
        throw new Error(
            "Quantity must be at least 1"
        );
    }

    item.quantity = newQuantity;

    await cart.save();

    await populateCart(cart);

    return cart;
};

// ======================================================
// REMOVE ITEM
// ======================================================

const removeFromCart = async (
    owner,
    productId
) => {

    const cart = await findCart(owner);

    if (!cart) {
        throw new Error(
            "Cart not found"
        );
    }

    if (!productId) {
        throw new Error(
            "Product ID is required"
        );
    }

    const incomingProductId =
        productId.toString();

    cart.items = cart.items.filter(
        (item) => {

            // Remove corrupted item
            if (!item.product) {
                return false;
            }

            const existingProductId =
                item.product._id
                    ? item.product._id.toString()
                    : item.product.toString();

            return (
                existingProductId !==
                incomingProductId
            );
        }
    );

    await cart.save();

    await populateCart(cart);

    return cart;
};

// ======================================================
// CLEAR CART
// ======================================================

const clearCart = async (owner) => {

    const cart = await findCart(owner);

    if (!cart) {
        return {
            items: [],
        };
    }

    cart.items = [];

    await cart.save();

    await populateCart(cart);

    return cart;
};

// ======================================================
// MERGE GUEST CART
// ======================================================

const mergeGuestCart = async (
    guestId,
    customerId
) => {

    if (!guestId) {
        return null;
    }

    if (!customerId) {
        throw new Error(
            "Customer ID is required"
        );
    }

    console.log(
        "========== MERGE CART =========="
    );

    console.log("GUEST:", guestId);
    console.log("CUSTOMER:", customerId);

    // --------------------------------------------------
    // Find guest cart
    // --------------------------------------------------

    const guestCart =
        await Cart.findOne({
            guestId,
        });

    if (!guestCart) {
        return null;
    }

    // --------------------------------------------------
    // Remove broken guest items first
    // --------------------------------------------------

    guestCart.items =
        guestCart.items.filter(
            (item) => item.product
        );

    // --------------------------------------------------
    // Find customer cart
    // --------------------------------------------------

    let customerCart =
        await Cart.findOne({
            customer: customerId,
        });

    // ==================================================
    // CUSTOMER HAS NO CART
    // ==================================================

    if (!customerCart) {

        guestCart.customer =
            customerId;

        guestCart.guestId =
            undefined;

        await guestCart.save();

        await populateCart(
            guestCart
        );

        return guestCart;
    }

    // ==================================================
    // CUSTOMER ALREADY HAS CART
    // ==================================================

    // Remove broken customer items
    customerCart.items =
        customerCart.items.filter(
            (item) => item.product
        );

    // --------------------------------------------------
    // Merge guest items
    // --------------------------------------------------

    for (
        const guestItem
        of guestCart.items
    ) {

        if (!guestItem.product) {
            continue;
        }

        const guestProductId =
            guestItem.product._id
                ? guestItem.product._id.toString()
                : guestItem.product.toString();

        const guestVariantId =
            guestItem.variant
                ? (
                    guestItem.variant._id
                        ? guestItem.variant._id.toString()
                        : guestItem.variant.toString()
                )
                : null;

        const existingItem =
            customerCart.items.find(
                (customerItem) => {

                    if (!customerItem.product) {
                        return false;
                    }

                    const customerProductId =
                        customerItem.product._id
                            ? customerItem.product._id.toString()
                            : customerItem.product.toString();

                    const customerVariantId =
                        customerItem.variant
                            ? (
                                customerItem.variant._id
                                    ? customerItem.variant._id.toString()
                                    : customerItem.variant.toString()
                            )
                            : null;

                    return (
                        customerProductId ===
                        guestProductId &&
                        customerVariantId ===
                        guestVariantId
                    );
                }
            );

        // --------------------------------------------------
        // Existing item
        // --------------------------------------------------

        if (existingItem) {

            existingItem.quantity +=
                guestItem.quantity;
        }

        // --------------------------------------------------
        // New item
        // --------------------------------------------------

        else {

            customerCart.items.push({
                product:
                    guestItem.product,
                variant:
                    guestItem.variant || null,
                quantity:
                    guestItem.quantity,
            });
        }
    }

    // --------------------------------------------------
    // Save customer cart
    // --------------------------------------------------

    await customerCart.save();

    // --------------------------------------------------
    // Delete guest cart
    // --------------------------------------------------

    await Cart.deleteOne({
        _id: guestCart._id,
    });

    await populateCart(
        customerCart
    );

    return customerCart;
};

// ======================================================
// EXPORT
// ======================================================

module.exports = {
    addToCart,
    getCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    mergeGuestCart,
};