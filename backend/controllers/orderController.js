const Cart = require("../models/Cart");
const Order = require("../models/Order");


const createOrder = async(req,res)=>{

    try{

        const customerId = req.user._id;


        const cart = await Cart.findOne({
            customer:customerId
        }).populate("items.product");


        if(!cart || cart.items.length===0){
            return res.status(400).json({
                success:false,
                message:"Cart is empty"
            });
        }



        const order = await Order.create({

            orderNumber:
            "SERINA-"+Date.now(),


            customer:customerId,


            items:cart.items.map(item=>({

                product:item.product._id,

                productName:item.product.productName,

                quantity:item.quantity,

                price:item.product.sellingPrice,

                image:item.product.images[0].url

            })),


            totalAmount:cart.totalAmount

        });



        res.status(201).json({
            success:true,
            order
        });


    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



module.exports={
    createOrder
};