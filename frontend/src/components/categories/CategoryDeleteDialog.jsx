import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

import { useDispatch } from "react-redux";

import { deleteCategory } from "../../features/categories/CategoriesThunk";

const CategoryDeleteDialog = ({
  open,
  onClose,
  category,
}) => {

  const dispatch = useDispatch();

  const handleDelete = () => {

    dispatch(
      deleteCategory(category._id)
    );

    onClose();

  };

  return (

    <Dialog
      open={open}
      onClose={onClose}
    >

      <DialogTitle>
        Delete Category
      </DialogTitle>

      <DialogContent>

        <DialogContentText>

          Are you sure you want to delete{" "}
          <strong>
            {category?.categoryName}
          </strong>
          ?

        </DialogContentText>

      </DialogContent>

      <DialogActions>

        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          color="error"
          variant="contained"
          onClick={handleDelete}
        >
          Delete
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default CategoryDeleteDialog;