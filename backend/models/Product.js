// const mongoose = require("mongoose");


// const productSchema = new mongoose.Schema(
// {

//     productCode:{
//         type:String,
//         unique:true
//     },


//     productName:{
//         type:String,
//         required:true
//     },


//     sku:{
//         type:String,
//         unique:true
//     },


//     barcode:{
//         type:String
//     },


//     category:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Category",
       
//        default:null
//     },


//     brand:{
//         type:String,
//         default:""
//     },


//     unit:{
//         type:String,
//         enum:[
//             "piece",
//             "kg",
//             "meter"
//         ],
//         default:"piece"
//     },


//     purchasePrice:{
//         type:Number,
//         required:true
//     },


//     sellingPrice:{
//         type:Number,
//         required:true
//     },


//     gst:{
//         type:Number,
//         default:0
//     },


//     discount:{
//         type:Number,
//         default:0
//     },


//     initialStock:{
//         type:Number,
//         default:0
//     },


//     reorderLevel:{
//         type:Number,
//         default:5
//     },


//     image:{
//         type:String
//     },


//     isActive:{
//         type:Boolean,
//         default:true
//     }


// },
// {
//     timestamps:true
// });


// module.exports = mongoose.model(
//     "Product",
//     productSchema
// );

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productCode: {
      type: String,
      unique: true,
      trim: true,
      uppercase: true,
    },

    productName: {
      type: String,
      required: true,
      trim: true,
    },

    sku: {
      type: String,
      unique: true,
      trim: true,
      uppercase: true,
    },

    barcode: {
      type: String,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },

    brand: {
      type: String,
      trim: true,
      default: null,
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    unit: {
      type: String,
      enum: [
        "piece",
        "kg",
        "meter",
      ],
      default: "piece",
    },

    purchasePrice: {
      type: Number,
      required: true,
      min: 0,
    },

    sellingPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    gst: {
      type: Number,
      default: 0,
      min: 0,
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
    },

    initialStock: {
      type: Number,
      default: 0,
      min: 0,
    },

    reorderLevel: {
      type: Number,
      default: 5,
      min: 0,
    },

    images: {
      type: [
        {
          url: {
            type: String,
            required: true,
          },

          publicId: {
            type: String,
            required: true,
          },
        },
      ],

      validate: {
        validator: function (images) {
          return images.length >= 1 && images.length <= 5;
        },
        message: "Product must have between 1 and 5 images.",
      },
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);