// const mongoose = require("mongoose");

// const bannerSchema = new mongoose.Schema(
//     {
//         title: {
//             type: String,
//             required: true,
//             trim: true,
//         },

//         subtitle: {
//             type: String,
//             trim: true,
//         },

//         description: {
//             type: String,
//             trim: true,
//         },

//         image: {
//             type: String,
//             required: true,
//         },

//         publicId: {
//             type: String,
//             required: true,
//         },

//         buttonText: {
//             type: String,
//             trim: true,
//             default: "",
//         },

//         buttonLink: {
//             type: String,
//             trim: true,
//             default: "",
//         },

//         bannerType: {
//             type: String,
//             enum: ["carousel", "banner"],
//             required: true,
//         },
//         placement: {
//             type: String,
//             enum: [
//                 "hero",
//                 "after_categories",
//                 "after_new_arrivals",
//                 "after_best_sellers",
//                 "before_footer",
//             ],
//             required: true,
//         },

//         visibility: {
//             type: String,
//             enum: ["everyone", "registered", "hidden"],
//             default: "hidden",
//         },

//         displayOrder: {
//             type: Number,
//             default: 1,
//         },

//         startDate: {
//             type: Date,
//         },

//         endDate: {
//             type: Date,
//         },

//         createdBy: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "User",
//              required:false,
//         },
//         placement: {
//             type: String,
//             enum: [
//                 "hero",
//                 "after_categories",
//                 "after_new_arrivals",
//                 "before_footer"
//             ]
//         }





//     },
//     {
//         timestamps: true,
//     }
// );

// module.exports = mongoose.model("Banner", bannerSchema);

const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        subtitle: {
            type: String,
            trim: true,
        },

        description: {
            type: String,
            trim: true,
        },

        image: {
            type: String,
            required: true,
        },

        publicId: {
            type: String,
            required: true,
        },

        buttonText: {
            type: String,
            trim: true,
            default: "",
        },

        buttonLink: {
            type: String,
            trim: true,
            default: "",
        },

        bannerType: {
            type: String,
            enum: [
                "carousel",
                "banner",
                
            ],
            required: true,
        },

        placement: {
            type: String,
            enum: [
                "hero",
                "after_categories",
                "after_new_arrivals",
                "after_best_sellers",
                "before_footer"
            ],
            required: true,
        },

        visibility: {
            type: String,
            enum: [
                "everyone",
                "registered",
                "hidden"
            ],
            default: "hidden",
        },

        displayOrder: {
            type: Number,
            default: 1,
        },

        startDate: {
            type: Date,
        },

        endDate: {
            type: Date,
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Banner", bannerSchema);