

// const variantService = require("../services/variantService");


// // Create Variant

// // exports.createVariant = async (req, res) => {
// //     try {

// //         const variant = await variantService.createVariant(req.body);

// //         res.status(201).json({
// //             success: true,
// //             message: "Variant created successfully",
// //             variant,
// //         });

// //     } catch (error) {

// //         res.status(500).json({
// //             success: false,
// //             message: error.message,
// //         });

// //     }
// // };

// exports.createVariant = async (req,res)=>{
//     try{

//         const variant = await variantService.createVariant(req.body);

//         res.status(201).json({
//             success:true,
//             message:"Variant created successfully",
//             variant,
//         });

//     }catch(error){

//         if(error.code === 11000){
//             return res.status(400).json({
//                 success:false,
//                 message:"Variant name already exists",
//             });
//         }

//         res.status(500).json({
//             success:false,
//             message:error.message,
//         });

//     }
// };

// // ==============================
// // Get All Variants
// // ==============================
// exports.getVariants = async (req, res) => {
//     try {

//         const variants = await variantService.getVariants();

//         res.status(200).json({
//             success: true,
//             variants,
//         });

//     } catch (error) {

//         res.status(500).json({
//             success: false,
//             message: error.message,
//         });

//     }
// };

// // ==============================
// // Get Variant By ID
// // ==============================
// exports.getVariantById = async (req, res) => {
//     try {

//         const variant = await variantService.getVariantById(req.params.id);

//         if (!variant) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Variant not found",
//             });
//         }

//         res.status(200).json({
//             success: true,
//             variant,
//         });

//     } catch (error) {

//         res.status(500).json({
//             success: false,
//             message: error.message,
//         });

//     }
// };

// // ==============================
// // Update Variant
// // ==============================
// exports.updateVariant = async (req, res) => {
//     try {

//         const variant = await variantService.updateVariant(
//             req.params.id,
//             req.body
//         );

//         if (!variant) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Variant not found",
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: "Variant updated successfully",
//             variant,
//         });

//     } catch (error) {

//         res.status(500).json({
//             success: false,
//             message: error.message,
//         });

//     }
// };

// // ==============================
// // Delete Variant
// // ==============================
// exports.deleteVariant = async (req, res) => {
//     try {

//         const variant = await variantService.deleteVariant(req.params.id);

//         if (!variant) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Variant not found",
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: "Variant deleted successfully",
//         });

//     } catch (error) {

//         res.status(500).json({
//             success: false,
//             message: error.message,
//         });

//     }
// };





const variantService = require("../services/variantService");


// Create Variant

// exports.createVariant = async (req, res) => {
//     try {

//         const variant = await variantService.createVariant(req.body);

//         res.status(201).json({
//             success: true,
//             message: "Variant created successfully",
//             variant,
//         });

//     } catch (error) {

//         res.status(500).json({
//             success: false,
//             message: error.message,
//         });

//     }
// };

// exports.createVariant = async (req,res)=>{
//     try{

//         const variant = await variantService.createVariant(req.body);

//         res.status(201).json({
//             success:true,
//             message:"Variant created successfully",
//             variant,
//         });

//     }catch(error){

//         if(error.code === 11000){
//             return res.status(400).json({
//                 success:false,
//                 message:"Variant name already exists",
//             });
//         }

//         res.status(500).json({
//             success:false,
//             message:error.message,
//         });

//     }
// };


exports.createVariant = async (req,res)=>{
    try{

        const variant = await variantService.createVariant(req.body);

        res.status(201).json({
            success:true,
            message:"Variant created successfully",
            variant,
        });

    }catch(error){

        if(error.code === 11000){
            return res.status(400).json({
                success:false,
                message:"Variant name already exists",
            });
        }

        res.status(500).json({
            success:false,
            message:error.message,
        });

    }
};

// ==============================
// Get All Variants
// ==============================
exports.getVariants = async (req, res) => {
    try {

        const variants = await variantService.getVariants();

        res.status(200).json({
            success: true,
            variants,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// ==============================
// Get Variant By ID
// ==============================
exports.getVariantById = async (req, res) => {
    try {

        const variant = await variantService.getVariantById(req.params.id);

        if (!variant) {
            return res.status(404).json({
                success: false,
                message: "Variant not found",
            });
        }

        res.status(200).json({
            success: true,
            variant,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// ==============================
// Update Variant
// ==============================
exports.updateVariant = async (req, res) => {
    try {

        const variant = await variantService.updateVariant(
            req.params.id,
            req.body
        );

        if (!variant) {
            return res.status(404).json({
                success: false,
                message: "Variant not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Variant updated successfully",
            variant,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// ==============================
// Delete Variant
// ==============================
exports.deleteVariant = async (req, res) => {
    try {

        const variant = await variantService.deleteVariant(req.params.id);

        if (!variant) {
            return res.status(404).json({
                success: false,
                message: "Variant not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Variant deleted successfully",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};