import { useEffect, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import { useDispatch } from "react-redux";

import {
  createProduct,
  updateProduct,
} from "../../../features/products/ProductsThunk";

import ProductForm from "./ProductForm";

const initialState = {
  productCode: "",

  productName: "",

  category: "",

  brand: "",

  description: "",

  units: [],

  purchasePrice: "",

  sellingPrice: "",

  gst: 0,

  discount: 0,

  reorderLevel: 5,

  isFeatured: false,

  isActive: true,

  productVariants: [],

  images: [],
};

const ProductDialog = ({ open, onClose, product, refreshProducts }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);

  // useEffect(() => {
  //   if (product) {
  //     setFormData({
  //       ...initialState,

  //       ...product,

  //       category: product.category?._id || product.category || "",

  //       units: product.units || [],

  //       productVariants: product.productVariants || [],

  //       images: [],
  //     });
  //   } else {
  //     setFormData(initialState);
  //   }
  // }, [product, open]);




  useEffect(() => {

    console.log("Dialog opened", open);

    if (!open) return;

    if (product) {

        setFormData({
            ...initialState,
            ...product,
            category: product.category?._id || product.category || "",
            units: product.units || [],
            productVariants: product.productVariants || [],
            images: [],
        });

    } else {

        setFormData(initialState);

    }

}, [open, product]);
  // const handleSubmit = async () => {
  //   const data = new FormData();

  //   Object.entries(formData).forEach(([key, value]) => {
  //     if (key !== "images" && key !== "productVariants" && key !== "units") {
  //       data.append(key, value);
  //     }
  //   });

  //   data.append("units", JSON.stringify(formData.units));

  //   data.append("productVariants", JSON.stringify(formData.productVariants));

  //   formData.images.forEach((image) => {
  //     data.append("images", image);
  //   });

  //   let result;

  //   if (product) {
  //     result = await dispatch(
  //       updateProduct({
  //         id: product._id,
  //         data,
  //       }),
  //     );
  //   } else {
  //     result = await dispatch(createProduct(data));
  //   }

  //   if (result.meta.requestStatus === "fulfilled") {
  //     refreshProducts();

  //     onClose();
  //   }
  // };




const handleSubmit = async () => {

    console.log("===== SUBMIT =====");
    console.log(formData);

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {

        console.log(key, value);

        if (
            key !== "images" &&
            key !== "productVariants" &&
            key !== "units"
        ) {
            data.append(key, value);
        }

    });

    data.append("units", JSON.stringify(formData.units));
    data.append("productVariants", JSON.stringify(formData.productVariants));

    formData.images.forEach((image) => {
        data.append("images", image);
    });

    let result;

    if (product) {

        result = await dispatch(
            updateProduct({
                id: product._id,
                data,
            })
        );

    } else {

        result = await dispatch(createProduct(data));

    }

    if (result.meta.requestStatus === "fulfilled") {

        refreshProducts();
        onClose();

    }

};

  return (
    <Dialog
      open={open}

      onClose={onClose}

      maxWidth="md"

      fullWidth
    >
      <DialogTitle>{product ? "Edit Product" : "Add Product"}</DialogTitle>

      <DialogContent>
        <ProductForm
          formData={formData}

          setFormData={setFormData}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button
          variant="contained"

          onClick={handleSubmit}
        >
          {product ? "Update" : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
