const express = require("express");

const {
  addAddress,
  getMyAddresses,
  editAddress,
  removeAddress,
  makeDefaultAddress,
} = require("../controllers/addressController");

const protect = require("../middlewares/protect");

const router = express.Router();

router.post("/", protect, addAddress);

router.get("/", protect, getMyAddresses);

router.put("/:id", protect, editAddress);

router.delete("/:id", protect, removeAddress);

router.patch("/:id/default", protect, makeDefaultAddress);

module.exports = router;