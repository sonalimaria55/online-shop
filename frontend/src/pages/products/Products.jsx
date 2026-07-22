import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Typography,
} from "@mui/material";

import ProductToolbar from "../../components/products/ProductToolbar";
import ProductTable from "../../components/products/ProductTable";
import ProductDialog from "../../components/products/ProductDialog";

import { getProducts } from "../../features/products/ProductsThunk";


const Products = () => {


  const dispatch = useDispatch();


  const { products } = useSelector(
    (state)=>state.products
  );


  const [open,setOpen] = useState(false);



  useEffect(()=>{

    dispatch(getProducts());

  },[dispatch]);



  return (

    <Box>


      <Typography
        variant="h4"
        sx={{
          fontWeight:600,
          mb:3
        }}
      >
        Products
      </Typography>



      <ProductToolbar
        onAdd={()=>setOpen(true)}
      />



      <ProductTable
        products={products}
      />



      <ProductDialog
        open={open}
        onClose={()=>setOpen(false)}
      />


    </Box>

  );

};


export default Products;