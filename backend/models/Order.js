// const orderSchema = new mongoose.Schema(
// {
//  orderNumber:{
//    type:String,
//    unique:true
//  },

//  customer:{
//    type:mongoose.Schema.Types.ObjectId,
//    ref:"User",
//    required:true
//  },


// items:[
//  {
//    product:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"Product"
//    },

//    name:String,

//    quantity:Number,

//    price:Number,

//    image:String
//  }
//  ],


// shippingAddress:{
//  name:String,
//  phone:String,
//  addressLine:String,
//  city:String,
//  state:String,
//  pincode:String
// },


// totalAmount:{
//  type:Number,
//  required:true
// },


// paymentStatus:{
//  type:String,
//  enum:[
//   "pending",
//   "paid",
//   "failed"
//  ],
//  default:"pending"
// },


// orderStatus:{
//  type:String,
//  enum:[
//  "placed",
//  "confirmed",
//  "shipped",
//  "delivered",
//  "cancelled"
//  ],
//  default:"placed"
// },


// razorpayOrderId:String,

// razorpayPaymentId:String


// },
// {
//  timestamps:true
// }
// );


// module.exports = mongoose.model("Order",orderSchema);

const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema(
{
    orderNumber:{
        type:String,
        unique:true,
        required:true
    },

    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },


    items:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product",
                required:true
            },

            productName:{
                type:String,
                required:true
            },

            quantity:{
                type:Number,
                required:true
            },

            price:{
                type:Number,
                required:true
            },

            image:{
                type:String
            }
        }
    ],


    shippingAddress:{
        name:String,
        phone:String,
        addressLine:String,
        city:String,
        state:String,
        pincode:String
    },


    totalAmount:{
        type:Number,
        required:true
    },


    paymentStatus:{
        type:String,
        enum:[
            "pending",
            "paid",
            "failed"
        ],
        default:"pending"
    },


    orderStatus:{
        type:String,
        enum:[
            "placed",
            "confirmed",
            "shipped",
            "delivered",
            "cancelled"
        ],
        default:"placed"
    },


    razorpayOrderId:{
        type:String
    },


    razorpayPaymentId:{
        type:String
    },


    razorpaySignature:{
        type:String
    }

},
{
    timestamps:true
});


module.exports = mongoose.model(
    "Order",
    orderSchema
);