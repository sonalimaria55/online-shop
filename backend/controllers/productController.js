// const Product = require("../models/Product");

// // ==========================
// // Create Product
// // ==========================
// const createProduct = async (req, res) => {
//   try {

//     const productData = {
//       ...req.body,
//       image: req.file ? req.file.path : null,
//     };


//     const product = await Product.create(productData);


//     res.status(201).json({
//       success: true,
//       message: "Product created successfully",
//       product,
//     });


//   } catch (error) {

//     res.status(500).json({
//       success:false,
//       message:error.message,
//     });

//   }
// };

// // ==========================
// // Get All Products
// // ==========================
// const getProducts = async (req, res) => {
//   try {
//   const products = await Product.find()
//   .populate("category", "categoryName")
//   .sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: products.length,
//       products,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ==========================
// // Get Product By ID
// // ==========================
// const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id)
//       .populate("category", "categoryName");

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       product,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ==========================
// // Update Product
// // ==========================
// const updateProduct = async (req, res) => {
//   try {

//     const updateData = {
//       ...req.body,
//     };


//     if (req.file) {
//       updateData.image = req.file.path;
//     }


//     const product = await Product.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       {
//         new: true,
//         runValidators: true,
//       }
//     );


//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }


//     res.status(200).json({
//       success: true,
//       message: "Product updated successfully",
//       product,
//     });


//   } catch (error) {

//     res.status(500).json({
//       success:false,
//       message:error.message,
//     });

//   }
// };

// // ==========================
// // Delete Product
// // ==========================
// const deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     await product.deleteOne();

//     res.status(200).json({
//       success: true,
//       message: "Product deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ==========================
// // Home Collections (Latest 6 Products)
// // ==========================
// const getHomeCollections = async (req, res) => {
//   try {
//     const products = await Product.find({
//       isActive: true,
//     })
//       .populate("category", "categoryName")
//       .sort({ createdAt: -1 })
//       .limit(6);

//     res.status(200).json({
//       success: true,
//       data: products,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
// // ==========================
// // Featured Products (Top 6)
// // ==========================
// const getFeaturedProducts = async (req, res) => {
//   try {
//     const products = await Product.find({
//       isActive: true,
//     })
// .populate("category", "categoryName")
//       .sort({
//         sellingPrice: -1,
//       })
//       .limit(6);

//     res.status(200).json({
//       success: true,
//       data: products,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
// module.exports = {
//   createProduct,
//   getProducts,
//   getProductById,
//   updateProduct,
//   deleteProduct,
//   getHomeCollections,
//    getFeaturedProducts,

// };


//-----------------------------------------------------------------------------------------------------------------------------------

// const productService = require("../services/productService");


// // ===============================
// // Create Product
// // ===============================
// const createProduct = async(req,res)=>{

//     try{


//         const images = req.files.map(file=>({

//             url:file.path,
//             publicId:file.filename

//         }));


//         const productData={

//             ...req.body,
//             images

//         };


//         const product =
//         await productService.createProduct(productData);



//         res.status(201).json({

//             success:true,
//             message:"Product created successfully",
//             product

//         });


//     }
//     catch(error){

//         res.status(500).json({

//             success:false,
//             message:error.message

//         });

//     }

// };



// // ===============================
// // Get Products
// // ===============================
// const getProducts = async(req,res)=>{

//     try{


//         const products =
//         await productService.getProducts();


//         res.status(200).json({

//             success:true,
//             count:products.length,
//             products

//         });


//     }
//     catch(error){

//         res.status(500).json({

//             success:false,
//             message:error.message

//         });

//     }

// };



// // ===============================
// // Get Product By ID
// // ===============================
// const getProductById=async(req,res)=>{


//     try{


//         const product =
//         await productService.getProductById(req.params.id);



//         if(!product){

//             return res.status(404).json({

//                 success:false,
//                 message:"Product not found"

//             });

//         }



//         res.status(200).json({

//             success:true,
//             product

//         });



//     }
//     catch(error){

//         res.status(500).json({

//             success:false,
//             message:error.message

//         });

//     }

// };




// // ===============================
// // Update Product
// // ===============================
// const updateProduct=async(req,res)=>{

//     try{


//         const updateData={
//             ...req.body
//         };



//         if(req.files && req.files.length>0){


//             updateData.images =
//             req.files.map(file=>({

//                 url:file.path,
//                 publicId:file.filename

//             }));

//         }



//         const product =
//         await productService.updateProduct(
//             req.params.id,
//             updateData
//         );



//         if(!product){

//             return res.status(404).json({

//                 success:false,
//                 message:"Product not found"

//             });

//         }



//         res.status(200).json({

//             success:true,
//             message:"Product updated successfully",
//             product

//         });



//     }
//     catch(error){

//         res.status(500).json({

//             success:false,
//             message:error.message

//         });

//     }

// };




// // ===============================
// // Delete Product
// // ===============================
// const deleteProduct=async(req,res)=>{

//     try{


//         const product =
//         await productService.deleteProduct(req.params.id);



//         if(!product){

//             return res.status(404).json({

//                 success:false,
//                 message:"Product not found"

//             });

//         }



//         res.status(200).json({

//             success:true,
//             message:"Product deleted successfully"

//         });



//     }
//     catch(error){

//         res.status(500).json({

//             success:false,
//             message:error.message

//         });

//     }

// };




// // ===============================
// // Home Collections
// // ===============================
// const getHomeCollections=async(req,res)=>{


//     try{

//         const products =
//         await productService.getHomeCollections();


//         res.status(200).json({

//             success:true,
//             data:products

//         });


//     }
//     catch(error){

//         res.status(500).json({

//             success:false,
//             message:error.message

//         });

//     }

// };



// // ===============================
// // Featured Products
// // ===============================
// const getFeaturedProducts=async(req,res)=>{


//     try{

//         const products =
//         await productService.getFeaturedProducts();


//         res.status(200).json({

//             success:true,
//             data:products

//         });


//     }
//     catch(error){

//         res.status(500).json({

//             success:false,
//             message:error.message

//         });

//     }

// };



// module.exports={

//     createProduct,
//     getProducts,
//     getProductById,
//     updateProduct,
//     deleteProduct,
//     getHomeCollections,
//     getFeaturedProducts

// };

//--------------------------------------------------------------------------------------------------------------

// const productService = require("../services/productService");

// // ===============================
// // Create Product
// // ===============================
// const createProduct = async (req, res) => {
//     try {

//         // Maximum 5 images
//         if (req.files && req.files.length > 5) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Maximum 5 images allowed."
//             });
//         }

//         // Parse product variants
//         let productVariants = [];

//         try {

//             if (req.body.productVariants) {

//                 productVariants =
//                     typeof req.body.productVariants === "string"
//                         ? JSON.parse(req.body.productVariants)
//                         : req.body.productVariants;

//             }

//         } catch (error) {

//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid productVariants format."
//             });

//         }

//         // Images
//         const images = req.files
//             ? req.files.map(file => ({
//                 url: file.path,
//                 publicId: file.filename
//             }))
//             : [];

//         // Product Data
//         const productData = {

//             productCode: req.body.productCode,
//             productName: req.body.productName,
//             category: req.body.category || null,
//             brand: req.body.brand || "",
//             description: req.body.description || "",

//             purchasePrice: Number(req.body.purchasePrice || 0),
//             sellingPrice: Number(req.body.sellingPrice || 0),

//             gst: Number(req.body.gst || 0),
//             discount: Number(req.body.discount || 0),
//             reorderLevel: Number(req.body.reorderLevel || 5),

//             isFeatured: req.body.isFeatured === "true" || req.body.isFeatured === true,
//             isActive:
//                 req.body.isActive === undefined
//                     ? true
//                     : req.body.isActive === "true" || req.body.isActive === true,

//             productVariants,
//             images

//         };

//         const product = await productService.createProduct(productData);

//         res.status(201).json({
//             success: true,
//             message: "Product created successfully.",
//             product
//         });

//     } catch (error) {

//         res.status(400).json({
//             success: false,
//             message: error.message
//         });

//     }
// };


// // ===============================
// // Get All Products
// // ===============================
// const getProducts = async (req, res) => {

//     try {

//         const products = await productService.getProducts();

//         res.status(200).json({
//             success: true,
//             count: products.length,
//             products
//         });

//     } catch (error) {

//         res.status(400).json({
//             success: false,
//             message: error.message
//         });

//     }

// };


// // ===============================
// // Get Product By ID
// // ===============================
// const getProductById = async (req, res) => {

//     try {

//         const product = await productService.getProductById(req.params.id);

//         if (!product) {

//             return res.status(404).json({
//                 success: false,
//                 message: "Product not found."
//             });

//         }

//         res.status(200).json({
//             success: true,
//             product
//         });

//     } catch (error) {

//         res.status(400).json({
//             success: false,
//             message: error.message
//         });

//     }

// };
// // ===============================
// // Update Product
// // ===============================
// const updateProduct = async (req, res) => {

//     try {

//         // Maximum 5 images
//         if (req.files && req.files.length > 5) {

//             return res.status(400).json({
//                 success: false,
//                 message: "Maximum 5 images allowed."
//             });

//         }

//         // Parse product variants
//         let productVariants;

//         try {

//             if (req.body.productVariants) {

//                 productVariants =
//                     typeof req.body.productVariants === "string"
//                         ? JSON.parse(req.body.productVariants)
//                         : req.body.productVariants;

//             }

//         } catch (error) {

//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid productVariants format."
//             });

//         }

//         const updateData = {

//             productCode: req.body.productCode,
//             productName: req.body.productName,
//             category: req.body.category || null,
//             brand: req.body.brand || "",
//             description: req.body.description || "",

//             purchasePrice:
//                 req.body.purchasePrice !== undefined
//                     ? Number(req.body.purchasePrice)
//                     : undefined,

//             sellingPrice:
//                 req.body.sellingPrice !== undefined
//                     ? Number(req.body.sellingPrice)
//                     : undefined,

//             gst:
//                 req.body.gst !== undefined
//                     ? Number(req.body.gst)
//                     : undefined,

//             discount:
//                 req.body.discount !== undefined
//                     ? Number(req.body.discount)
//                     : undefined,

//             reorderLevel:
//                 req.body.reorderLevel !== undefined
//                     ? Number(req.body.reorderLevel)
//                     : undefined,

//             isFeatured:
//                 req.body.isFeatured !== undefined
//                     ? req.body.isFeatured === "true" || req.body.isFeatured === true
//                     : undefined,

//             isActive:
//                 req.body.isActive !== undefined
//                     ? req.body.isActive === "true" || req.body.isActive === true
//                     : undefined

//         };

//         // Only update variants if sent
//         if (productVariants) {
//             updateData.productVariants = productVariants;
//         }

//         // Only update images if new ones are uploaded
//         if (req.files && req.files.length > 0) {

//             updateData.images = req.files.map(file => ({
//                 url: file.path,
//                 publicId: file.filename
//             }));

//         }

//         // Remove undefined fields
//         Object.keys(updateData).forEach(key => {

//             if (updateData[key] === undefined) {
//                 delete updateData[key];
//             }

//         });

//         const product = await productService.updateProduct(
//             req.params.id,
//             updateData
//         );

//         if (!product) {

//             return res.status(404).json({
//                 success: false,
//                 message: "Product not found."
//             });

//         }

//         res.status(200).json({
//             success: true,
//             message: "Product updated successfully.",
//             product
//         });

//     } catch (error) {

//         res.status(400).json({
//             success: false,
//             message: error.message
//         });

//     }

// };


// // ===============================
// // Delete Product
// // ===============================
// const deleteProduct = async (req, res) => {

//     try {

//         const product = await productService.deleteProduct(req.params.id);

//         if (!product) {

//             return res.status(404).json({
//                 success: false,
//                 message: "Product not found."
//             });

//         }

//         res.status(200).json({
//             success: true,
//             message: "Product deleted successfully."
//         });

//     } catch (error) {

//         res.status(400).json({
//             success: false,
//             message: error.message
//         });

//     }

// };


// // ===============================
// // Home Collections
// // ===============================
// const getHomeCollections = async (req, res) => {

//     try {

//         const products = await productService.getHomeCollections();

//         res.status(200).json({
//             success: true,
//             products
//         });

//     } catch (error) {

//         res.status(400).json({
//             success: false,
//             message: error.message
//         });

//     }

// };


// // ===============================
// // Featured Products
// // ===============================
// const getFeaturedProducts = async (req, res) => {

//     try {

//         const products = await productService.getFeaturedProducts();

//         res.status(200).json({
//             success: true,
//             products
//         });

//     } catch (error) {

//         res.status(400).json({
//             success: false,
//             message: error.message
//         });

//     }

// };


// // ===============================
// // Exports
// // ===============================
// module.exports = {

//     createProduct,
//     getProducts,
//     getProductById,
//     updateProduct,
//     deleteProduct,
//     getHomeCollections,
//     getFeaturedProducts

// };

///---------------------------------

const Product = require("../models/product");


// ===============================
// CREATE PRODUCT
// ===============================

exports.createProduct = async (req, res) => {

    try {

      console.log("BODY:", req.body);
        console.log("FILES:", req.files);
        let productVariants = [];


        if (req.body.productVariants) {

            productVariants =
                typeof req.body.productVariants === "string"
                    ? JSON.parse(req.body.productVariants)
                    : req.body.productVariants;

        }



        const images = req.files
            ? req.files.map(file => ({

                url: file.path,
                publicId: file.filename

            }))
            : [];



        const product = await Product.create({

            productCode: req.body.productCode,

            productName: req.body.productName,

            category: req.body.category || null,

            brand: req.body.brand || "",

            description: req.body.description || "",


            purchasePrice: Number(req.body.purchasePrice),

            sellingPrice: Number(req.body.sellingPrice),


            gst: Number(req.body.gst || 0),

            discount: Number(req.body.discount || 0),


            reorderLevel: Number(
                req.body.reorderLevel || 5
            ),


            productVariants,

            images,


            isFeatured:
                req.body.isFeatured === "true"
                ||
                req.body.isFeatured === true,


            isActive:
                req.body.isActive === undefined
                    ?
                    true
                    :
                    req.body.isActive === "true"

        });



        res.status(201).json({

            success: true,

            message: "Product created successfully",

            product

        });



    } catch (error) {

    console.error("CREATE PRODUCT ERROR:");
    console.error(error);

    res.status(500).json({
        success: false,
        message: error.message,
        stack: error.stack,
    });

}
};




// ===============================
// GET ALL PRODUCTS
// ===============================

exports.getProducts = async (req, res) => {

    try {


        const products = await Product.find()

            .populate(
                "category",
                "categoryName"
            )

            .populate(
                "productVariants.variantType",
                "name values"
            )

            .sort({
                createdAt: -1
            });



        res.status(200).json({

            success: true,

            products

        });



    } catch (error) {

    console.error("CREATE PRODUCT ERROR:");
    console.error(error);

    res.status(500).json({
        success: false,
        message: error.message,
        stack: error.stack,
    });

}
};




// ===============================
// FEATURED PRODUCTS
// ===============================

exports.getFeaturedProducts = async (req, res) => {

    try {


        const products = await Product.find({
            isFeatured: true,

            isActive: true

        })

            .populate(
                "category",
                "categoryName"
            )

            .limit(8);



        res.status(200).json({

            success: true,

            products

        });


    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// ===============================
// GET SINGLE PRODUCT
// ===============================

exports.getProductById = async (req, res) => {

    try {


        const product = await Product.findById(req.params.id)

            .populate(
                "category",
                "categoryName"
            )

            .populate(
                "productVariants.variantType",
                "name values"
            );



        if (!product) {

            return res.status(404).json({

                success: false,

                message: "Product not found"

            });

        }



        res.status(200).json({

            success: true,

            product

        });



    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// ===============================
// UPDATE PRODUCT
// ===============================

exports.updateProduct = async (req, res) => {

    try {


        const product = await Product.findById(req.params.id);


        if (!product) {

            return res.status(404).json({

                success: false,

                message: "Product not found"

            });

        }



        let updateData = {
            ...req.body
        };



        if (req.body.productVariants) {

            updateData.productVariants =
                typeof req.body.productVariants === "string"
                    ?
                    JSON.parse(req.body.productVariants)
                    :
                    req.body.productVariants;

        }



        if (req.files && req.files.length > 0) {


            updateData.images =
                req.files.map(file => ({

                    url: file.path,

                    publicId: file.filename

                }));

        }



        const updatedProduct =
            await Product.findByIdAndUpdate(

                req.params.id,

                updateData,

                {
                    new: true,
                    runValidators: true
                }

            );



        res.status(200).json({

            success: true,

            message: "Product updated successfully",

            product: updatedProduct

        });



    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// ===============================
// DELETE PRODUCT
// ===============================

exports.deleteProduct = async (req, res) => {

    try {


        const product =
            await Product.findById(req.params.id);


        if (!product) {

            return res.status(404).json({

                success: false,

                message: "Product not found"

            });

        }


        await product.deleteOne();



        res.status(200).json({

            success: true,

            message: "Product deleted successfully"

        });


    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// ===============================
// HOME COLLECTIONS
// ===============================

exports.getHomeCollections = async (req, res) => {

    try {


        const products = await Product.find({

            isActive: true

        })

            .populate(
                "category",
                "categoryName"
            )

            .limit(12);



        res.status(200).json({

            success: true,

            products

        });


    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};