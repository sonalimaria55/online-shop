// // import { useEffect, useState } from "react";

// // import {
// //   Box,
// //   Paper,
// //   Typography,
// //   Button,
// // } from "@mui/material";

// // import AddIcon from "@mui/icons-material/Add";

// // import { useDispatch, useSelector } from "react-redux";

// // import {
// //   getProducts,
// // } from "../../features/products/ProductsThunk";


// // import ProductTable from "./ProductTable";
// // import ProductDialog from "./ProductDialog";



// // const ProductManagement = () => {


// // const dispatch = useDispatch();


// // const {
// //   products,
// //   loading
// // } = useSelector(
// //   (state)=>state.products
// // );



// // const [open,setOpen] =
// // useState(false);


// // const [selectedProduct,setSelectedProduct] =
// // useState(null);





// // useEffect(()=>{

// //  dispatch(getProducts());

// // },[dispatch]);





// // const handleAdd = ()=>{

// //  setSelectedProduct(null);

// //  setOpen(true);

// // };





// // const handleEdit = (product)=>{

// //  setSelectedProduct(product);

// //  setOpen(true);

// // };





// // const handleClose = ()=>{

// //  setOpen(false);

// //  setSelectedProduct(null);

// // };





// // const handleDelete = (product)=>{

// //  console.log(
// //   "Delete product:",
// //   product
// //  );

// //  // later connect ProductDeleteDialog here

// // };





// // return (

// // <Box p={3}>


// // <Paper
// // sx={{
// // p:3,
// // borderRadius:3
// // }}
// // >


// // <Box
// // display="flex"
// // justifyContent="space-between"
// // alignItems="center"
// // mb={3}
// // >


// // <Typography
// // variant="h5"
// // fontWeight={600}
// // >

// // Products

// // </Typography>



// // <Button
// // variant="contained"
// // startIcon={<AddIcon />}
// // onClick={handleAdd}
// // >

// // Add Product

// // </Button>


// // </Box>





// // <ProductTable

// // products={products}

// // onEdit={handleEdit}

// // onDelete={handleDelete}

// // />



// // </Paper>





// // <ProductDialog

// // open={open}

// // onClose={handleClose}

// // product={selectedProduct}

// // />



// // </Box>

// // );

// // };


// // export default ProductManagement;
// //-------------------------------------------------------------
// import { useEffect, useState } from "react";

// import {
//   Box,
//   Paper,
//   Typography,
// } from "@mui/material";

// import { useDispatch, useSelector } from "react-redux";

// import {
//   getProducts,
// } from "../../features/products/ProductsThunk";


// import ProductTable from "./ProductTable";
// import ProductDialog from "./ProductDialog";
// import ProductToolbar from "./ProductToolbar";



// const ProductManagement = () => {


//   const dispatch = useDispatch();



//   const {
//     products,
//     loading,
//   } = useSelector(
//     (state) => state.products
//   );



//   console.log(
//     "PRODUCTS FROM REDUX:",
//     products
//   );



//   const [open, setOpen] = useState(false);



//   const [selectedProduct, setSelectedProduct] =
//     useState(null);




//   // Load products when page opens
//   useEffect(() => {

//     dispatch(getProducts());

//   }, [dispatch]);






//   // Open dialog for adding product
//   const handleAdd = () => {

//     setSelectedProduct(null);

//     setOpen(true);

//   };






//   // Open dialog for editing product
//   const handleEdit = (product) => {

//     setSelectedProduct(product);

//     setOpen(true);

//   };






//   // Close dialog
//   const handleClose = () => {

//     setOpen(false);

//     setSelectedProduct(null);

//   };






//   // Delete product (connect API later)
//   const handleDelete = (product) => {

//     console.log(
//       "Delete product:",
//       product
//     );

//   };






//   // Refresh product list after create/update
//   const refreshProducts = () => {

//     dispatch(getProducts());

//   };






//   return (

//     <Box

//       sx={{

//         p:3,

//         background:"#FAF8F3",

//         minHeight:"100vh",

//       }}

//     >



//       <Paper

//         sx={{

//           p:3,

//           borderRadius:3,

//         }}

//       >




//         <Typography

//           variant="h5"

//           fontWeight={600}

//           mb={2}

//         >

//           Products

//         </Typography>






//         <ProductToolbar

//           onAdd={handleAdd}

//         />







//         <ProductTable

//           products={products || []}

//           loading={loading}

//           onEdit={handleEdit}

//           onDelete={handleDelete}

//         />





//       </Paper>
//       <ProductDialog
//         open={open}
//         onClose={handleClose}
//         product={selectedProduct}

//         refreshProducts={refreshProducts}
//       />





//     </Box>

//   );



// };



// export default ProductManagement;







