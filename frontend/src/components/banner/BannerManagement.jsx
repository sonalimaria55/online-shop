import { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { useDispatch, useSelector } from "react-redux";

import { getBanners } from "../../features/banners/BannerThunk";

import BannerDialog from "./BannerDialog";
import BannerDeleteDialog from "./BannerDeleteDialog";
import BannerTable from "./BannerTable";

const BannerManagement = () => {
  const dispatch = useDispatch();

  const {
    banners,
    loading,
  } = useSelector((state) => state.banner);

  const [open, setOpen] = useState(false);

  const [selectedBanner, setSelectedBanner] = useState(null);

  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  // Add Banner
  const handleAdd = () => {
    setSelectedBanner(null);
    setOpen(true);
  };

  // Edit Banner
  const handleEdit = (banner) => {
    setSelectedBanner(banner);
    setOpen(true);
  };

  // Delete Banner
  const handleDelete = (banner) => {
    setSelectedBanner(banner);
    setDeleteOpen(true);
  };

  return (
    <Box p={3}>
      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={600}
          >
            Banner Management
          </Typography>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAdd}
          >
            Add Banner
          </Button>
        </Box>

        <BannerTable
          banners={banners}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Paper>

      <BannerDialog
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedBanner(null);
        }}
        banner={selectedBanner}
      />

      <BannerDeleteDialog
        open={deleteOpen}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedBanner(null);
        }}
        banner={selectedBanner}
      />
    </Box>
  );
};

export default BannerManagement;