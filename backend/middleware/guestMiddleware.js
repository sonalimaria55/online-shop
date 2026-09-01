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
// const crypto = require("crypto");

// const guestMiddleware = (req, res, next) => {

//     console.log("======================================");
//     console.log("CART IDENTITY");
//     console.log("CUSTOMER:", req.user?._id || null);

//     let guestId = req.cookies?.guestId;

//     console.log("COOKIE guestId:", guestId);

//     if (!guestId) {

//         guestId =
//             "serina_guest_" + crypto.randomUUID();

//         const isProduction =
//             process.env.NODE_ENV === "production";

//         res.cookie("guestId", guestId, {
//             httpOnly: true,

//             maxAge: 1000 * 60 * 60 * 24 * 30,

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

//         console.log(
//             "COOKIE SETTINGS:",
//             {
//                 isProduction,
//                 sameSite: isProduction ? "none" : "lax",
//                 secure: isProduction,
//             }
//         );
//     }

//     req.guestId = guestId;

//     console.log(
//         "FINAL req.guestId:",
//         req.guestId
//     );

//     console.log("======================================");

//     next();
// };

// module.exports = guestMiddleware;
//--------------------------------------------------------------------
// const crypto = require("crypto");

// const guestMiddleware = (req, res, next) => {
//     try {
//         console.log("======================================");
//         console.log("CART IDENTITY");
//         console.log("METHOD:", req.method);
//         console.log("URL:", req.originalUrl);
//         console.log("CUSTOMER:", req.user?._id || null);

//         let guestId = req.cookies?.guestId;

//         console.log("COOKIE guestId:", guestId);

//         // --------------------------------------------------
//         // CREATE GUEST ID
//         // --------------------------------------------------

//         if (!guestId) {
//             guestId = "serina_guest_" + crypto.randomUUID();

//             const isProduction =
//                 process.env.NODE_ENV === "production";

//             res.cookie("guestId", guestId, {
//                 httpOnly: true,

//                 secure: isProduction,

//                 sameSite: isProduction
//                     ? "none"
//                     : "lax",

//                 maxAge: 1000 * 60 * 60 * 24 * 30,

//                 path: "/",
//             });

//             console.log(
//                 "NEW GUEST COOKIE CREATED:",
//                 guestId
//             );

//             console.log("COOKIE OPTIONS:", {
//                 isProduction,
//                 secure: isProduction,
//                 sameSite: isProduction
//                     ? "none"
//                     : "lax",
//             });
//         }

//         // --------------------------------------------------
//         // ALWAYS KEEP THE GUEST ID
//         // --------------------------------------------------

//         req.guestId = guestId;

//         console.log(
//             "FINAL CUSTOMER:",
//             req.user?._id || null
//         );

//         console.log(
//             "FINAL GUEST ID:",
//             req.guestId
//         );

//         console.log("======================================");

//         next();
//     } catch (error) {
//         console.error(
//             "GUEST MIDDLEWARE ERROR:",
//             error
//         );

//         next(error);
//     }
// };

// module.exports = guestMiddleware;
//-------------------------------------------------
// const crypto = require("crypto");

// const guestMiddleware = (req, res, next) => {
//     try {
//         console.log("======================================");
//         console.log("CART IDENTITY");

//         console.log(
//             "CUSTOMER:",
//             req.user?._id || null
//         );

//         // --------------------------------------------------
//         // 1. Check cookie
//         // --------------------------------------------------

//         let guestId = req.cookies?.guestId;

//         console.log(
//             "COOKIE guestId:",
//             guestId || "NONE"
//         );

//         // --------------------------------------------------
//         // 2. Check frontend header
//         // --------------------------------------------------

//         const headerGuestId =
//             req.headers["x-guest-id"];

//         console.log(
//             "HEADER guestId:",
//             headerGuestId || "NONE"
//         );

//         // --------------------------------------------------
//         // 3. Prefer cookie, otherwise header
//         // --------------------------------------------------

//         if (!guestId && headerGuestId) {
//             guestId = headerGuestId;

//             console.log(
//                 "USING HEADER GUEST ID:",
//                 guestId
//             );
//         }

//         // --------------------------------------------------
//         // 4. Create guest ID if completely new visitor
//         // --------------------------------------------------

//         if (!guestId) {
//             guestId =
//                 "serina_guest_" +
//                 crypto.randomUUID();

//             console.log(
//                 "NEW GUEST ID CREATED:",
//                 guestId
//             );
//         }

//         // --------------------------------------------------
//         // 5. Always refresh/set cookie
//         // --------------------------------------------------

//         const isProduction =
//             process.env.NODE_ENV === "production";

//         res.cookie(
//             "guestId",
//             guestId,
//             {
//                 httpOnly: true,
//                 maxAge:
//                     1000 *
//                     60 *
//                     60 *
//                     24 *
//                     30,

//                 path: "/",

//                 sameSite: isProduction
//                     ? "none"
//                     : "lax",

//                 secure: isProduction,
//             }
//         );

//         // --------------------------------------------------
//         // 6. Store guest ID on request
//         // --------------------------------------------------

//         req.guestId = guestId;

//         console.log(
//             "FINAL req.guestId:",
//             req.guestId
//         );

//         console.log(
//             "======================================"
//         );

//         next();

//     } catch (error) {
//         console.error(
//             "GUEST MIDDLEWARE ERROR:",
//             error
//         );

//         next(error);
//     }
// };

// module.exports = guestMiddleware;
//--------------------------------------------------------
// const crypto = require("crypto");

// const guestMiddleware = (req, res, next) => {
//     console.log("======================================");
//     console.log("CART IDENTITY");

//     console.log(
//         "CUSTOMER:",
//         req.user?._id || null
//     );

//     // ==================================================
//     // GET GUEST ID
//     // ==================================================

//     // Prefer frontend header
//     let guestId =
//         req.headers["x-guest-id"] ||
//         req.cookies?.guestId;

//     console.log(
//         "X-GUEST-ID:",
//         req.headers["x-guest-id"] || null
//     );

//     console.log(
//         "COOKIE guestId:",
//         req.cookies?.guestId || null
//     );

//     // ==================================================
//     // CREATE NEW GUEST ID
//     // ==================================================

//     if (!guestId) {
//         guestId =
//             "serina_guest_" +
//             crypto.randomUUID();

//         console.log(
//             "NEW GUEST ID:",
//             guestId
//         );
//     }

//     // ==================================================
//     // SAVE TO REQUEST
//     // ==================================================

//     req.guestId = guestId;

//     // ==================================================
//     // ALSO SET COOKIE
//     // ==================================================

//     const isProduction =
//         process.env.NODE_ENV === "production";

//     res.cookie(
//         "guestId",
//         guestId,
//         {
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
//         }
//     );

//     console.log(
//         "FINAL req.guestId:",
//         req.guestId
//     );

//     console.log("======================================");

//     next();
// };

// module.exports = guestMiddleware;


//---------------------------
const crypto = require("crypto");

const guestMiddleware = (req, res, next) => {
    console.log("======================================");
    console.log("CART IDENTITY");

    console.log(
        "CUSTOMER:",
        req.user?._id || null
    );

    let guestId =
        req.headers["x-guest-id"] ||
        req.cookies?.guestId;

    console.log(
        "X-GUEST-ID:",
        req.headers["x-guest-id"] || null
    );

    console.log(
        "COOKIE guestId:",
        req.cookies?.guestId || null
    );

    if (!guestId) {
        guestId =
            "serina_guest_" +
            crypto.randomUUID();

        console.log(
            "NEW GUEST ID:",
            guestId
        );
    }

    req.guestId = guestId;

    const isProduction =
        process.env.NODE_ENV === "production";

    res.cookie(
        "guestId",
        guestId,
        {
            httpOnly: true,
            maxAge:
                1000 *
                60 *
                60 *
                24 *
                30,
            path: "/",

            sameSite: isProduction
                ? "none"
                : "lax",

            secure: isProduction,
        }
    );

    console.log(
        "FINAL req.guestId:",
        req.guestId
    );

    console.log("======================================");

    next();
};

module.exports = guestMiddleware;