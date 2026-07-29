// const Product = require("../models/Product");

// // ===============================
// // Create Product
// // ===============================
// const createProduct = async (productData) => {
//   return await Product.create(productData);
// };

// // ===============================
// // Get All Products
// // ===============================
// const getProducts = async () => {
//   return await Product.find()
//     .populate("category", "name")
//     .sort({ createdAt: -1 });
// };

// // ===============================
// // Get Product By ID
// // ===============================
// const getProductById = async (id) => {
//   return await Product.findById(id).populate("category", "name");
// };

// // ===============================
// // Update Product
// // ===============================
// const updateProduct = async (id, productData) => {
//   return await Product.findByIdAndUpdate(id, productData, {
//     new: true,
//     runValidators: true,
//   });
// };

// // ===============================
// // Delete Product
// // ===============================
// const deleteProduct = async (id) => {
//   return await Product.findByIdAndDelete(id);
// };

// // ===============================
// // Home Collections (Latest 6 Products)
// // ===============================
// // Home Collections (Latest 6 Products)
// const getHomeCollections = async () => {
//   return await Product.find({
//     isActive: true,
//   })
//     .populate("category", "name")
//     .sort({ createdAt: -1 })
//     .limit(6);
// };

// // ===============================
// // Exports
// // ===============================
// module.exports = {
//   createProduct,
//   getProducts,
//   getProductById,
//   updateProduct,
//   deleteProduct,
//   getHomeCollections,
// };
//---------------------------------------------------------------------------------------------------------------------

// const Product = require("../models/Product");


// // ===============================
// // Create Product
// // ===============================
// const createProduct = async (productData) => {
//     return await Product.create(productData);
// };


// // ===============================
// // Get All Products
// // ===============================
// const getProducts = async () => {
//     return await Product.find()
//         .populate("category", "categoryName")
//         .sort({ createdAt: -1 });
// };


// // ===============================
// // Get Product By ID
// // ===============================
// const getProductById = async (id) => {
//     return await Product.findById(id)
//         .populate("category", "categoryName");
// };


// // ===============================
// // Update Product
// // ===============================
// const updateProduct = async (id, productData) => {

//     return await Product.findByIdAndUpdate(
//         id,
//         productData,
//         {
//             new:true,
//             runValidators:true
//         }
//     );
// };


// // ===============================
// // Delete Product
// // ===============================
// const deleteProduct = async (id) => {

//     return await Product.findByIdAndDelete(id);

// };


// // ===============================
// // Home Collections
// // ===============================
// const getHomeCollections = async () => {

//     return await Product.find({
//         isActive:true
//     })
//     .populate("category","categoryName")
//     .sort({
//         createdAt:-1
//     })
//     .limit(6);

// };


// // ===============================
// // Featured Products
// // ===============================
// const getFeaturedProducts = async () => {

//     return await Product.find({
//         isActive:true
//     })
//     .populate("category","categoryName")
//     .sort({
//         sellingPrice:-1
//     })
//     .limit(6);

// };



// module.exports = {

//     createProduct,
//     getProducts,
//     getProductById,
//     updateProduct,
//     deleteProduct,
//     getHomeCollections,
//     getFeaturedProducts

// };
//------------------------------------------------------------------------------

const Product = require("../models/Product");


// ===============================
// Create Product
// ===============================

const createProduct = async (productData) => {

    return await Product.create(productData);

};




// ===============================
// Get All Products
// ===============================

const getProducts = async () => {

    return await Product.find()

        .populate(
            "category",
            "categoryName"
        )

        .populate(
            "productVariants.attributes.variantType",
            "name"
        )

        .sort({
            createdAt:-1
        });

};




// ===============================
// Get Product By ID
// ===============================

const getProductById = async (id) => {

    return await Product.findById(id)

        .populate(
            "category",
            "categoryName"
        )

        .populate(
            "productVariants.attributes.variantType",
            "name"
        );

};




// ===============================
// Update Product
// ===============================

const updateProduct = async (id, productData) => {

    return await Product.findByIdAndUpdate(

        id,

        {
            $set: productData
        },

        {
            new:true,
            runValidators:true
        }

    )

    .populate(
        "category",
        "categoryName"
    )

    .populate(
        "productVariants.attributes.variantType",
        "name"
    );

};




// ===============================
// Delete Product
// ===============================

const deleteProduct = async (id) => {

    return await Product.findByIdAndDelete(id);

};




// ===============================
// Home Collections
// ===============================

const getHomeCollections = async () => {

    return await Product.find({
        isActive:true
    })

    .populate(
        "category",
        "categoryName"
    )

    .populate(
        "productVariants.attributes.variantType",
        "name"
    )

    .sort({
        createdAt:-1
    })

    .limit(6);

};




// ===============================
// Featured Products
// ===============================

const getFeaturedProducts = async () => {

    return await Product.find({

        isActive:true,

        isFeatured:true

    })

    .populate(
        "category",
        "categoryName"
    )

    .populate(
        "productVariants.attributes.variantType",
        "name"
    )

    .sort({
        createdAt:-1
    })

    .limit(6);

};



module.exports = {

    createProduct,

    getProducts,

    getProductById,

    updateProduct,

    deleteProduct,

    getHomeCollections,

    getFeaturedProducts

};