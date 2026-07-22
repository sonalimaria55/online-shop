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

const crypto = require("crypto");


const guestMiddleware = (req,res,next)=>{


    if(req.user){

        req.guestId = null;

        return next();

    }


    let guestId = req.cookies.guestId;


    if(!guestId){

        guestId =
        "serina_guest_" + crypto.randomUUID();


        res.cookie(
            "guestId",
            guestId,
            {
                httpOnly:true,
                maxAge:1000 * 60 * 60 * 24 * 30,
                sameSite:"lax"
            }
        );

    }


    req.guestId = guestId;


    next();

};


module.exports = guestMiddleware;