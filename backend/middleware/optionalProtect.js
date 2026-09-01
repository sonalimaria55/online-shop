// const jwt = require("jsonwebtoken");
// const User = require("../models/User");


// const optionalProtect = async (req,res,next)=>{

//     try{

//         let token;


//         if(
//             req.headers.authorization &&
//             req.headers.authorization.startsWith("Bearer")
//         ){

//             token = req.headers.authorization.split(" ")[1];

//         }


//         // Guest visitor
//         if(!token){

//             return next();

//         }



//         const decoded = jwt.verify(
//             token,
//             process.env.JWT_SECRET
//         );



//         req.user = await User.findById(
//             decoded.id
//         ).select("-password");



//         next();



//     }catch(error){

//         // Invalid token also continue as guest
//         next();

//     }

// };



// module.exports = optionalProtect;
//--------------------------------------------------

// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const optionalProtect = async (req, res, next) => {
//     try {
//         const token =
//             req.cookies?.token ||
//             req.headers.authorization?.split(" ")[1];

//         // No token = guest
//         if (!token) {
//             req.user = null;
//             return next();
//         }

//         const decoded = jwt.verify(
//             token,
//             process.env.JWT_SECRET
//         );

//         const user = await User.findById(
//             decoded.id || decoded._id
//         ).select("-password");

//         if (!user) {
//             req.user = null;
//             return next();
//         }

//         req.user = user;

//         next();
//     } catch (error) {
//         // Invalid/expired token should NOT block guest shopping
//         console.log(
//             "Optional auth:",
//             error.message
//         );

//         req.user = null;
//         next();
//     }
// };

// module.exports = optionalProtect;
//---------------------------------------------------
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const optionalProtect = async (req, res, next) => {
    try {
        let token = null;

        // ---------------------------------------------
        // COOKIE TOKEN
        // ---------------------------------------------

        if (req.cookies?.token) {
            token = req.cookies.token;
        }

        // ---------------------------------------------
        // AUTHORIZATION TOKEN
        // ---------------------------------------------

        if (
            !token &&
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer ")
        ) {
            token =
                req.headers.authorization.split(" ")[1];
        }

        // ---------------------------------------------
        // GUEST
        // ---------------------------------------------

        if (!token) {
            req.user = null;

            console.log(
                "OPTIONAL AUTH: GUEST"
            );

            return next();
        }

        // ---------------------------------------------
        // VERIFY TOKEN
        // ---------------------------------------------

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user = await User.findById(
            decoded.id || decoded._id
        ).select("-password");

        if (!user) {
            req.user = null;

            console.log(
                "OPTIONAL AUTH: USER NOT FOUND"
            );

            return next();
        }

        req.user = user;

        console.log(
            "OPTIONAL AUTH: CUSTOMER",
            user._id.toString()
        );

        next();

    } catch (error) {

        console.log(
            "OPTIONAL AUTH ERROR:",
            error.message
        );

        // Invalid token should still behave as guest
        req.user = null;

        next();
    }
};

module.exports = optionalProtect;