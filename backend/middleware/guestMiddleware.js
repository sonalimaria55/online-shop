// const { v4: uuidv4 } = require("uuid");

// const guestMiddleware = (req,res,next)=>{

//     // If customer is logged in
//     // no need guest id

//     if(req.user){

//         return next();

//     }

//     let guestId = req.cookies.guestId;

//     // First time visitor

//     if(!guestId){

//         guestId = "serina_guest_" + uuidv4();

//         res.cookie(
//             "guestId",
//             guestId,
//             {
//                 httpOnly:true,
//                 maxAge:1000 * 60 * 60 * 24 * 30, //30 days
//                 sameSite:"lax"
//             }
//         );

//     }

//     req.guestId = guestId;

//     next();

// };

// module.exports = guestMiddleware;
//-----------------------------------------------------------

// const crypto = require("crypto");

// const guestMiddleware = (req,res,next)=>{

//     if(req.user){

//         req.guestId = null;

//         return next();

//     }

//     let guestId = req.cookies.guestId;

//     if(!guestId){

//         guestId =
//         "serina_guest_" + crypto.randomUUID();

//         res.cookie(
//             "guestId",
//             guestId,
//             {
//                 httpOnly:true,
//                 maxAge:1000 * 60 * 60 * 24 * 30,
//                 sameSite:"lax"
//             }
//         );

//     }

//     req.guestId = guestId;

//     next();

// };

// module.exports = guestMiddleware;
//----------------------------------------------------------------
// --

// const crypto = require("crypto");

// const guestMiddleware = (req, res, next) => {
//     // --------------------------------------------------
//     // Logged-in user
//     // --------------------------------------------------

//     if (req.user) {
//         req.guestId = null;
//         return next();
//     }

//     // --------------------------------------------------
//     // Guest user
//     // --------------------------------------------------

//     let guestId = req.cookies?.guestId;

//     if (!guestId) {
//         guestId =
//             "serina_guest_" + crypto.randomUUID();

//         res.cookie(
//             "guestId",
//             guestId,
//             {
//                 httpOnly: true,
//                 maxAge: 1000 * 60 * 60 * 24 * 30,
//                 sameSite: "lax",
//             }
//         );
//     }

//     req.guestId = guestId;

//     next();
// };

// module.exports = guestMiddleware;
// //------------------------------------------------------
// const crypto = require("crypto");

// const guestMiddleware = (req, res, next) => {

//     // ======================================================
//     // GET EXISTING GUEST ID
//     // ======================================================

//     let guestId = req.cookies?.guestId;

//     console.log("======================================");
//     console.log("CART IDENTITY");
//     console.log("CUSTOMER:", req.user?._id || null);
//     console.log("COOKIE guestId:", guestId);


//     // ======================================================
//     // CREATE GUEST ID IF NONE EXISTS
//     // ======================================================

//     if (!guestId) {

//         guestId =
//             "serina_guest_" + crypto.randomUUID();

//         const isProduction =
//             process.env.NODE_ENV === "production";

//         res.cookie("guestId", guestId, {
//             httpOnly: true,

//             maxAge:
//                 1000 *
//                 60 *
//                 60 *
//                 24 *
//                 30,

//             path: "/",

//             sameSite: isProduction
//                 ? "none"
//                 : "lax",

//             secure: isProduction,
//         });

//         console.log(
//             "NEW GUEST COOKIE CREATED:",
//             guestId
//         );
//     }


//     // ======================================================
//     // IMPORTANT
//     //
//     // KEEP guestId EVEN IF USER IS LOGGED IN
//     // ======================================================

//     req.guestId = guestId;

//     console.log(
//         "FINAL req.guestId:",
//         req.guestId
//     );

//     console.log("======================================");


//     next();
// };

// module.exports = guestMiddleware;
// const findCart = async (owner) => {

//     console.log("========== FIND CART ==========");
//     console.log("OWNER:", owner);
//     console.log(
//         "CUSTOMER:",
//         owner.customer
//     );
//     console.log(
//         "GUEST ID:",
//         owner.guestId
//     );

//     let cart = null;

//     if (owner.customer) {

//         console.log(
//             "SEARCHING CUSTOMER CART:",
//             owner.customer
//         );

//         cart = await Cart.findOne({
//             customer: owner.customer,
//         });

//     } else if (owner.guestId) {

//         console.log(
//             "SEARCHING GUEST CART:",
//             owner.guestId
//         );

//         cart = await Cart.findOne({
//             guestId: owner.guestId,
//         });
//     }

//     console.log(
//         "FOUND CART:",
//         cart
//             ? {
//                 id: cart._id,
//                 customer: cart.customer,
//                 guestId: cart.guestId,
//                 items: cart.items,
//             }
//             : null
//     );

//     if (!cart) {
//         return null;
//     }

//     await populateCart(cart);

//     return cart;
// };
//----------------------
const crypto = require("crypto");

const guestMiddleware = (req, res, next) => {

    console.log("======================================");
    console.log("CART IDENTITY");
    console.log("CUSTOMER:", req.user?._id || null);

    let guestId = req.cookies?.guestId;

    console.log("COOKIE guestId:", guestId);

    if (!guestId) {

        guestId =
            "serina_guest_" + crypto.randomUUID();

        const isProduction =
            process.env.NODE_ENV === "production";

        res.cookie("guestId", guestId, {
            httpOnly: true,

            maxAge: 1000 * 60 * 60 * 24 * 30,

            path: "/",

            sameSite: isProduction
                ? "none"
                : "lax",

            secure: isProduction,
        });

        console.log(
            "NEW GUEST COOKIE CREATED:",
            guestId
        );

        console.log(
            "COOKIE SETTINGS:",
            {
                isProduction,
                sameSite: isProduction ? "none" : "lax",
                secure: isProduction,
            }
        );
    }

    req.guestId = guestId;

    console.log(
        "FINAL req.guestId:",
        req.guestId
    );

    console.log("======================================");

    next();
};

module.exports = guestMiddleware;