const Cart = require("../models/Cart");
const Order = require("../models/Order");


const createOrder = async(customerId)=>{

    const cart = await Cart.findOne({
        customer: customerId
    }).populate("items.product");

console.log(JSON.stringify(cart, null, 2));


    if(!cart || cart.items.length===0){
        throw new Error("Cart is empty");
    }


    const order = await Order.create({

        orderNumber:
        "SERINA-" + Date.now(),


        customer: customerId,


        items: cart.items.map(item=>({

            product:item.product._id,

            productName:item.product.productName,

            quantity:item.quantity,

            price:item.product.sellingPrice,

            image:item.product.images[0].url

        })),


        totalAmount:cart.totalAmount

    });


    return order;

};


module.exports={
    createOrder
};