


// const express = require("express");

// const router = express.Router();

// const {
//   createProduct,
//   getProducts,
//   getProductById,
//   updateProduct,
//   deleteProduct,
//   getHomeCollections,
//     getFeaturedProducts,
// } = require("../controllers/productController");

// const upload = require("../middleware/upload");

// // ==========================
// // Home Collections (Latest 6)
// // ==========================
// router.get(
//   "/home-collections",
//   getHomeCollections
// );



// router.get("/featured-products", getFeaturedProducts);



// // ==========================
// // Create Product
// // ==========================
// router.post(
//   "/",
//   upload.single("image"),
//   createProduct
// );

// // ==========================
// // Get All Products
// // ==========================
// router.get(
//   "/",
//   getProducts
// );

// // ==========================
// // Get Product By ID
// // ==========================
// // Keep this AFTER /home-collections
// router.get(
//   "/:id",
//   getProductById
// );

// // ==========================
// // Update Product
// // ==========================
// router.put(
//   "/:id",
//   upload.single("image"),
//   updateProduct
// );

// // ==========================
// // Delete Product
// // ==========================
// router.delete(
//   "/:id",
//   deleteProduct
// );




// module.exports = router;


const express = require("express");
const router = express.Router();

const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getHomeCollections,
    getFeaturedProducts,
} = require("../controllers/productController");


const upload = require("../middleware/upload");



// ===============================
// Home Sections
// ===============================

router.get(
    "/home-collections",
    getHomeCollections
);


router.get(
    "/featured-products",
    getFeaturedProducts
);




// ===============================
// Product CRUD
// ===============================


// Create Product
router.post(
    "/",
    upload("serina/products").array("images",5),
    createProduct
);



// Get All Products
router.get(
    "/",
    getProducts
);



// Get Product By ID
router.get(
    "/:id",
    getProductById
);



// Update Product
router.put(
    "/:id",
    upload("serina/products").array("images",5),
    updateProduct
);



// Delete Product
router.delete(
    "/:id",
    deleteProduct
);



module.exports = router;