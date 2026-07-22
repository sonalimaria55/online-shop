const Banner = require("../models/Banner");

// Create Banner
const createBanner = async (bannerData) => {
  return await Banner.create(bannerData);
};

// Get All Banners (Admin)
const getAllBanners = async () => {
  return await Banner.find().sort({ displayOrder: 1, createdAt: -1 });
};

// Get Banner By ID
const getBannerById = async (id) => {
  return await Banner.findById(id);
};

// Update Banner
const updateBanner = async (id, bannerData) => {
  return await Banner.findByIdAndUpdate(id, bannerData, {
    new: true,
    runValidators: true,
  });
};

// Delete Banner
const deleteBanner = async (id) => {
  return await Banner.findByIdAndDelete(id);
};

// Change Visibility
const changeVisibility = async (id, visibility) => {
  return await Banner.findByIdAndUpdate(
    id,
    { visibility },
    {
      new: true,
      runValidators: true,
    }
  );
};

// Home Page (Visitors)
const getHomeBanners = async () => {
  return await Banner.find({
    visibility: "everyone",
  }).sort({ displayOrder: 1 });
};

// Logged-in Customers
const getCustomerBanners = async () => {
  return await Banner.find({
    visibility: {
      $in: ["everyone", "registered"],
    },
  }).sort({ displayOrder: 1 });
};

module.exports = {
  createBanner,
  getAllBanners,
  getBannerById,
  updateBanner,
  deleteBanner,
  changeVisibility,
  getHomeBanners,
  getCustomerBanners,
};