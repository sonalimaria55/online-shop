import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Paper,
  Typography,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { getProducts } from "../../features/products/ProductsThunk";

import ProductDialog from "../../components/products/ProductDialog";
import ProductTable from "../../components/products/ProductTable";
import ProductDeleteDialog from "../../components/products/ProductDeleteDialog";


const ProductManagement = () => {

  const dispatch = useDispatch();


  const { products, loading } = useSelector(
    (state) => state.products
  );
console.log("PRODUCTS IN COMPONENT:", products);

  const [openDialog, setOpenDialog] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [productToDelete, setProductToDelete] = useState(null);



  // Load products
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);



  // Add Product
  const handleAdd = () => {
    setSelectedProduct(null);
    setOpenDialog(true);
  };



  // Edit Product
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };



  // Close Add/Edit Dialog
  const handleClose = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };



  return (
    <Box>


      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >

        <Typography
          variant="h5"
          fontWeight={600}
        >
          Product Management
        </Typography>



        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAdd}
        >
          Add Product
        </Button>


      </Box>




      {/* Product Table */}
      <Paper
        elevation={2}
        sx={{
          p: 2,
          borderRadius: 3
        }}
      >

        <ProductTable
          products={products}
          loading={loading}
          onEdit={handleEdit}
          onDelete={setProductToDelete}
        />


      </Paper>






      {/* Add / Edit Product */}
      <ProductDialog
        open={openDialog}
        onClose={handleClose}
        product={selectedProduct}
      />







      {/* Delete Confirmation */}
      <ProductDeleteDialog
        open={Boolean(productToDelete)}
        product={productToDelete}
        onClose={() => setProductToDelete(null)}
      />


    </Box>
  );
};


export default ProductManagement;