// const mongoose = require("mongoose");

// const variantSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//             trim: true,
//             unique: true,
//         },

//         values: [
//             {
//                 type: String,
//                 trim: true,
//             }
//         ],

//         isActive: {
//             type: Boolean,
//             default: true,
//         },
//     },
//     {
//         timestamps: true,
//     });

// module.exports = mongoose.model("Variant", variantSchema);

//---------------------------------------------------------------------------


// const mongoose = require("mongoose");

// const variantSchema = new mongoose.Schema(
// {
//     name:{
//         type:String,
//         required:true,
//         trim:true,
//         unique:true,
//     },


//     // predefined values
//     values:[
//         {
//             type:String,
//             trim:true,
//         }
//     ],


//     // Super Admin custom label
//     customDisplayName:{
//         type:String,
//         trim:true,
//         default:"",
//     },


//     // Super Admin custom values
//     customDisplayValues:[
//         {
//             type:String,
//             trim:true,
//         }
//     ],


//     isActive:{
//         type:Boolean,
//         default:true,
//     }

// },
// {
//     timestamps:true,
// });


// module.exports = mongoose.model(
//     "Variant",
//     variantSchema
// );

const mongoose = require("mongoose");
const variantSchema = new mongoose.Schema(
{
    displayName:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },

    inputType:{
        type:String,
        enum:["checkbox","manual"],
        default:"checkbox",
    },

    values:[
        {
            type:String,
            trim:true,
        }
    ],

    isActive:{
        type:Boolean,
        default:true,
    }

},
{
    timestamps:true,
});

module.exports = mongoose.model("Variant", variantSchema);