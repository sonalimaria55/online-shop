const {
  createAddress,
  getAddresses,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
} = require("../services/addressService");

// Add Address
const addAddress = async (req, res) => {
  try {
    const address = await createAddress(req.user._id, req.body);

    res.status(201).json({
      success: true,
      message: "Address added successfully.",
      address,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get My Addresses
const getMyAddresses = async (req, res) => {
  try {
    const addresses = await getAddresses(req.user._id);

    res.json({
      success: true,
      addresses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Address
const editAddress = async (req, res) => {
  try {
    const address = await updateAddress(
      req.user._id,
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      message: "Address updated successfully.",
      address,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Address
const removeAddress = async (req, res) => {
  try {
    await deleteAddress(req.user._id, req.params.id);

    res.json({
      success: true,
      message: "Address deleted successfully.",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Set Default Address
const makeDefaultAddress = async (req, res) => {
  try {
    const address = await setDefaultAddress(
      req.user._id,
      req.params.id
    );

    res.json({
      success: true,
      message: "Default address updated.",
      address,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addAddress,
  getMyAddresses,
  editAddress,
  removeAddress,
  makeDefaultAddress,
};