
// const mongoose = require("mongoose");
// const cartItemSchema = new mongoose.Schema(
//     {
//         product: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Product",
//             required: true,
//         },

//         // Selected product variant
//         variant: {
//             type: mongoose.Schema.Types.ObjectId,
//             default: null,
//         },

//         quantity: {
//             type: Number,
//             default: 1,
//             min: 1,
//         },
//     },
//     {
//         _id: false,
//     }
// );

// const cartSchema = new mongoose.Schema(
//     {
//         // Logged-in customer
//         customer: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "User",
//         },

//         // Guest visitor
//         guestId: {
//             type: String,
//         },

//         items: [cartItemSchema],
//     },
//     {
//         timestamps: true,
//     }
// );

// // Cart must belong to either a customer OR a guest
// cartSchema.pre("validate", function () {
//     if (!this.customer && !this.guestId) {
//         throw new Error("Cart must belong to customer or guest");
//     }
// });

// // One cart per customer
// cartSchema.index(
//     { customer: 1 },
//     {
//         unique: true,
//         sparse: true,
//     }
// );

// // One cart per guest
// cartSchema.index(
//     { guestId: 1 },
//     {
//         unique: true,
//         sparse: true,
//     }
// );

// module.exports = mongoose.model("Cart", cartSchema);
//--------------------------------------------------------------------------------------------

const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },

        // Selected product variant
        variant: {
            type: mongoose.Schema.Types.ObjectId,
            default: null,
        },

        quantity: {
            type: Number,
            default: 1,
            min: 1,
        },
    },
    {
         _id: true,
    }
);

const cartSchema = new mongoose.Schema(
    {
        // Logged-in customer
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        // Guest visitor
        guestId: {
            type: String,
        },

        items: [cartItemSchema],
    },
    {
        timestamps: true,
    }
);

// Cart must belong to either a customer OR a guest
cartSchema.pre("validate", function () {
    if (!this.customer && !this.guestId) {
        throw new Error(
            "Cart must belong to customer or guest"
        );
    }
});

// One cart per customer
cartSchema.index(
    { customer: 1 },
    {
        unique: true,
        sparse: true,
    }
);

// One cart per guest
cartSchema.index(
    { guestId: 1 },
    {
        unique: true,
        sparse: true,
    }
);

module.exports = mongoose.model(
    "Cart",
    cartSchema
);