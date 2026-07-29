

// const Product = require("../models/product");


// // ===============================
// // CREATE PRODUCT
// // ===============================

// exports.createProduct = async (req, res) => {

//     try {

//       console.log("BODY:", req.body);
//         console.log("FILES:", req.files);
//         let productVariants = [];


//         if (req.body.productVariants) {

//             productVariants =
//                 typeof req.body.productVariants === "string"
//                     ? JSON.parse(req.body.productVariants)
//                     : req.body.productVariants;

//         }



//         const images = req.files
//             ? req.files.map(file => ({

//                 url: file.path,
//                 publicId: file.filename

//             }))
//             : [];



//         const product = await Product.create({

//             productCode: req.body.productCode,

//             productName: req.body.productName,

//             category: req.body.category || null,

//             brand: req.body.brand || "",

//             description: req.body.description || "",


//             purchasePrice: Number(req.body.purchasePrice),

//             sellingPrice: Number(req.body.sellingPrice),


//             gst: Number(req.body.gst || 0),

//             discount: Number(req.body.discount || 0),


//             reorderLevel: Number(
//                 req.body.reorderLevel || 5
//             ),


//             productVariants,

//             images,


//             isFeatured:
//                 req.body.isFeatured === "true"
//                 ||
//                 req.body.isFeatured === true,


//             isActive:
//                 req.body.isActive === undefined
//                     ?
//                     true
//                     :
//                     req.body.isActive === "true"

//         });



//         res.status(201).json({

//             success: true,

//             message: "Product created successfully",

//             product

//         });



//     } catch (error) {

//     console.error("CREATE PRODUCT ERROR:");
//     console.error(error);

//     res.status(500).json({
//         success: false,
//         message: error.message,
//         stack: error.stack,
//     });

// }
// };




// // ===============================
// // GET ALL PRODUCTS
// // ===============================

// exports.getProducts = async (req, res) => {

//     try {


//         const products = await Product.find()


//             .populate(
//                 "category",
//                 "categoryName"
//             )

//             .populate(
//                 "productVariants.variantType",
//                 "name values"
//             )

//             .sort({
//                 createdAt: -1
//             });



//         res.status(200).json({

//             success: true,

//             products

//         });



//     } catch (error) {

//     console.error("CREATE PRODUCT ERROR:");
//     console.error(error);

//     res.status(500).json({
//         success: false,
//         message: error.message,
//         stack: error.stack,
//     });

// }
// };




// // ===============================
// // FEATURED PRODUCTS
// // ===============================

// exports.getFeaturedProducts = async (req, res) => {

//     try {


//         const products = await Product.find({
//             isFeatured: true,

//             isActive: true

//         })

//             .populate(
//                 "category",
//                 "categoryName"
//             )

//             .limit(8);



//         res.status(200).json({

//             success: true,

//             products

//         });


//     } catch (error) {

//         res.status(500).json({

//             success: false,

//             message: error.message

//         });

//     }

// };




// // ===============================
// // GET SINGLE PRODUCT
// // ===============================

// exports.getProductById = async (req, res) => {

//     try {


//         const product = await Product.findById(req.params.id)

//             .populate(
//                 "category",
//                 "categoryName"
//             )

//             .populate(
//                 "productVariants.variantType",
//                 "name values"
//             );



//         if (!product) {

//             return res.status(404).json({

//                 success: false,

//                 message: "Product not found"

//             });

//         }



//         res.status(200).json({

//             success: true,

//             product

//         });



//     } catch (error) {

//         res.status(500).json({

//             success: false,

//             message: error.message

//         });

//     }

// };




// // ===============================
// // UPDATE PRODUCT
// // ===============================

// exports.updateProduct = async (req, res) => {

//     try {


//         const product = await Product.findById(req.params.id);


//         if (!product) {

//             return res.status(404).json({

//                 success: false,

//                 message: "Product not found"

//             });

//         }



//         let updateData = {
//             ...req.body
//         };



//         if (req.body.productVariants) {

//             updateData.productVariants =
//                 typeof req.body.productVariants === "string"
//                     ?
//                     JSON.parse(req.body.productVariants)
//                     :
//                     req.body.productVariants;

//         }



//         if (req.files && req.files.length > 0) {


//             updateData.images =
//                 req.files.map(file => ({

//                     url: file.path,

//                     publicId: file.filename

//                 }));

//         }



//         const updatedProduct =
//             await Product.findByIdAndUpdate(

//                 req.params.id,

//                 updateData,

//                 {
//                     new: true,
//                     runValidators: true
//                 }

//             );



//         res.status(200).json({

//             success: true,

//             message: "Product updated successfully",

//             product: updatedProduct

//         });



//     } catch (error) {

//         res.status(500).json({

//             success: false,

//             message: error.message

//         });

//     }

// };




// // ===============================
// // DELETE PRODUCT
// // ===============================

// exports.deleteProduct = async (req, res) => {

//     try {


//         const product =
//             await Product.findById(req.params.id);


//         if (!product) {

//             return res.status(404).json({

//                 success: false,

//                 message: "Product not found"

//             });

//         }


//         await product.deleteOne();



//         res.status(200).json({

//             success: true,

//             message: "Product deleted successfully"

//         });


//     } catch (error) {

//         res.status(500).json({

//             success: false,

//             message: error.message

//         });

//     }

// };




// // ===============================
// // HOME COLLECTIONS
// // ===============================

// exports.getHomeCollections = async (req, res) => {

//     try {


//         const products = await Product.find({

//             isActive: true

//         })

//             .populate(
//                 "category",
//                 "categoryName"
//             )

//             .limit(12);



//         res.status(200).json({

//             success: true,

//             products

//         });


//     } catch (error) {

//         res.status(500).json({

//             success: false,

//             message: error.message

//         });

//     }

// };





const Product = require("../models/product");



// CREATE PRODUCT


exports.createProduct = async (req, res) => {

    try {

        console.log("BODY:", req.body);
        console.log("FILES:", req.files);


        // let productVariants = [];


        // if (req.body.productVariants) {

        //     productVariants =
        //         typeof req.body.productVariants === "string"
        //             ? JSON.parse(req.body.productVariants)
        //             : req.body.productVariants;

        // }

        let productVariants = [];


if(req.body.productVariants){

    productVariants =
    typeof req.body.productVariants === "string"
    ?
    JSON.parse(req.body.productVariants)
    :
    req.body.productVariants;



    productVariants =
    productVariants.filter(
        variant =>
        variant.attributes &&
        variant.attributes.length > 0 &&
        variant.attributes.every(
            attr =>
            attr.variantType &&
            attr.value
        )
    );

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
                    ? true
                    :
                    req.body.isActive === "true"

        });



        res.status(201).json({

            success: true,

            message: "Product created successfully",

            product

        });



    } catch (error) {


        console.error("CREATE PRODUCT ERROR");
        console.error(error);


        res.status(500).json({

            success: false,

            message: error.message

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


            // .populate(
            //     "productVariants.variantType",
            //     "displayName values"
            // )
            .populate(
                "productVariants.attributes.variantType",
                "displayName values"
            )


            .sort({

                createdAt: -1

            });



        res.status(200).json({

            success: true,

            products

        });



    } catch (error) {


        console.error("GET PRODUCTS ERROR");
        console.error(error);



        res.status(500).json({

            success: false,

            message: error.message

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


            .populate(
                "productVariants.variantType",
                "displayName values"
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
// GET PRODUCT BY ID
// ===============================

exports.getProductById = async (req, res) => {

    try {


        const product = await Product.findById(
            req.params.id
        )


            .populate(
                "category",
                "categoryName"
            )


            .populate(
                "productVariants.variantType",
                "displayName values"
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


        const product =
            await Product.findById(req.params.id);



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


            .populate(
                "productVariants.variantType",
                "displayName values"
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