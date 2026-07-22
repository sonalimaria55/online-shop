const Product = require("../models/Product");

// ==========================
// Create Product
// ==========================
const createProduct = async (req, res) => {
  try {

    const productData = {
      ...req.body,
      image: req.file ? req.file.path : null,
    };


    const product = await Product.create(productData);


    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });


  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message,
    });

  }
};

// ==========================
// Get All Products
// ==========================
const getProducts = async (req, res) => {
  try {
  const products = await Product.find()
  .populate("category", "categoryName")
  .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get Product By ID
// ==========================
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("category", "categoryName");

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Update Product
// ==========================
const updateProduct = async (req, res) => {
  try {

    const updateData = {
      ...req.body,
    };


    if (req.file) {
      updateData.image = req.file.path;
    }


    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );


    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }


    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });


  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message,
    });

  }
};

// ==========================
// Delete Product
// ==========================
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Home Collections (Latest 6 Products)
// ==========================
const getHomeCollections = async (req, res) => {
  try {
    const products = await Product.find({
      isActive: true,
    })
      .populate("category", "categoryName")
      .sort({ createdAt: -1 })
      .limit(6);

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// ==========================
// Featured Products (Top 6)
// ==========================
const getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({
      isActive: true,
    })
.populate("category", "categoryName")
      .sort({
        sellingPrice: -1,
      })
      .limit(6);

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getHomeCollections,
   getFeaturedProducts,

};