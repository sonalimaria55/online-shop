// // const mongoose = require("mongoose");

// // const cartItemSchema = new mongoose.Schema(
// //   {
// //     product: {
// //       type: mongoose.Schema.Types.ObjectId,
// //       ref: "Product",
// //       required: true,
// //     },

// //     quantity: {
// //       type: Number,
// //       default: 1,
// //       min: 1,
// //     },
// //   },
// //   { _id: false }
// // );

// // const cartSchema = new mongoose.Schema(
// //   {
// //     customer: {
// //       type: mongoose.Schema.Types.ObjectId,
// //       ref: "User",
// //       required: true,
// //       unique: true,
// //     },

// //     items: [cartItemSchema],
// //   },
// //   {
// //     timestamps: true,
// //   }
// // );

// // module.exports = mongoose.model("Cart", cartSchema);

// // const mongoose = require("mongoose");


// // const cartItemSchema = new mongoose.Schema(
// //   {
// //     product: {
// //       type: mongoose.Schema.Types.ObjectId,
// //       ref: "Product",
// //       required: true,
// //     },

// //     quantity: {
// //       type: Number,
// //       default: 1,
// //       min: 1,
// //     },

// //   },
// //   {
// //     _id:false
// //   }
// // );



// // const cartSchema = new mongoose.Schema(
// //   {

// //     // Logged-in customer
// //     customer:{
// //       type:mongoose.Schema.Types.ObjectId,
// //       ref:"User",
// //       default:null,
// //     },


// //     // Guest visitor
// //     guestId:{
// //       type:String,
// //       default:null,
// //     },


// //     items:[
// //       cartItemSchema
// //     ],

// //   },
// //   {
// //     timestamps:true
// //   }
// // );


// // // One customer = one cart
// // cartSchema.index(
// //   {customer:1},
// //   {
// //     unique:true,
// //     sparse:true
// //   }
// // );


// // // One guest browser = one cart
// // cartSchema.index(
// //   {guestId:1},
// //   {
// //     unique:true,
// //     sparse:true
// //   }
// // );



// // module.exports = mongoose.model("Cart", cartSchema);


// const mongoose = require("mongoose");

// const cartItemSchema = new mongoose.Schema(
//   {
//     product: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Product",
//       required: true,
//     },

//     quantity: {
//       type: Number,
//       default: 1,
//       min: 1,
//     },
//   },
//   {
//     _id: false,
//   }
// );

// const cartSchema = new mongoose.Schema(
//   {
//     // Logged-in customer
//     customer: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       default: null,
//     },

//     // Guest visitor
//     guestId: {
//       type: String,
//       default: null,
//     },

//     items: [cartItemSchema],
//   },
//   {
//     timestamps: true,
//   }
// );

// // Ensure cart belongs to either customer or guest
// cartSchema.pre("validate", function (next) {
//   if (!this.customer && !this.guestId) {
//     return next(new Error("Cart must belong to a customer or a guest."));
//   }

//   next();
// });

// // One customer = one cart
// cartSchema.index(
//   { customer: 1 },
//   {
//     unique: true,
//     sparse: true,
//   }
// );

// // One guest = one cart
// cartSchema.index(
//   { guestId: 1 },
//   {
//     unique: true,
//     sparse: true,
//   }
// );

// module.exports = mongoose.model("Cart", cartSchema);

//----------------------------------------------------

// const mongoose = require("mongoose");


// const cartItemSchema = new mongoose.Schema(

// {
//     product: {

//         type: mongoose.Schema.Types.ObjectId,

//         ref: "Product",

//         required: true,

//     },


//     // selected product variant
//     // variant: {

//     //     value: {
//     //         type: String,
//     //         default: "",
//     //     },


//     //     color: {

//     //         type: String,

//     //         default: "",

//     //     },


//     //     sku: {

//     //         type: String,

//     //         default: "",

//     //     },


//     //     barcode: {

//     //         type: String,

//     //         default: "",

//     //     }

//     // },
// variant: {
//     type: mongoose.Schema.Types.ObjectId,
//     default: null,
// },

//     quantity: {

//         type: Number,

//         default: 1,

//         min: 1,

//     }

// },

// {
//     _id:false
// }

// );





// const cartSchema = new mongoose.Schema(

// {

//     // Logged-in customer

//     customer: {

//         type: mongoose.Schema.Types.ObjectId,

//         ref:"User",

//         default:null,

//     },



//     // Guest visitor

//     guestId: {

//         type:String,

//         default:null,

//     },



//     items:[cartItemSchema]


// },

// {

//     timestamps:true

// }

// );







// // Cart must belong to user or guest

// // cartSchema.pre(
// // "validate",
// // function(next){


// //     if(
// //         !this.customer &&
// //         !this.guestId
// //     ){

// //         return next(
// //             new Error(
// //                 "Cart must belong to customer or guest"
// //             )
// //         );

// //     }


// //     next();


// // });



// // Cart must belong to user or guest

// cartSchema.pre("validate", function () {

//     if (!this.customer && !this.guestId) {
//         throw new Error("Cart must belong to customer or guest");
//     }

// });




// // One customer one cart

// cartSchema.index(

// {
//     customer:1
// },

// {
//     unique:true,

//     sparse:true

// }

// );






// // One guest one cart

// cartSchema.index(

// {
//     guestId:1
// },

// {
//     unique:true,

//     sparse:true

// }

// );






// module.exports = mongoose.model(
//     "Cart",
//     cartSchema
// );

//-----------------------
// const mongoose = require("mongoose");

// // ======================================================
// // CART ITEM
// // ======================================================

// const cartItemSchema = new mongoose.Schema(
//     {
//         product: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Product",
//             required: true,
//         },

//         // ProductVariant sub-document _id
//         variant: {
//             type: mongoose.Schema.Types.ObjectId,
//             default: null,
//         },

//         quantity: {
//             type: Number,
//             default: 1,
//             min: 1,
//         },
//     },
//     {
//         _id: false,
//     }
// );

// // ======================================================
// // CART
// // ======================================================

// const cartSchema = new mongoose.Schema(
//     {
//         // Logged-in customer
//         customer: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "User",
//         },

//         // Guest visitor
//         guestId: {
//             type: String,
//         },

//         items: {
//             type: [cartItemSchema],
//             default: [],
//         },
//     },
//     {
//         timestamps: true,
//     }
// );

// // ======================================================
// // VALIDATION
// // ======================================================

// cartSchema.pre("validate", function () {
//     if (!this.customer && !this.guestId) {
//         throw new Error(
//             "Cart must belong to customer or guest"
//         );
//     }
// });

// // ======================================================
// // ONE CART PER CUSTOMER
// // ======================================================

// cartSchema.index(
//     {
//         customer: 1,
//     },
//     {
//         unique: true,
//         sparse: true,
//     }
// );

// // ======================================================
// // ONE CART PER GUEST
// // ======================================================

// cartSchema.index(
//     {
//         guestId: 1,
//     },
//     {
//         unique: true,
//         sparse: true,
//     }
// );

// module.exports = mongoose.model(
//     "Cart",
//     cartSchema
// );
//------------------------------

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
//----------------
const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },

        // Selected product variant
        variant: {
            type: mongoose.Schema.Types.ObjectId,
            default: null,
        },

        quantity: {
            type: Number,
            default: 1,
            min: 1,
        },
    },
    {
        _id: false,
    }
);

const cartSchema = new mongoose.Schema(
    {
        // Logged-in customer
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        // Guest visitor
        guestId: {
            type: String,
        },

        items: [cartItemSchema],
    },
    {
        timestamps: true,
    }
);

// Cart must belong to either a customer OR a guest
cartSchema.pre("validate", function () {
    if (!this.customer && !this.guestId) {
        throw new Error("Cart must belong to customer or guest");
    }
});

// One cart per customer
cartSchema.index(
    { customer: 1 },
    {
        unique: true,
        sparse: true,
    }
);

// One cart per guest
cartSchema.index(
    { guestId: 1 },
    {
        unique: true,
        sparse: true,
    }
);

module.exports = mongoose.model("Cart", cartSchema);