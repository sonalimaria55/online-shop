import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Paper } from "@mui/material";

import { getCategories } from "../../features/categories/CategoriesThunk";

import CategoryToolbar from "../../components/categories/CategoryToolbar";
import CategoryTable from "../../components/categories/CategoryTable";
import CategoryDialog from "../../components/categories/CategoryDialog";
import CategoryDeleteDialog from "../../components/categories/CategoryDeleteDialog";

const CategoryManagement = () => {

  const dispatch = useDispatch();

  const { categories, loading } = useSelector(
    (state) => state.categories
  );

  const [openDialog, setOpenDialog] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [deleteCategory, setDeleteCategory] = useState(null);


  useEffect(() => {

    dispatch(getCategories());

  }, [dispatch]);


  const handleAdd = () => {

    setSelectedCategory(null);

    setOpenDialog(true);

  };


  const handleEdit = (category) => {

    setSelectedCategory(category);

    setOpenDialog(true);

  };


  const handleClose = () => {

    setSelectedCategory(null);

    setOpenDialog(false);

  };


  return (

    <>

      <CategoryToolbar
        onAdd={handleAdd}
      />

      <Paper
        elevation={2}
        sx={{
          p: 2,
          borderRadius: 3
        }}
      >

        <CategoryTable
          categories={categories}
          loading={loading}
          onEdit={handleEdit}
          onDelete={setDeleteCategory}
        />

      </Paper>


      <CategoryDialog
        open={openDialog}
        onClose={handleClose}
        category={selectedCategory}
      />


      <CategoryDeleteDialog
        open={Boolean(deleteCategory)}
        category={deleteCategory}
        onClose={() => setDeleteCategory(null)}
      />

    </>

  );

};

export default CategoryManagement;

