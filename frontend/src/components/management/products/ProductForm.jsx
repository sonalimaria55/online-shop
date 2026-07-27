

import { useEffect } from "react";
import { getVariants } from "../../../features/variants/VariantThunk";

import {
    Grid,
    TextField,
    MenuItem,
    FormControlLabel,
    Checkbox,
    Typography,
    Box,
    Button,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { getCategories } from "../../../features/categories/CategoriesThunk";

const ProductForm = ({ formData, setFormData }) => {
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.categories.categories) || [];

    const variants = useSelector((state) => state.variants.variants) || [];

    useEffect(() => {
        dispatch(getCategories());

        dispatch(getVariants());
    }, [dispatch]);
    const sizeVariant = variants.find((variant) => variant.name === "Size");

    const sizes = sizeVariant?.values || [];

    console.log("Variants:", variants);
    console.log("Size Variant:", sizeVariant);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setFormData((prev) => ({
            ...prev,

            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSizeChange = (size) => {
        console.log("Checkbox clicked:", size);

        if (!sizeVariant) {
            console.log("No size variant");
            return;
        }

        setFormData((prev) => {
            console.log("Previous:", prev.productVariants);

            const exists = prev.productVariants.some(
                (item) => item.value === size
            );

            let productVariants;

            if (exists) {
                productVariants = prev.productVariants.filter(
                    (item) => item.value !== size
                );
            } else {
                productVariants = [
                    ...prev.productVariants,
                    {
                        variantType: sizeVariant._id,
                        value: size,
                        color: "",
                        sku: "",
                        barcode: "",
                        stock: 0,
                        sellingPrice: Number(prev.sellingPrice) || 0,
                    },
                ];
            }

            console.log("New:", productVariants);

            return {
                ...prev,
                units: productVariants.map((item) => item.value),
                productVariants,
            };
        });
    };

    const removeImage = (index) => {
        setFormData((prev) => ({
            ...prev,

            images: prev.images.filter((_, i) => i !== index),
        }));
    };

    //    const handleImages = (e) => {


    //     const files = Array.from(e.target.files);

    //     setFormData((prev) => {

    //         const updatedImages = [...prev.images, ...files];

    //         if (updatedImages.length > 5) {
    //             alert("Maximum 5 images allowed");
    //             return prev;
    //         }

    //         return {
    //             ...prev,
    //             images: updatedImages,
    //         };
    //     });
    // };


    const handleImages = (e) => {
        const files = Array.from(e.target.files);

        setFormData((prev) => {

            const updatedImages = [...prev.images, ...files];

            if (updatedImages.length > 5) {
                alert("Maximum 5 images allowed");
                return prev;
            }

            return {
                ...prev,
                images: updatedImages,
            };
        });

        e.target.value = "";
    };
    return (
        <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth

                    label="Product Code"

                    name="productCode"

                    value={formData.productCode}

                    onChange={handleChange}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth

                    label="Product Name"

                    name="productName"

                    value={formData.productName}

                    onChange={handleChange}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    select

                    fullWidth

                    label="Category"

                    name="category"

                    value={formData.category}

                    onChange={handleChange}
                >
                    {categories.map((category) => (
                        <MenuItem
                            key={category._id}

                            value={category._id}
                        >
                            {category.categoryName}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth

                    label="Brand"

                    name="brand"

                    value={formData.brand}

                    onChange={handleChange}
                />
            </Grid>

            <Grid size={12}>
                <Typography variant="subtitle2">Available Sizes</Typography>

                {sizes.map((size) => (
                    <FormControlLabel
                        key={size}

                        control={
                            <Checkbox
                                checked={formData.units.includes(size)}
                                onChange={() => handleSizeChange(size)}
                            />
                        }

                        label={size}
                    />
                ))}
            </Grid>


            <Grid size={12}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Variant Details
                </Typography>

                {formData.productVariants.map((variant, index) => (
                    <Box
                        key={variant.value}
                        sx={{
                            border: "1px solid #ddd",
                            borderRadius: 2,
                            p: 2,
                            mb: 2,
                        }}
                    >
                        <Typography sx={{ mb: 2, fontWeight: 600 }}>
                            Size : {variant.value}
                        </Typography>

                        <Grid container spacing={2}>
                            {/* Stock */}
                            <Grid size={{ xs: 12, md: 3 }}>
                                <TextField
                                    fullWidth
                                    type="number"
                                    label="Stock"
                                    value={variant.stock}
                                    onChange={(e) => {
                                        const updated = [...formData.productVariants];
                                        updated[index].stock = Number(e.target.value);

                                        setFormData({
                                            ...formData,
                                            productVariants: updated,
                                        });
                                    }}
                                />
                            </Grid>

                            {/* Color */}
                            <Grid size={{ xs: 12, md: 3 }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        label="Color"
                                        placeholder="Pink or #F54927"
                                        value={variant.color}
                                        onChange={(e) => {
                                            const updated = [...formData.productVariants];

                                            updated[index].color = e.target.value;

                                            setFormData({
                                                ...formData,
                                                productVariants: updated,
                                            });
                                        }}
                                    />

                                    <Box
                                        sx={{
                                            width: 35,
                                            height: 35,
                                            borderRadius: "50%",
                                            border: "1px solid #ccc",
                                            backgroundColor: CSS.supports(
                                                "color",
                                                variant.color || ""
                                            )
                                                ? variant.color
                                                : "#ffffff",
                                        }}
                                    />
                                </Box>
                            </Grid>

                            {/* SKU */}
                            <Grid size={{ xs: 12, md: 3 }}>
                                <TextField
                                    fullWidth
                                    label="SKU"
                                    value={variant.sku}
                                    onChange={(e) => {
                                        const updated = [...formData.productVariants];

                                        updated[index].sku = e.target.value;

                                        setFormData({
                                            ...formData,
                                            productVariants: updated,
                                        });
                                    }}
                                />
                            </Grid>

                            {/* Barcode */}
                            <Grid size={{ xs: 12, md: 3 }}>
                                <TextField
                                    fullWidth
                                    label="Barcode"
                                    value={variant.barcode}
                                    onChange={(e) => {
                                        const updated = [...formData.productVariants];

                                        updated[index].barcode = e.target.value;

                                        setFormData({
                                            ...formData,
                                            productVariants: updated,
                                        });
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                ))}
            </Grid>










            <Grid size={12}>
                <TextField
                    fullWidth

                    multiline

                    rows={4}

                    label="Description"

                    name="description"

                    value={formData.description}

                    onChange={handleChange}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    type="number"

                    fullWidth

                    label="Purchase Price"

                    name="purchasePrice"

                    value={formData.purchasePrice}

                    onChange={handleChange}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    type="number"

                    fullWidth

                    label="Selling Price"

                    name="sellingPrice"

                    value={formData.sellingPrice}

                    onChange={handleChange}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                    type="number"

                    fullWidth

                    label="GST %"

                    name="gst"

                    value={formData.gst}

                    onChange={handleChange}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                    type="number"

                    fullWidth

                    label="Discount %"

                    name="discount"

                    value={formData.discount}

                    onChange={handleChange}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                    type="number"

                    fullWidth

                    label="Reorder Level"

                    name="reorderLevel"

                    value={formData.reorderLevel}

                    onChange={handleChange}
                />
            </Grid>

            <Grid size={12}>
                <Typography>Product Images (Maximum 5)</Typography>

                <input
                    type="file"

                    multiple

                    accept="image/*"

                    onChange={handleImages}
                />
            </Grid>

            <Grid size={12}>
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        flexWrap: "wrap",
                    }}
                >
                    {formData.images.map((img, index) => (
                        <Box key={index}>
                            <img
                                src={URL.createObjectURL(img)}

                                width="100"

                                height="100"

                                style={{
                                    objectFit: "cover",
                                }}
                            />

                            <Button
                                size="small"

                                color="error"

                                onClick={() => removeImage(index)}
                            >
                                Remove
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Grid>

            <Grid size={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={formData.isFeatured}

                            name="isFeatured"

                            onChange={handleChange}
                        />
                    }

                    label="Featured"
                />
            </Grid>

            <Grid size={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={formData.isActive}

                            name="isActive"

                            onChange={handleChange}
                        />
                    }

                    label="Active"
                />
            </Grid>
        </Grid>
    );
};

export default ProductForm;

