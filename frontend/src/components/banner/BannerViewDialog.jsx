import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const BannerViewDialog = ({ open, onClose, banner }) => {
  if (!banner) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogContent sx={{ p: 0, position: "relative" }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
            background: "#fff",
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          component="img"
          src={banner.image}
          alt={banner.title}
          sx={{
            width: "100%",
            maxHeight: 600,
            objectFit: "cover",
          }}
        />

        <Box sx={{ p: 3 }}>
          <Typography variant="h5" fontWeight={600}>
            {banner.title}
          </Typography>

          {banner.subtitle && (
            <Typography
              sx={{
                color: "#B08D57",
                mt: 1,
              }}
            >
              {banner.subtitle}
            </Typography>
          )}

          {banner.description && (
            <Typography sx={{ mt: 2 }}>
              {banner.description}
            </Typography>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BannerViewDialog;