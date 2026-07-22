// // import { useState } from "react";
// // import { useDispatch } from "react-redux";

// // import {
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   Button,
// //   TextField,
// //   Stack,
// // } from "@mui/material";

// // import { createProduct } from "../../features/products/ProductsThunk";


// // const ProductDialog = ({ open, onClose }) => {

// //   const dispatch = useDispatch();


// //   const [form, setForm] = useState({

// //     productName: "",
// //     brand: "",
// //     purchasePrice: "",
// //     sellingPrice: "",
// //     initialStock: ""

// //   });



// //   const handleChange = (e) => {

// //     setForm({

// //       ...form,

// //       [e.target.name]: e.target.value

// //     });

// //   };



// // const handleSubmit = () => {

// //   const formData = new FormData();

// //   formData.append("productName", form.productName);
// //   formData.append("brand", form.brand);
// //   formData.append("purchasePrice", form.purchasePrice);
// //   formData.append("sellingPrice", form.sellingPrice);
// //   formData.append("initialStock", form.initialStock);


// //   if(image){
// //     formData.append("image", image);
// //   }


// //   for(let pair of formData.entries()){
// //     console.log(pair[0], pair[1]);
// //   }


// //   dispatch(createProduct(formData));

// //   onClose();

// // };


// //   return (

// //     <Dialog
// //       open={open}
// //       onClose={onClose}
// //       fullWidth
// //       maxWidth="sm"
// //     >


// //       <DialogTitle>
// //         Add Product
// //       </DialogTitle>



// //       <DialogContent>


// //         <Stack
// //           spacing={2}
// //           mt={2}
// //         >


// //           <TextField

// //             label="Product Name"

// //             name="productName"

// //             value={form.productName}

// //             onChange={handleChange}

// //           />



// //           <TextField

// //             label="Brand"

// //             name="brand"

// //             value={form.brand}

// //             onChange={handleChange}

// //           />



// //           <TextField

// //             label="Purchase Price"

// //             name="purchasePrice"

// //             value={form.purchasePrice}

// //             onChange={handleChange}

// //           />



// //           <TextField

// //             label="Selling Price"

// //             name="sellingPrice"

// //             value={form.sellingPrice}

// //             onChange={handleChange}

// //           />



// //           <TextField

// //             label="Initial Stock"

// //             name="initialStock"

// //             value={form.initialStock}

// //             onChange={handleChange}

// //           />


// //         </Stack>


// //       </DialogContent>



// //       <DialogActions>


// //         <Button onClick={onClose}>
// //           Cancel
// //         </Button>


// //         <Button
// //           variant="contained"
// //           onClick={handleSubmit}
// //         >
// //           Save
// //         </Button>


// //       </DialogActions>


// //     </Dialog>

// //   );

// // };


// // export default ProductDialog;

// import { useEffect, useState } from "react";

// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
//   Stack,
// } from "@mui/material";

// import { useDispatch } from "react-redux";

// import {
//   createProduct,
//   updateProduct,
// } from "../../features/products/ProductsThunk";


// const ProductDialog = ({
//   open,
//   onClose,
//   product
// }) => {


// const dispatch = useDispatch();



// const initialForm = {

//   productName:"",
//   brand:"",
//   purchasePrice:"",
//   sellingPrice:"",
//   initialStock:"",
//   image:null

// };



// const [form,setForm] =
// useState(initialForm);




// useEffect(()=>{


// if(product){

// setForm({

// productName: product.productName || "",

// brand: product.brand || "",

// purchasePrice: product.purchasePrice || "",

// sellingPrice: product.sellingPrice || "",

// initialStock: product.initialStock || "",

// image:null

// });


// }
// else{

// setForm(initialForm);

// }


// },[product,open]);






// const handleChange=(e)=>{


// setForm({

// ...form,

// [e.target.name]:e.target.value

// });


// };





// const handleImage=(e)=>{


// setForm({

// ...form,

// image:e.target.files[0]

// });


// };





// const handleSubmit=()=>{


// const data = new FormData();



// data.append(
// "productName",
// form.productName
// );



// data.append(
// "brand",
// form.brand
// );



// data.append(
// "purchasePrice",
// form.purchasePrice
// );



// data.append(
// "sellingPrice",
// form.sellingPrice
// );



// data.append(
// "initialStock",
// form.initialStock
// );




// if(form.image){

// data.append(
// "image",
// form.image
// );

// }




// if(product){


// dispatch(
// updateProduct({
// id:product._id,
// data
// })
// );


// }
// else{


// dispatch(
// createProduct(data)
// );


// }



// onClose();


// };






// return (

// <Dialog
// open={open}
// onClose={onClose}
// fullWidth
// maxWidth="sm"
// >


// <DialogTitle>

// {
// product
// ?
// "Edit Product"
// :
// "Add Product"
// }

// </DialogTitle>




// <DialogContent>

// <Stack
// spacing={2}
// mt={2}
// >



// <TextField

// label="Product Name"

// name="productName"

// value={form.productName}

// onChange={handleChange}

// />




// <TextField

// label="Brand"

// name="brand"

// value={form.brand}

// onChange={handleChange}

// />




// <TextField

// label="Purchase Price"

// name="purchasePrice"

// type="number"

// value={form.purchasePrice}

// onChange={handleChange}

// />




// <TextField

// label="Selling Price"

// name="sellingPrice"

// type="number"

// value={form.sellingPrice}

// onChange={handleChange}

// />




// <TextField

// label="Initial Stock"

// name="initialStock"

// type="number"

// value={form.initialStock}

// onChange={handleChange}

// />




// <Button
// variant="outlined"
// component="label"
// >

// Upload Image

// <input

// hidden

// type="file"

// onChange={handleImage}

// />

// </Button>




// </Stack>

// </DialogContent>




// <DialogActions>


// <Button
// onClick={onClose}
// >

// Cancel

// </Button>



// <Button

// variant="contained"

// onClick={handleSubmit}

// >

// Save

// </Button>


// </DialogActions>



// </Dialog>

// );

// };


// export default ProductDialog;


import { useEffect, useState } from "react";
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
} from "@mui/material";
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
  category: "",
  brand: "",
  purchasePrice: "",
  sellingPrice: "",
  initialStock: "",
  image: null,
};

const ProductDialog = ({ open, onClose, product }) => {
  const dispatch = useDispatch();
  
  // Safe default for categories array
  const { categories = [] } = useSelector((state) => state.categories);

  const [form, setForm] = useState(initialForm);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (product) {
      setForm({
        productCode: product.productCode || "",
        sku: product.sku || "",
        productName: product.productName || "",
        brand: product.brand || "",
        category: product.category?._id || product.category || "",
        purchasePrice: product.purchasePrice || "",
        sellingPrice: product.sellingPrice || "",
        initialStock: product.initialStock || "",
        image: null,
      });
      setPreview(product.image || null);
    } else {
      setForm(initialForm);
      setPreview(null);
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
    const file = e.target.files[0];
    if (file) {
      setForm({
        ...form,
        image: file,
      });
      setPreview(URL.createObjectURL(file));
    }
  };

 const handleSubmit = () => {

  const data = new FormData();

  Object.keys(form).forEach((key) => {

    if (
      form[key] !== null &&
      form[key] !== undefined &&
      form[key] !== ""
    ) {

      data.append(
        key,
        form[key]
      );

    }

  });

  if (product) {

    dispatch(
      updateProduct({
        id: product._id,
        data,
      })
    );

  } else {

    dispatch(
      createProduct(data)
    );

  }

  setForm(initialForm);

  setPreview(null);

  onClose();

};

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{product ? "Edit Product" : "Add Product"}</DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={2}>
          <TextField
            label="Product Code"
            name="productCode"
            value={form.productCode}
            onChange={handleChange}
          />

          <TextField
            label="SKU"
            name="sku"
            value={form.sku}
            onChange={handleChange}
          />

          <TextField
            label="Product Name"
            name="productName"
            value={form.productName}
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
                <MenuItem key={cat._id} value={cat._id}>
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

          <Button variant="outlined" component="label">
            Upload Product Image
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
          </Button>

          {preview && (
            <Box>
              <Typography>Image Preview</Typography>
              <img src={preview} alt="preview" width="120" />
            </Box>
          )}
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;