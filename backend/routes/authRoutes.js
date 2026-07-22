const express = require("express");
const router = express.Router();
const {
  register,
  verifyOTP,
  login,
  profile,
  resendOTP,
} = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");
router.post("/register", register);
router.post("/verify-otp", verifyOTP);
router.post("/resend-otp", resendOTP);
router.post("/login", login);
router.get("/profile", protect, profile);
module.exports = router;
