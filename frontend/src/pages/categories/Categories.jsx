
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Typography
} from "@mui/material";


import CategoryToolbar from "../../components/categories/CategoryToolbar";
import CategoryTable from "../../components/categories/CategoryTable";
import CategoryDialog from "../../components/categories/CategoryDialog";


import { getCategories } from "../../features/categories/CategoriesThunk";


const Categories = () => {


  const dispatch = useDispatch();


  const { categories } = useSelector(
    (state)=>state.categories
  );


  const [open,setOpen] = useState(false);



  useEffect(()=>{

    dispatch(getCategories());

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
        Categories
      </Typography>



      <CategoryToolbar
        onAdd={()=>setOpen(true)}
      />



      <CategoryTable
        categories={categories}
      />



      <CategoryDialog
        open={open}
        onClose={()=>setOpen(false)}
      />


    </Box>

  );

};


export default Categories;