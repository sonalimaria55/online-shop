const productVariantSchema = new mongoose.Schema({
    variantType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Variant",
        required: true,
    },

    value: String,

    color: String,

    sku: {
        type: String,
        uppercase: true,
        trim: true,
    },

    barcode: {
        type: String,
        trim: true,
    },

    stock: Number,

    sellingPrice: Number,
});