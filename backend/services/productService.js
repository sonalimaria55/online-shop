const Product = require("../models/Product");

// ===============================
// Create Product
// ===============================
const createProduct = async (productData) => {
  return await Product.create(productData);
};

// ===============================
// Get All Products
// ===============================
const getProducts = async () => {
  return await Product.find()
    .populate("category", "name")
    .sort({ createdAt: -1 });
};

// ===============================
// Get Product By ID
// ===============================
const getProductById = async (id) => {
  return await Product.findById(id).populate("category", "name");
};

// ===============================
// Update Product
// ===============================
const updateProduct = async (id, productData) => {
  return await Product.findByIdAndUpdate(id, productData, {
    new: true,
    runValidators: true,
  });
};

// ===============================
// Delete Product
// ===============================
const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

// ===============================
// Home Collections (Latest 6 Products)
// ===============================
// Home Collections (Latest 6 Products)
const getHomeCollections = async () => {
  return await Product.find({
    isActive: true,
  })
    .populate("category", "name")
    .sort({ createdAt: -1 })
    .limit(6);
};

// ===============================
// Exports
// ===============================
module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getHomeCollections,
};