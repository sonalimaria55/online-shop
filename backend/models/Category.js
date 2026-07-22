const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
{
    categoryCode: {
        type: String,
        unique: true
    },

    categoryName: {
        type: String,
        required: true,
        trim: true
    },

    image: {
        type: String
    },

    isActive: {
        type: Boolean,
        default: true
    }

},
{
    timestamps: true
});


module.exports = mongoose.model("Category", categorySchema);