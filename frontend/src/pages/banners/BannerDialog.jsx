import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Stack,
} from "@mui/material";

import {
  createBanner,
  updateBanner,
} from "../../features/banners/BannerThunk";

const BannerDialog = ({ open, onClose, banner }) => {
  const dispatch = useDispatch();

  const initialState = {
    title: "",
    subtitle: "",
    description: "",
    bannerType: "carousel",
    placement: "hero",
    visibility: "everyone",
    displayOrder: 1,
    image: null,
  };

  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (banner) {
      setForm({
        title: banner.title || "",
        subtitle: banner.subtitle || "",
        description: banner.description || "",
        bannerType: banner.bannerType || "carousel",
        placement: banner.placement || "hero",
        visibility: banner.visibility || "everyone",
        displayOrder: banner.displayOrder || 1,
        image: null,
      });
    } else {
      setForm(initialState);
    }
  }, [banner, open]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImage = (e) => {
    setForm((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("subtitle", form.subtitle);
    formData.append("description", form.description);
    formData.append("bannerType", form.bannerType);
    formData.append("placement", form.placement);
    formData.append("visibility", form.visibility);
    formData.append("displayOrder", form.displayOrder);

    if (form.image) {
      formData.append("image", form.image);
    }

    try {
      if (banner) {
        await dispatch(
          updateBanner({
            id: banner._id,
            formData,
          })
        ).unwrap();
      } else {
        await dispatch(createBanner(formData)).unwrap();
      }

      setForm(initialState);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        {banner ? "Edit Banner" : "Add Banner"}
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={2}>
          <TextField
            label="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Subtitle"
            name="subtitle"
            value={form.subtitle}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
          />

          <TextField
            select
            label="Banner Type"
            name="bannerType"
            value={form.bannerType}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="carousel">
              Carousel
            </MenuItem>

            <MenuItem value="banner">
              Banner
            </MenuItem>
          </TextField>

          <TextField
            select
            label="Placement"
            name="placement"
            value={form.placement}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="hero">
              Hero
            </MenuItem>

            <MenuItem value="after_categories">
              After Categories
            </MenuItem>

            <MenuItem value="after_new_arrivals">
              After New Arrivals
            </MenuItem>

            <MenuItem value="after_best_sellers">
              After Best Sellers
            </MenuItem>

            <MenuItem value="before_footer">
              Before Footer
            </MenuItem>
          </TextField>

          <TextField
            select
            label="Visibility"
            name="visibility"
            value={form.visibility}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="everyone">
              Everyone
            </MenuItem>

            <MenuItem value="registered">
              Registered
            </MenuItem>

            <MenuItem value="hidden">
              Hidden
            </MenuItem>
          </TextField>

          <TextField
            type="number"
            label="Display Order"
            name="displayOrder"
            value={form.displayOrder}
            onChange={handleChange}
            fullWidth
          />

          <Button
            variant="outlined"
            component="label"
          >
            {form.image
              ? form.image.name
              : "Choose Banner Image"}

            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
          </Button>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          {banner ? "Update" : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BannerDialog;