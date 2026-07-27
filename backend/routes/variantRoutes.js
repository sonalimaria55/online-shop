const express = require("express");
const router = express.Router();

const {
    createVariant,
    getVariants,
    getVariantById,
    updateVariant,
    deleteVariant,
} = require("../controllers/variantController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/authorize");

// Customer
router.get("/", getVariants);
router.get("/:id", getVariantById);

// Admin
router.post(
    "/",
    protect,
    authorize("super_admin", "management_support"),
    createVariant
);

router.put(
    "/:id",
    protect,
    authorize("super_admin", "management_support"),
    updateVariant
);

router.delete(
    "/:id",
    protect,
    authorize("super_admin"),
    deleteVariant
);

module.exports = router;