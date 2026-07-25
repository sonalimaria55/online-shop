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

const productService = require("../services/productService");
// Create Product

const createProduct = async(req,res)=>{

    try{
        // Maximum 5 images
        if(req.files && req.files.length > 5){

            return res.status(400).json({

                success:false,
                message:"Maximum 5 images allowed"

            });

        }



        const images = req.files
        ? req.files.map(file=>({

            url:file.path,
            publicId:file.filename

        }))
        : [];



        const productData={

            ...req.body,

            purchasePrice:Number(req.body.purchasePrice || 0),
            sellingPrice:Number(req.body.sellingPrice || 0),
            gst:Number(req.body.gst || 0),
            discount:Number(req.body.discount || 0),

            images

        };



        const product =
        await productService.createProduct(productData);



        res.status(201).json({

            success:true,
            message:"Product created successfully",
            product

        });


    }
    catch(error){

        res.status(400).json({

            success:false,
            message:error.message

        });

    }

};





// ===============================
// Get Products
// ===============================
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

//         res.status(400).json({

//             success:false,
//             message:error.message

//         });

//     }

// };

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();

    console.log("Total Products:", products.length);
    console.log(
      products.map((p) => ({
        code: p.productCode,
        id: p._id.toString(),
      }))
    );

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};





// ===============================
// Get Product By ID
// ===============================


const getProductById=async(req,res)=>{


    try{


        const product =
        await productService.getProductById(req.params.id);



        if(!product){

            return res.status(404).json({

                success:false,
                message:"Product not found"

            });

        }



        res.status(200).json({

            success:true,
            product

        });



    }
    catch(error){

        res.status(400).json({

            success:false,
            message:error.message

        });

    }

};


// Update Product

const updateProduct=async(req,res)=>{

    try{


        if(req.files && req.files.length > 5){

            return res.status(400).json({

                success:false,
                message:"Maximum 5 images allowed"

            });

        }



        const updateData={

            ...req.body,

            purchasePrice:req.body.purchasePrice 
            ? Number(req.body.purchasePrice) 
            : undefined,

            sellingPrice:req.body.sellingPrice
            ? Number(req.body.sellingPrice)
            : undefined,

            gst:req.body.gst
            ? Number(req.body.gst)
            : undefined,

            discount:req.body.discount
            ? Number(req.body.discount)
            : undefined

        };




        if(req.files && req.files.length > 0){


            updateData.images =
            req.files.map(file=>({

                url:file.path,
                publicId:file.filename

            }));

        }




        const product =
        await productService.updateProduct(
            req.params.id,
            updateData
        );




        if(!product){

            return res.status(404).json({

                success:false,
                message:"Product not found"

            });

        }




        res.status(200).json({

            success:true,
            message:"Product updated successfully",
            product

        });



    }
    catch(error){

        res.status(400).json({

            success:false,
            message:error.message

        });

    }

};







// ===============================
// Delete Product
// ===============================
const deleteProduct=async(req,res)=>{

    try{


        const product =
        await productService.deleteProduct(req.params.id);




        if(!product){

            return res.status(404).json({

                success:false,
                message:"Product not found"

            });

        }




        res.status(200).json({

            success:true,
            message:"Product deleted successfully"

        });



    }
    catch(error){

        res.status(400).json({

            success:false,
            message:error.message

        });

    }

};







// ===============================
// Home Collections
// ===============================
const getHomeCollections=async(req,res)=>{


    try{


        const products =
        await productService.getHomeCollections();



        res.status(200).json({

            success:true,
            products

        });



    }
    catch(error){

        res.status(400).json({

            success:false,
            message:error.message

        });

    }

};







// ===============================
// Featured Products
// ===============================
const getFeaturedProducts=async(req,res)=>{


    try{


        const products =
        await productService.getFeaturedProducts();



        res.status(200).json({

            success:true,
            products

        });



    }
    catch(error){

        res.status(400).json({

            success:false,
            message:error.message

        });

    }

};







module.exports={

    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getHomeCollections,
    getFeaturedProducts

};