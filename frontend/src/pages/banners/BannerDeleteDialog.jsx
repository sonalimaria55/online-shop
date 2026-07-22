import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { deleteBanner } from "../../features/banners/BannerThunk";

const BannerDeleteDialog = ({
  open,
  onClose,
  banner,
}) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteBanner(banner._id)).unwrap();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        Delete Banner
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete
          <strong> {banner?.title}</strong>?
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

export default BannerDeleteDialog;