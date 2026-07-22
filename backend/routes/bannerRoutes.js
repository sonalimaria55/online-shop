// const express = require("express");

// const router = express.Router();

// const {
//   createBanner,
//   getAllBanners,
//   getBannerById,
//   updateBanner,
//   deleteBanner,
//   changeVisibility,
//   getHomeBanners,
//   getCustomerBanners,
// } = require("../controllers/bannerController");

// const protect = require("../middleware/authMiddleware");
// const authorize = require("../middleware/authorize");
// const upload = require("../middleware/upload");

// // --------------------
// // Public Routes
// // --------------------

// // Visitor Home
// router.get("/home", getHomeBanners);

// // Logged-in Customers
// router.get("/customer", protect, getCustomerBanners);


// // --------------------
// // Admin Routes
// // --------------------

// // Get All
// router.get(
//   "/",
//   protect,
//   authorize("super_admin", "management_support"),
//   getAllBanners
// );

// // Get One
// router.get(
//   "/:id",
//   protect,
//   authorize("super_admin", "management_support"),
//   getBannerById
// );

// // Create
// router.post(
//   "/",
//   protect,
//   authorize("super_admin", "management_support"),
//   upload.single("image"),
//   createBanner
// );

// // Update
// router.put(
//   "/:id",
//   protect,
//   authorize("super_admin", "management_support"),
//   upload.single("image"),
//   updateBanner
// );

// // Change Visibility
// router.patch(
//   "/:id/visibility",
//   protect,
//   authorize("super_admin", "management_support"),
//   changeVisibility
// );

// // Delete
// router.delete(
//   "/:id",
//   protect,
//   authorize("super_admin", "management_support"),
//   deleteBanner
// );

// module.exports = router;

const express = require("express");

const router = express.Router();

const {
  createBanner,
  getAllBanners,
  getBannerById,
  updateBanner,
  deleteBanner,
  changeVisibility,
  getHomeBanners,
  getCustomerBanners,
} = require("../controllers/bannerController");


const upload = require("../middleware/upload");


// Public
router.get("/home", getHomeBanners);

router.get("/customer", getCustomerBanners);


// Admin
router.get(
  "/",
  getAllBanners
);


router.get(
  "/:id",
  getBannerById
);


router.post(
  "/",
  upload.single("image"),
  createBanner
);


router.put(
  "/:id",
  upload.single("image"),
  updateBanner
);


router.patch(
  "/:id/visibility",
  changeVisibility
);


router.delete(
  "/:id",
  deleteBanner
);


module.exports = router;