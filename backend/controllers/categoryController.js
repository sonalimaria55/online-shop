// const Category = require("../models/Category");


// // CREATE CATEGORY
// const createCategory = async(req,res)=>{

//     try{

//         const {
//             categoryName,
            
//         } = req.body;


//         const category = await Category.create({

//             categoryName,
            

//             categoryCode:
//             "CAT" + Date.now()

//         });


//         res.status(201).json({

//             success:true,

//             category

//         });


//     }
//     catch(error){

//         res.status(500).json({

//             success:false,

//             message:error.message

//         });

//     }

// };



// // GET ALL CATEGORIES
// const getCategories = async(req,res)=>{

//     try{

//         const categories = await Category.find()
//         .sort({
//             createdAt:-1
//         });


//         res.json({

//             success:true,

//             categories

//         });


//     }
//     catch(error){

//         res.status(500).json({

//             success:false,

//             message:error.message

//         });

//     }

// };



// // DELETE CATEGORY
// const deleteCategory = async(req,res)=>{

//     try{

//         await Category.findByIdAndDelete(
//             req.params.id
//         );


//         res.json({

//             success:true,

//             id:req.params.id

//         });


//     }
//     catch(error){

//         res.status(500).json({

//             success:false,

//             message:error.message

//         });

//     }

// };



// module.exports = {

//     createCategory,

//     getCategories,

//     deleteCategory

// };


const Category = require("../models/Category");


// CREATE CATEGORY

const createCategory = async (req, res) => {

    try {

        const category = await Category.create({

            categoryName: req.body.categoryName,

            image: req.file ? req.file.path : null,

            categoryCode: "CAT" + Date.now()

        });

        res.status(201).json({

            success: true,

            category

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// GET ALL CATEGORIES
const getCategories = async (req, res) => {
    try {

        const categories = await Category.find()
            .sort({ createdAt: -1 });


        res.json({
            success: true,
            categories
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};



// GET SINGLE CATEGORY
const getCategoryById = async (req, res) => {

    try {

        const category = await Category.findById(
            req.params.id
        );


        if (!category) {

            return res.status(404).json({
                success:false,
                message:"Category not found"
            });

        }


        res.json({
            success:true,
            category
        });


    } catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// UPDATE CATEGORY
const updateCategory = async (req, res) => {

    try {

        const updateData = {

            categoryName: req.body.categoryName

        };

        if (req.file) {

            updateData.image = req.file.path;

        }

        const category = await Category.findByIdAndUpdate(

            req.params.id,

            updateData,

            {
                new: true,
                runValidators: true
            }

        );

        if (!category) {

            return res.status(404).json({

                success: false,

                message: "Category not found"

            });

        }

        res.json({

            success: true,

            category

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// DELETE CATEGORY
const deleteCategory = async (req, res) => {

    try {

        await Category.findByIdAndDelete(
            req.params.id
        );


        res.json({

            success:true,

            message:"Category deleted"

        });


    } catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



module.exports = {

    createCategory,

    getCategories,

    getCategoryById,

    updateCategory,

    deleteCategory

};