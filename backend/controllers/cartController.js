
// const cartService = require("../services/cartService");


// // Get cart owner (customer or guest)
// const getOwner = (req) => {

//   return {

//     customer: req.user ? req.user._id : null,

//     guestId: req.guestId || null,

//   };

// };



// // ===============================
// // Add To Cart
// // ===============================
// // const addToCart = async (req, res) => {

// //   try {

// //     console.log("======== ADD CART START ========");

// //     console.log("BODY:", req.body);

// //     console.log("USER:", req.user);

// //     console.log("GUEST ID:", req.guestId);


// //     const { productId, quantity } = req.body;


// //     const owner = getOwner(req);

// //     console.log("OWNER:", owner);


// //     const cart = await cartService.addToCart(
// //       owner,
// //       productId,
// //       quantity
// //     );


// //     console.log("CREATED CART:", cart);


// //     res.status(200).json({
// //       success:true,
// //       cart
// //     });


// //   } catch(error){

// //     console.log("ADD CART ERROR:", error.message);


// //     res.status(500).json({
// //       success:false,
// //       message:error.message
// //     });

// //   }

// // };
// // ===============================
// // Add To Cart
// // ===============================
// const addToCart = async (
//     owner,
//     productId,
//     quantity = 1
// ) => {

//     let cart = await findCart(owner);

//     // Create new cart
//     if (!cart) {

//         cart = await Cart.create({
//             customer: owner.customer || null,
//             guestId: owner.guestId || null,
//             items: [
//                 {
//                     product: productId,
//                     quantity
//                 }
//             ]
//         });

//         await cart.populate(
//             "items.product",
//             "productName sellingPrice image sku"
//         );

//         console.log("NEW CART CREATED:", cart);

//         return cart;
//     }

//     console.log("=================================");
//     console.log("Incoming Product:", productId);

//     console.log(
//         "Cart Before:",
//         cart.items.map((i) => ({
//             product: i.product._id
//                 ? i.product._id.toString()
//                 : i.product.toString(),
//             qty: i.quantity,
//         }))
//     );

//     const itemIndex = cart.items.findIndex((item) => {

//         const existingId = item.product._id
//             ? item.product._id.toString()
//             : item.product.toString();

//         console.log(
//             "Comparing:",
//             existingId,
//             "===",
//             productId
//         );

//         return existingId === productId;
//     });

//     console.log("FOUND INDEX:", itemIndex);

//     if (itemIndex > -1) {

//         console.log("Product already exists. Increasing quantity...");

//         cart.items[itemIndex].quantity += Number(quantity);

//     } else {

//         console.log("Product not found. Adding new item...");

//         cart.items.push({
//             product: productId,
//             quantity: Number(quantity)
//         });

//     }

//     await cart.save();

//     await cart.populate(
//         "items.product",
//         "productName sellingPrice image sku"
//     );

//     console.log(
//         "Cart After:",
//         cart.items.map((i) => ({
//             product: i.product._id.toString(),
//             qty: i.quantity,
//         }))
//     );

//     console.log("=================================");

//     return cart;
// };


// // ===============================
// // Get Cart
// // ===============================
// const getCart = async(req,res)=>{

//   try{


//     const cart = await cartService.getCart(
//       getOwner(req)
//     );


//     res.status(200).json({
//       success:true,
//       cart
//     });


//   }catch(error){

//     res.status(500).json({
//       success:false,
//       message:error.message
//     });

//   }

// };



// // ===============================
// // Update Quantity
// // ===============================
// const updateCartQuantity = async(req,res)=>{

//   try{

//     console.log("OWNER:", getOwner(req));
//     console.log("PRODUCT ID:", req.params.productId);
//     console.log("QUANTITY:", req.body.quantity);


//     const cart =
//       await cartService.updateCartQuantity(
//         getOwner(req),
//         req.params.productId,
//         req.body.quantity
//       );


//     res.status(200).json({
//       success:true,
//       cart
//     });


//   }catch(error){

//     console.log("UPDATE CART ERROR:", error.message);

//     res.status(500).json({
//       success:false,
//       message:error.message
//     });

//   }

// };



// // ===============================
// // Remove Item
// // ===============================
// const removeFromCart = async(req,res)=>{

//   try{


//     const cart =
//       await cartService.removeFromCart(
//         getOwner(req),
//         req.params.productId
//       );


//     res.status(200).json({
//       success:true,
//       cart
//     });


//   }catch(error){

//     res.status(500).json({
//       success:false,
//       message:error.message
//     });

//   }

// };



// // ===============================
// // Clear Cart
// // ===============================
// const clearCart = async(req,res)=>{

//   try{


//     const cart =
//       await cartService.clearCart(
//         getOwner(req)
//       );


//     res.status(200).json({
//       success:true,
//       cart
//     });


//   }catch(error){

//     res.status(500).json({
//       success:false,
//       message:error.message
//     });

//   }

// };
// // ===============================
// // Merge Guest Cart
// // ===============================
// const mergeGuestCart = async(req,res)=>{

//   try{
//       console.log("ALL COOKIES:", req.cookies);

//     console.log("GUEST ID:", req.cookies.guestId);

//     console.log("USER:", req.user._id);



//     const guestId = req.cookies.guestId;


//     if(!guestId){

//       return res.status(200).json({
//         success:true,
//         message:"No guest cart found"
//       });

//     }



//     const cart =
//       await cartService.mergeGuestCart(
//         guestId,
//         req.user._id
//       );



//     res.status(200).json({

//       success:true,

//       cart

//     });



//   }catch(error){

//     res.status(500).json({

//       success:false,

//       message:error.message

//     });

//   }

// };


// module.exports = {

//  addToCart,
//  getCart,
//  updateCartQuantity,
//  removeFromCart,
//  clearCart,
//  mergeGuestCart

// };



const cartService = require("../services/cartService");

const getOwner = (req) => ({
    customer: req.user ? req.user._id : null,
    guestId: req.guestId || null,
});

const addToCart = async (req, res) => {
    try {

        const { productId, quantity } = req.body;

        const cart = await cartService.addToCart(
            getOwner(req),
            productId,
            quantity
        );

        res.status(200).json({
            success: true,
            cart,
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

const getCart = async (req, res) => {
    try {

        const cart = await cartService.getCart(
            getOwner(req)
        );

        res.json({
            success: true,
            cart,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

const updateCartQuantity = async (req, res) => {
    try {

        const cart = await cartService.updateCartQuantity(
            getOwner(req),
            req.params.productId,
            req.body.quantity
        );

        res.json({
            success: true,
            cart,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

const removeFromCart = async (req, res) => {
    try {

        const cart = await cartService.removeFromCart(
            getOwner(req),
            req.params.productId
        );

        res.json({
            success: true,
            cart,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

const clearCart = async (req, res) => {
    try {

        const cart = await cartService.clearCart(
            getOwner(req)
        );

        res.json({
            success: true,
            cart,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// const mergeGuestCart = async (req, res) => {
//     try {

//         const guestId = req.cookies.guestId;

//         const cart = await cartService.mergeGuestCart(
//             guestId,
//             req.user._id
//         );

//         res.json({
//             success: true,
//             cart,
//         });

//     } catch (error) {

//         res.status(500).json({
//             success: false,
//             message: error.message,
//         });

//     }
// };
const mergeGuestCart = async (req, res) => {
  try {

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Please login first",
      });
    }

    const guestId = req.cookies.guestId;

    if (!guestId) {
      return res.status(200).json({
        success: true,
        message: "No guest cart found",
      });
    }

    const cart = await cartService.mergeGuestCart(
      guestId,
      req.user._id
    );

    res.clearCookie("guestId");

    return res.status(200).json({
      success: true,
      cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
    addToCart,
    getCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    mergeGuestCart,
};