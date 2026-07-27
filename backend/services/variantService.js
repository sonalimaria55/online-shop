const Variant = require("../models/Variant");

// Create Variant
const createVariant = async (variantData) => {
    return await Variant.create(variantData);
};

// Get All Variants
const getVariants = async () => {
    return await Variant.find().sort({ createdAt: -1 });
};

// Get Variant By Id
const getVariantById = async (id) => {
    return await Variant.findById(id);
};

// Update Variant
const updateVariant = async (id, variantData) => {
    return await Variant.findByIdAndUpdate(
        id,
        { $set: variantData },
        {
            new: true,
            runValidators: true,
        }
    );
};

// Delete Variant
const deleteVariant = async (id) => {
    return await Variant.findByIdAndDelete(id);
};

module.exports = {
    createVariant,
    getVariants,
  //  getVariantById,
    updateVariant,
    deleteVariant,
};