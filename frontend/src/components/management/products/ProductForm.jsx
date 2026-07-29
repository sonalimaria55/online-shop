// import React, { useEffect, useState } from "react";
// import {
//     Box,
//     Grid,
//     Paper,
//     Button,
//     Divider,
//     Typography,
//     TextField,
//     MenuItem,
// } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";

// import { getCategories } from "../../../features/categories/CategoriesThunk";
// import { getVariants } from "../../../features/variants/VariantThunk";
// import ProductVariants from "./ProductVariants";

// const ProductForm = ({ formData, setFormData }) => {

//     const dispatch = useDispatch();

//     const { categories = [] } = useSelector(
//         (state) => state.categories
//     );

//     useEffect(() => {
//         dispatch(getCategories());
//         dispatch(getVariants());
//     }, [dispatch]);

//     const [colorName, setColorName] = useState("");
//     const [colorCode, setColorCode] = useState("#000000");

//     const handleChange = (e) => {
//         setFormData((prev) => ({
//             ...prev,
//             [e.target.name]: e.target.value,
//         }));
//     };

//     const handleImageChange = (e) => {
//         const files = Array.from(e.target.files);

//         const allImages = [
//             ...(formData.images || []),
//             ...files,
//         ];

//         if (allImages.length > 5) {
//             alert("Maximum 5 images allowed");
//             return;
//         }

//         setFormData((prev) => ({
//             ...prev,
//             images: allImages,
//         }));

//         e.target.value = "";
//     };

//     const removeImage = (index) => {
//         setFormData((prev) => ({
//             ...prev,
//             images: prev.images.filter(
//                 (_, i) => i !== index
//             ),
//         }));
//     };

//     const addColor = () => {

//         if (!colorName.trim()) return;

//         setFormData((prev) => ({
//             ...prev,
//             colors: [
//                 ...(prev.colors || []),
//                 {
//                     name: colorName,
//                     code: colorCode,
//                 },
//             ],
//         }));

//         setColorName("");
//         setColorCode("#000000");
//     };

//     const removeColor = (index) => {

//         setFormData((prev) => ({
//             ...prev,
//             colors: prev.colors.filter(
//                 (_, i) => i !== index
//             ),
//         }));

//     };

//     return (

//         <Box>

//             <Typography
//                 variant="h6"
//                 mb={2}
//             >
//                 Product Information
//             </Typography>

//             <Grid container spacing={2}>

//                 <Grid item xs={12} md={6}>
//                     <TextField
//                         fullWidth
//                         label="Product Code"
//                         name="productCode"
//                         value={formData.productCode}
//                         onChange={handleChange}
//                     />
//                 </Grid>

//                 <Grid item xs={12} md={6}>
//                     <TextField
//                         fullWidth
//                         label="Product Name"
//                         name="productName"
//                         value={formData.productName}
//                         onChange={handleChange}
//                     />
//                 </Grid>

//                 <Grid item xs={12} md={6}>
//                     <TextField
//                         select
//                         fullWidth
//                         label="Category"
//                         name="category"
//                         value={formData.category}
//                         onChange={handleChange}
//                     >
//                         {categories.map((cat) => (
//                             <MenuItem
//                                 key={cat._id}
//                                 value={cat._id}
//                             >
//                                 {cat.categoryName}
//                             </MenuItem>
//                         ))}
//                     </TextField>
//                 </Grid>

//                 <Grid item xs={12} md={6}>
//                     <TextField
//                         fullWidth
//                         label="Brand"
//                         name="brand"
//                         value={formData.brand}
//                         onChange={handleChange}
//                     />
//                 </Grid>

//                 <Grid item xs={12}>
//                     <TextField
//                         multiline
//                         rows={4}
//                         fullWidth
//                         label="Description"
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                     />
//                 </Grid>

//                 <Grid item xs={12} md={3}>
//                     <TextField
//                         fullWidth
//                         type="number"
//                         label="Purchase Price"
//                         name="purchasePrice"
//                         value={formData.purchasePrice}
//                         onChange={handleChange}
//                     />
//                 </Grid>

//                 <Grid item xs={12} md={3}>
//                     <TextField
//                         fullWidth
//                         type="number"
//                         label="Selling Price"
//                         name="sellingPrice"
//                         value={formData.sellingPrice}
//                         onChange={handleChange}
//                     />
//                 </Grid>

//                 <Grid item xs={12} md={3}>
//                     <TextField
//                         fullWidth
//                         type="number"
//                         label="GST %"
//                         name="gst"
//                         value={formData.gst}
//                         onChange={handleChange}
//                     />
//                 </Grid>

//                 <Grid item xs={12} md={3}>
//                     <TextField
//                         fullWidth
//                         type="number"
//                         label="Discount %"
//                         name="discount"
//                         value={formData.discount}
//                         onChange={handleChange}
//                     />
//                 </Grid>

//             </Grid>

//             <Divider sx={{ my: 3 }} />

//             <Typography variant="h6">
//                 Product Images
//             </Typography>

//             <Button
//                 component="label"
//                 variant="outlined"
//                 sx={{ mt: 2 }}
//             >
//                 Upload Images

//                 <input
//                     hidden
//                     multiple
//                     accept="image/*"
//                     type="file"
//                     onChange={handleImageChange}
//                 />
//             </Button>

//             <Box
//                 sx={{
//                     display: "flex",
//                     gap: 2,
//                     mt: 2,
//                     flexWrap: "wrap",
//                 }}
//             >
//                 {(formData.images || []).map(
//                     (image, index) => (

//                         <Box
//                             key={index}
//                             sx={{
//                                 width: 120,
//                                 height: 120,
//                                 position: "relative",
//                                 border: "1px solid #ddd",
//                                 overflow: "hidden",
//                                 borderRadius: 2,
//                             }}
//                         >

//                             <img
//                                 alt=""
//                                 src={
//                                     image instanceof File
//                                         ? URL.createObjectURL(image)
//                                         : image.url || image
//                                 }
//                                 style={{
//                                     width: "100%",
//                                     height: "100%",
//                                     objectFit: "cover",
//                                 }}
//                             />

//                             <Button
//                                 color="error"
//                                 variant="contained"
//                                 size="small"
//                                 sx={{
//                                     position: "absolute",
//                                     top: 5,
//                                     right: 5,
//                                     minWidth: 28,
//                                     width: 28,
//                                     height: 28,
//                                     borderRadius: "50%",
//                                 }}
//                                 onClick={() =>
//                                     removeImage(index)
//                                 }
//                             >
//                                 ×
//                             </Button>

//                         </Box>

//                     )
//                 )}
//             </Box>

//             <Divider sx={{ my: 4 }} />

//             <ProductVariants
//                 defaultPrice={formData.sellingPrice}
//                 onChange={(rows) =>
//                     setFormData((prev) => ({
//                         ...prev,
//                         productVariants: rows,
//                     }))
//                 }
//             />
//                         <Divider sx={{ my: 4 }} />

//             <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 mb={2}
//             >
//                 Add all available colors for this product.
//             </Typography>

//             <Grid container spacing={2}>

//                 <Grid item xs={12} md={4}>
//                     <TextField
//                         fullWidth
//                         label="Color Name"
//                         value={colorName}
//                         onChange={(e) =>
//                             setColorName(e.target.value)
//                         }
//                     />
//                 </Grid>

//                 <Grid item xs={12} md={3}>
//                     <TextField
//                         fullWidth
//                         type="color"
//                         value={colorCode}
//                         onChange={(e) =>
//                             setColorCode(e.target.value)
//                         }
//                     />
//                 </Grid>

//                 <Grid item xs={12} md={2}>
//                     <Button
//                         fullWidth
//                         variant="contained"
//                         sx={{ height: 56 }}
//                         onClick={addColor}
//                     >
//                         Add Color
//                     </Button>
//                 </Grid>

//             </Grid>

//             <Box mt={2}>
//                 {(formData.colors || []).map(
//                     (color, index) => (

//                         <Paper
//                             key={index}
//                             sx={{
//                                 p: 2,
//                                 mb: 2,
//                                 display: "flex",
//                                 justifyContent: "space-between",
//                                 alignItems: "center",
//                             }}
//                         >

//                             <Box
//                                 display="flex"
//                                 alignItems="center"
//                                 gap={2}
//                             >

//                                 <Box
//                                     sx={{
//                                         width: 24,
//                                         height: 24,
//                                         borderRadius: "50%",
//                                         backgroundColor: color.code,
//                                         border: "1px solid #ccc",
//                                     }}
//                                 />

//                                 <Typography>
//                                     {color.name} ({color.code})
//                                 </Typography>

//                             </Box>

//                             <Button
//                                 color="error"
//                                 onClick={() =>
//                                     removeColor(index)
//                                 }
//                             >
//                                 Remove
//                             </Button>

//                         </Paper>

//                     )
//                 )}
//             </Box>

//             <Divider sx={{ my: 4 }} />

//             <Typography
//                 variant="h6"
//                 gutterBottom
//             >
//                 Generated Variants
//             </Typography>

//             {(formData.productVariants || []).map(
//                 (variant, index) => (

//                     <Paper
//                         key={index}
//                         sx={{
//                             p: 2,
//                             mb: 2,
//                         }}
//                     >

//                         <Typography
//                             fontWeight={600}
//                             mb={2}
//                         >
//                             {variant.attributes
//                                 ?.map(
//                                     (attr) =>
//                                         `${attr.variantName}: ${attr.value}`
//                                 )
//                                 .join(" | ")}
//                         </Typography>

//                         <Grid
//                             container
//                             spacing={2}
//                         >

//                             <Grid item xs={12} md={3}>
//                                 <TextField
//                                     fullWidth
//                                     label="SKU"
//                                     value={variant.sku}
//                                     onChange={(e) => {

//                                         const updated = [...formData.productVariants];

//                                         updated[index].sku = e.target.value;

//                                         setFormData((prev) => ({
//                                             ...prev,
//                                             productVariants: updated,
//                                         }));

//                                     }}
//                                 />
//                             </Grid>

//                             <Grid item xs={12} md={3}>
//                                 <TextField
//                                     fullWidth
//                                     label="Barcode"
//                                     value={variant.barcode}
//                                     onChange={(e) => {

//                                         const updated = [...formData.productVariants];

//                                         updated[index].barcode = e.target.value;

//                                         setFormData((prev) => ({
//                                             ...prev,
//                                             productVariants: updated,
//                                         }));

//                                     }}
//                                 />
//                             </Grid>

//                             <Grid item xs={12} md={2}>
//                                 <TextField
//                                     fullWidth
//                                     type="number"
//                                     label="Stock"
//                                     value={variant.stock}
//                                     onChange={(e) => {

//                                         const updated = [...formData.productVariants];

//                                         updated[index].stock = Number(e.target.value);

//                                         setFormData((prev) => ({
//                                             ...prev,
//                                             productVariants: updated,
//                                         }));

//                                     }}
//                                 />
//                             </Grid>

//                             <Grid item xs={12} md={2}>
//                                 <TextField
//                                     fullWidth
//                                     type="number"
//                                     label="Price"
//                                     value={variant.sellingPrice}
//                                     onChange={(e) => {

//                                         const updated = [...formData.productVariants];

//                                         updated[index].sellingPrice = Number(e.target.value);

//                                         setFormData((prev) => ({
//                                             ...prev,
//                                             productVariants: updated,
//                                         }));

//                                     }}
//                                 />
//                             </Grid>

//                             <Grid item xs={12} md={2}>
//                                 <Button
//                                     fullWidth
//                                     variant="contained"
//                                     color="error"
//                                     sx={{ height: 56 }}
//                                     onClick={() => {

//                                         const updated =
//                                             formData.productVariants.filter(
//                                                 (_, i) => i !== index
//                                             );

//                                         setFormData((prev) => ({
//                                             ...prev,
//                                             productVariants: updated,
//                                         }));

//                                     }}
//                                 >
//                                     Remove
//                                 </Button>
//                             </Grid>

//                         </Grid>

//                     </Paper>

//                 )
//             )}

//         </Box>

//     );

// };

// export default ProductForm;
//------------------------------------------------------------------------
import { useEffect, useState } from "react";

import {
  Grid,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { getCategories } from "../../../features/categories/CategoriesThunk";

import ProductVariants from "./ProductVariants";

const ProductForm = ({ formData, setFormData }) => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]: value,
    }));
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]: checked,
    }));
  };

  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    setFormData((prev) => ({
      ...prev,

      images: files,
    }));
  };

  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        {/* Product Code */}

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth

            label="Product Code"

            name="productCode"

            value={formData.productCode}

            onChange={handleChange}
          />
        </Grid>

        {/* Product Name */}

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth

            label="Product Name"

            name="productName"

            value={formData.productName}

            onChange={handleChange}
          />
        </Grid>

        {/* Category */}

        <Grid item xs={12} sm={6}>
          <TextField
            select

            fullWidth

            label="Category"

            name="category"

            value={formData.category}

            onChange={handleChange}
          >
            {categories?.map((cat) => (
              <MenuItem
                key={cat._id}

                value={cat._id}
              >
                {cat.categoryName}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Brand */}

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth

            label="Brand"

            name="brand"

            value={formData.brand}

            onChange={handleChange}
          />
        </Grid>

        {/* Description */}

        <Grid item xs={12}>
          <TextField
            fullWidth

            multiline

            rows={3}

            label="Description"

            name="description"

            value={formData.description}

            onChange={handleChange}
          />
        </Grid>

        {/* Purchase Price */}

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth

            type="number"

            label="Purchase Price"

            name="purchasePrice"

            value={formData.purchasePrice}

            onChange={handleChange}
          />
        </Grid>

        {/* Selling Price */}

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth

            type="number"

            label="Selling Price"

            name="sellingPrice"

            value={formData.sellingPrice}

            onChange={handleChange}
          />
        </Grid>

        {/* GST */}

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth

            type="number"

            label="GST %"

            name="gst"

            value={formData.gst}

            onChange={handleChange}
          />
        </Grid>

        {/* Discount */}

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth

            type="number"

            label="Discount %"

            name="discount"

            value={formData.discount}

            onChange={handleChange}
          />
        </Grid>

        {/* Reorder Level */}

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth

            type="number"

            label="Reorder Level"

            name="reorderLevel"

            value={formData.reorderLevel}

            onChange={handleChange}
          />
        </Grid>

        {/* Featured */}

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.isFeatured}

                onChange={handleCheckbox}

                name="isFeatured"
              />
            }

            label="Featured Product"
          />
        </Grid>

        {/* Active */}

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.isActive}

                onChange={handleCheckbox}

                name="isActive"
              />
            }

            label="Active"
          />
        </Grid>

        {/* Images */}

        <Grid item xs={12}>
          <Typography>Product Images (Max 5)</Typography>

          <input
            type="file"

            multiple

            accept="image/*"

            onChange={handleImages}
          />
        </Grid>

        {/* Variants */}

        <Grid item xs={12}>
          <ProductVariants formData={formData} setFormData={setFormData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductForm;
