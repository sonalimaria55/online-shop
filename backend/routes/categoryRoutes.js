// const express = require("express");

// const router = express.Router();


// const {

//     createCategory,

//     getCategories,

//     deleteCategory

// } = require("../controllers/categoryController");



// // POST /api/categories
// router.post(
//     "/",
//     createCategory
// );



// // GET /api/categories
// router.get(
//     "/",
//     getCategories
// );



// // DELETE /api/categories/:id
// router.delete(
//     "/:id",
//     deleteCategory
// );



// module.exports = router;

//--------------------------------------
// const express = require("express");

// const router = express.Router();

// const {
//     createCategory,
//     getCategories,
//     getCategoryById,
//     updateCategory,
//     deleteCategory
// } = require("../controllers/categoryController");


// // CREATE CATEGORY
// // POST /api/categories
// router.post("/", createCategory);


// // GET ALL CATEGORIES
// // GET /api/categories
// router.get("/", getCategories);


// // GET SINGLE CATEGORY
// // GET /api/categories/:id
// router.get("/:id", getCategoryById);


// // UPDATE CATEGORY
// // PUT /api/categories/:id
// router.put("/:id", updateCategory);


// // DELETE CATEGORY
// // DELETE /api/categories/:id
// router.delete("/:id", deleteCategory);


// module.exports = router;

const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
} = require("../controllers/categoryController");


// CREATE CATEGORY
router.post(
    "/",
    upload.single("image"),
    createCategory
);


// GET ALL CATEGORIES
router.get("/", getCategories);


// GET SINGLE CATEGORY
router.get("/:id", getCategoryById);


// UPDATE CATEGORY
router.put(
    "/:id",
    upload.single("image"),
    updateCategory
);


// DELETE CATEGORY
router.delete("/:id", deleteCategory);

module.exports = router;