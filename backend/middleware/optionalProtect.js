const jwt = require("jsonwebtoken");
const User = require("../models/User");


const optionalProtect = async (req,res,next)=>{

    try{

        let token;


        if(
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ){

            token = req.headers.authorization.split(" ")[1];

        }


        // Guest visitor
        if(!token){

            return next();

        }



        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );



        req.user = await User.findById(
            decoded.id
        ).select("-password");



        next();



    }catch(error){

        // Invalid token also continue as guest
        next();

    }

};



module.exports = optionalProtect;