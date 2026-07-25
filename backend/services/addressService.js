const Address = require("../models/Address");

// Add Address
const createAddress = async (userId, data) => {
  const addressCount = await Address.countDocuments({
    user: userId,
  });

  const address = await Address.create({
    user: userId,
    ...data,
    isDefault: addressCount === 0,
  });

  return address;
};

// Get My Addresses
const getAddresses = async (userId) => {
  return await Address.find({
    user: userId,
  }).sort({
    isDefault: -1,
    createdAt: -1,
  });
};

// Update Address
const updateAddress = async (userId, addressId, data) => {
  const address = await Address.findOne({
    _id: addressId,
    user: userId,
  });

  if (!address) {
    throw new Error("Address not found.");
  }

  Object.assign(address, data);

  await address.save();

  return address;
};

// Delete Address
const deleteAddress = async (userId, addressId) => {
  const address = await Address.findOne({
    _id: addressId,
    user: userId,
  });

  if (!address) {
    throw new Error("Address not found.");
  }

  const wasDefault = address.isDefault;

  await address.deleteOne();

  // If default address deleted,
  // make another address default
  if (wasDefault) {
    const nextAddress = await Address.findOne({
      user: userId,
    }).sort({
      createdAt: 1,
    });

    if (nextAddress) {
      nextAddress.isDefault = true;
      await nextAddress.save();
    }
  }
};

// Set Default Address
const setDefaultAddress = async (userId, addressId) => {
  const address = await Address.findOne({
    _id: addressId,
    user: userId,
  });

  if (!address) {
    throw new Error("Address not found.");
  }

  // Remove existing default
  await Address.updateMany(
    { user: userId },
    {
      isDefault: false,
    }
  );

  // Set new default
  address.isDefault = true;

  await address.save();

  return address;
};

module.exports = {
  createAddress,
  getAddresses,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
};