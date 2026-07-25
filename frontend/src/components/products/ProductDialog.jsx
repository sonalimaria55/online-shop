
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  createProduct,
  updateProduct,
} from "../../features/products/ProductsThunk";

import { getCategories } from "../../features/categories/CategoriesThunk";

const initialForm = {
  productCode: "",

  sku: "",

  productName: "",

  barcode: "",

  category: "",

  brand: "",

  description: "",

  unit: "piece",

  purchasePrice: "",

  sellingPrice: "",

  gst: "",

  discount: "",

  initialStock: "",

  reorderLevel: "",

  images: [],

  isFeatured: false,
};

const ProductDialog = ({ open, onClose, product }) => {
  const dispatch = useDispatch();

  const { categories = [] } = useSelector((state) => state.categories);

  const [form, setForm] = useState(initialForm);

  const [preview, setPreview] = useState([]);

  useEffect(() => {
    if (product) {
      setForm({
        productCode: product.productCode || "",

        sku: product.sku || "",

        productName: product.productName || "",

        barcode: product.barcode || "",

        category: product.category?._id || "",

        brand: product.brand || "",

        description: product.description || "",

        unit: product.unit || "piece",

        purchasePrice: product.purchasePrice || "",

        sellingPrice: product.sellingPrice || "",

        gst: product.gst || "",

        discount: product.discount || "",

        initialStock: product.initialStock || "",

        reorderLevel: product.reorderLevel || "",

        images: [],

        isFeatured: product.isFeatured || false,
      });

      setPreview(product.images?.map((img) => img.url) || []);
    } else {
      setForm(initialForm);

      setPreview([]);
    }
  }, [product, open]);

  useEffect(() => {
    if (open) {
      dispatch(getCategories());
    }
  }, [dispatch, open]);

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {

    const newFiles = Array.from(e.target.files);

    setForm((prev) => {

      const allFiles = [...prev.images, ...newFiles];

      if (allFiles.length > 5) {
        alert("Maximum 5 images allowed");
        return prev;
      }

      setPreview(
        allFiles.map(file => URL.createObjectURL(file))
      );

      return {
        ...prev,
        images: allFiles,
      };

    });

  };
  const handleSubmit = () => {
    const data = new FormData();

    Object.keys(form).forEach((key) => {
      if (key !== "images") {
        data.append(key, form[key]);
      }
    });

    form.images.forEach((image) => {
      data.append("images", image);
    });

    if (product) {
      dispatch(
        updateProduct({
          id: product._id,

          data,
        }),
      );
    } else {
      dispatch(createProduct(data));
    }

    setForm(initialForm);

    setPreview([]);

    onClose();
  };

  return (
    <Dialog
      open={open}

      onClose={onClose}

      fullWidth

      maxWidth="sm"
    >
      <DialogTitle>{product ? "Edit Product" : "Add Product"}</DialogTitle>

      <DialogContent sx={{ pt: 3 }}>
        <Stack spacing={2} mt={2}>
          <TextField
            required

            label="Product Code"

            name="productCode"

            value={form.productCode}

            onChange={handleChange}
          />

          <TextField
            required

            label="SKU"

            name="sku"

            value={form.sku}

            onChange={handleChange}
          />

          <TextField
            required

            label="Product Name"

            name="productName"

            value={form.productName}

            onChange={handleChange}
          />

          <TextField
            label="Barcode"

            name="barcode"

            value={form.barcode}

            onChange={handleChange}
          />

          <TextField
            label="Description"

            name="description"

            multiline

            rows={3}

            value={form.description}

            onChange={handleChange}
          />

          <FormControl fullWidth>
            <InputLabel>Unit</InputLabel>

            <Select
              name="unit"

              value={form.unit}

              label="Unit"

              onChange={handleChange}
            >
              <MenuItem value="piece">Piece</MenuItem>
              <MenuItem value="Free Size">Free Size</MenuItem>
              <MenuItem value="XS">XS</MenuItem>
              <MenuItem value="S">S</MenuItem>
              <MenuItem value="M">M</MenuItem>
              <MenuItem value="L">L</MenuItem>
              <MenuItem value="XL">XL</MenuItem>
              <MenuItem value="XXL">XXL</MenuItem>
              <MenuItem value="3XL">3XL</MenuItem>
              <MenuItem value="4XL">4XL</MenuItem>
              <MenuItem value="kg">Kg</MenuItem>
              <MenuItem value="meter">Meter</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="GST (%)"
            name="gst"
            type="number"
            value={form.gst}
            onChange={handleChange}
          />

          <TextField
            label="Discount (%)"
            name="discount"
            type="number"
            value={form.discount}
            onChange={handleChange}
          />

          <TextField
            label="Reorder Level"
            name="reorderLevel"
            type="number"
            value={form.reorderLevel}
            onChange={handleChange}
          />

          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>

            <Select
              name="category"

              value={form.category}
              label="Category"

              onChange={handleChange}
            >
              <MenuItem value="">None</MenuItem>

              {categories.map((cat) => (
                <MenuItem
                  key={cat._id}

                  value={cat._id}
                >
                  {cat.categoryName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Brand"
            name="brand"
            value={form.brand}
            onChange={handleChange}
          />
          <TextField
            label="Purchase Price"
            name="purchasePrice"
            type="number"
            value={form.purchasePrice}
            onChange={handleChange}
          />
          <TextField
            required
            label="Selling Price"
            name="sellingPrice"
            type="number"
            value={form.sellingPrice}
            onChange={handleChange}
          />
          <TextField
            label="Initial Stock"
            name="initialStock"
            type="number"
            value={form.initialStock}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={form.isFeatured}
                onChange={(e) => {
                  setForm({
                    ...form,
                    isFeatured: e.target.checked,
                  });
                }}
              />
            }
            label="Featured Product"
          />
          <Button
            variant="outlined"
            component="label"
          >
            Upload Product Images
            <input
              hidden
              multiple
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
          </Button>
          {preview.length > 0 && (
            <Box>
              <Typography>Image Preview</Typography>
              <Stack
                direction="row"
                spacing={2}
                mt={1}
              >
                {preview.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Preview ${index + 1}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      border: "1px solid #ddd",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          )}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          variant="contained"

          onClick={handleSubmit}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ProductDialog;

