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
//   { _id: false }
// );

// const cartSchema = new mongoose.Schema(
//   {
//     customer: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//       unique: true,
//     },

//     items: [cartItemSchema],
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("Cart", cartSchema);

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
//     _id:false
//   }
// );



// const cartSchema = new mongoose.Schema(
//   {

//     // Logged-in customer
//     customer:{
//       type:mongoose.Schema.Types.ObjectId,
//       ref:"User",
//       default:null,
//     },


//     // Guest visitor
//     guestId:{
//       type:String,
//       default:null,
//     },


//     items:[
//       cartItemSchema
//     ],

//   },
//   {
//     timestamps:true
//   }
// );


// // One customer = one cart
// cartSchema.index(
//   {customer:1},
//   {
//     unique:true,
//     sparse:true
//   }
// );


// // One guest browser = one cart
// cartSchema.index(
//   {guestId:1},
//   {
//     unique:true,
//     sparse:true
//   }
// );



// module.exports = mongoose.model("Cart", cartSchema);


const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
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
      default: null,
    },

    // Guest visitor
    guestId: {
      type: String,
      default: null,
    },

    items: [cartItemSchema],
  },
  {
    timestamps: true,
  }
);

// Ensure cart belongs to either customer or guest
cartSchema.pre("validate", function (next) {
  if (!this.customer && !this.guestId) {
    return next(new Error("Cart must belong to a customer or a guest."));
  }

  next();
});

// One customer = one cart
cartSchema.index(
  { customer: 1 },
  {
    unique: true,
    sparse: true,
  }
);

// One guest = one cart
cartSchema.index(
  { guestId: 1 },
  {
    unique: true,
    sparse: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);