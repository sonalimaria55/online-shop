// import { useEffect, useState } from "react";

// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
// } from "@mui/material";

// import { useDispatch } from "react-redux";

// import {
//   createProduct,
//   updateProduct,
// } from "../../../features/products/ProductsThunk";

// import ProductForm from "./ProductForm";

// const ProductDialog = ({ open, onClose, product, refreshProducts }) => {
//   const dispatch = useDispatch();

//   const initialState = {
//     productCode: "",
//     productName: "",
//     category: "",
//     brand: "",
//     description: "",

//   units: [],

//     purchasePrice: "",
//     sellingPrice: "",

//     gst: 0,
//     discount: 0,

//     reorderLevel: 0,

//     isFeatured: false,
//     isActive: true,

//     productVariants: [],

//     images: [],
//   };

//   const [formData, setFormData] = useState(initialState);

//   useEffect(() => {
//     if (product) {
//       setFormData({
//         ...initialState,

//         ...product,

//         category: product.category?._id || product.category || "",

//        units: product.units || [],

//         images: [],
//       });
//     } else {
//       setFormData(initialState);
//     }
//   }, [product]);

// //   useEffect(() => {
// //     console.log("FORM DATA CHANGED");
// //     console.log(formData);
// //     console.log(formData.productVariants);
// //   }, [formData]);
// console.log("Variants:", variants);
// console.log("Size Variant:", sizeVariant);
//   const handleSubmit = async () => {
//   //  console.log("Product Data:", formData);

//     console.log("Units:", formData.units);
// console.log("Variants:", formData.productVariants);

//     const data = new FormData();

//     Object.keys(formData).forEach((key) => {
//       if (key !== "images" && key !== "productVariants" && key !== "units") {
//         data.append(key, formData[key]);
//       }
//     });

//     data.append("units", JSON.stringify(formData.units));

//     data.append("productVariants", JSON.stringify(formData.productVariants));

//     formData.images.forEach((image) => {
//       data.append("images", image);
//     });

//     if (product) {
//       await dispatch(
//         updateProduct({
//           id: product._id,

//           data,
//         }),
//       );
//     } else {
//       await dispatch(createProduct(data));
//     }

//     refreshProducts();

//     onClose();
//   };

//   return (
//     <Dialog
//       open={open}

//       onClose={onClose}

//       maxWidth="md"

//       fullWidth
//     >
//       <DialogTitle>{product ? "Edit Product" : "Add Product"}</DialogTitle>

//       <DialogContent>
//         <ProductForm
//           formData={formData}

//           setFormData={setFormData}
//         />
//       </DialogContent>

//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>

//         <Button
//           variant="contained"

//           onClick={handleSubmit}
//         >
//           {product ? "Update" : "Save"}
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default ProductDialog;
//----------------------------------------------------------------------------


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

const ProductDialog = ({
  open,
  onClose,
  product,
  refreshProducts,
}) => {
  const dispatch = useDispatch();

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

    reorderLevel: 0,

    isFeatured: false,
    isActive: true,

    productVariants: [],

    images: [],
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
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
  }, [product]);

  const handleSubmit = async () => {
    console.log("Units:", formData.units);
    console.log("Variants:", formData.productVariants);

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      if (
        key !== "images" &&
        key !== "productVariants" &&
        key !== "units"
      ) {
        data.append(key, formData[key]);
      }
    });

    data.append("units", JSON.stringify(formData.units));

    data.append(
      "productVariants",
      JSON.stringify(formData.productVariants)
    );

    formData.images.forEach((image) => {
      data.append("images", image);
    });

    if (product) {
      await dispatch(
        updateProduct({
          id: product._id,
          data,
        })
      );
    } else {
      await dispatch(createProduct(data));
    }

    refreshProducts();
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>
        {product ? "Edit Product" : "Add Product"}
      </DialogTitle>

      <DialogContent>
        <ProductForm
          formData={formData}
          setFormData={setFormData}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

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