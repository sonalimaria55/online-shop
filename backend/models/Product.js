// const mongoose = require("mongoose");

// const productVariantSchema = new mongoose.Schema(
// {
//     variantType:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Variant",
//         required:true,
//     },


//    // For custom variants (Capacity, Length, Weight etc.)
//     variantName:{
//         type:String,
//         trim:true,
//         default:"",
//     },




//     value:{
//         type:String,
//         required:true,
//         trim:true,
//     },


//     color:{
//         type:String,
//         trim:true,
//         default:"",
//     },


//     sku:{
//         type:String,
//         trim:true,
//         default:"",
//     },


//     barcode:{
//         type:String,
//         trim:true,
//         default:"",
//     },


//     stock:{
//         type:Number,
//         default:0,
//         min:0,
//     },


//     sellingPrice:{
//         type:Number,
//         default:null,
//         min:0,
//     }

// },
// {
//     _id:false,
// });



// const imageSchema = new mongoose.Schema(
// {
//     url:{
//         type:String,
//         required:true,
//     },


//     publicId:{
//         type:String,
//         required:true,
//     }

// },
// {
//     _id:false,
// });



// const productSchema = new mongoose.Schema(
// {

//     productCode:{
//         type:String,
//         unique:true,
//         trim:true,
//     },


//     productName:{
//         type:String,
//         required:true,
//         trim:true,
//     },


//     category:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Category",
//         default:null,
//     },


//     brand:{
//         type:String,
//         trim:true,
//         default:"",
//     },


//     description:{
//         type:String,
//         trim:true,
//         default:"",
//     },


//     purchasePrice:{
//         type:Number,
//         required:true,
//         min:0,
//     },


//     sellingPrice:{
//         type:Number,
//         required:true,
//         min:0,
//     },


//     gst:{
//         type:Number,
//         default:0,
//         min:0,
//     },


//     discount:{
//         type:Number,
//         default:0,
//         min:0,
//     },


//     reorderLevel:{
//         type:Number,
//         default:5,
//         min:0,
//     },


//     productVariants:{
//         type:[productVariantSchema],
//         default:[],
//     },


//     images:{
//         type:[imageSchema],

//         validate:{
//             validator:function(images){

//                 return images.length >= 1 && images.length <= 5;

//             },

//             message:"Product must have between 1 and 5 images."
//         }
//     },


//     isFeatured:{
//         type:Boolean,
//         default:false,
//     },


//     isActive:{
//         type:Boolean,
//         default:true,
//     }

// },
// {
//     timestamps:true,
// });


// module.exports = mongoose.model(
//     "Product",
//     productSchema
// );

//---------------------------------------------------------------------------------------------------------------

const mongoose = require("mongoose");



// Variant Attribute

const variantAttributeSchema = new mongoose.Schema(
{
    variantType:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Variant",
        required:true,
    },

    value:{
        type:String,
        required:true,
        trim:true,
    },

    // Used only for Color
    colorCode:{
        type:String,
        trim:true,
        default:"",
    }

},
{
    _id:false,
});


// =============================
// Product Variant Combination
// =============================
const productVariantSchema = new mongoose.Schema(
{
    attributes:{
        type:[variantAttributeSchema],
        default:[],
    },

    sku:{
        type:String,
        trim:true,
        default:"",
    },

    barcode:{
        type:String,
        trim:true,
        default:"",
    },

    stock:{
        type:Number,
        default:0,
        min:0,
    },

    sellingPrice:{
        type:Number,
        default:null,
        min:0,
    }

});


// =============================
// Images
// =============================
const imageSchema = new mongoose.Schema(
{
    url:{
        type:String,
        required:true,
    },

    publicId:{
        type:String,
        required:true,
    }

},
{
    _id:false,
});


// =============================
// Product
// =============================
const productSchema = new mongoose.Schema(
{

    productCode:{
        type:String,
        unique:true,
        trim:true,
    },

    productName:{
        type:String,
        required:true,
        trim:true,
    },

    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        default:null,
    },

    brand:{
        type:String,
        trim:true,
        default:"",
    },

    description:{
        type:String,
        trim:true,
        default:"",
    },

    purchasePrice:{
        type:Number,
        required:true,
        min:0,
    },

    sellingPrice:{
        type:Number,
        required:true,
        min:0,
    },

    gst:{
        type:Number,
        default:0,
        min:0,
    },

    discount:{
        type:Number,
        default:0,
        min:0,
    },

    reorderLevel:{
        type:Number,
        default:5,
        min:0,
    },

    // All generated combinations
    productVariants:{
        type:[productVariantSchema],
        default:[],
    },

    images:{
        type:[imageSchema],

        validate:{
            validator:function(images){

                return images.length >= 1 && images.length <= 5;

            },

            message:"Product must have between 1 and 5 images."
        }

    },

    isFeatured:{
        type:Boolean,
        default:false,
    },

    isActive:{
        type:Boolean,
        default:true,
    }

},
{
    timestamps:true,
});

module.exports = mongoose.model(
    "Product",
    productSchema
);

