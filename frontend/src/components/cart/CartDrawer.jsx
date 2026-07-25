import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  CircularProgress,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { getCart } from "../../features/cart/CartThunk";

import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const CartDrawer = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const { items, loading } = useSelector((state) => state.cart);


  useEffect(() => {
    if (open) {
      dispatch(getCart());
    }
  }, [open, dispatch]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: {
            xs: "100%",
            sm: 420,
          },
          bgcolor: "#FAF8F3",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          YOUR CART ({items.length})
        </Typography>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      {/* Cart Items */}
   {/* Cart Items */}
<Box
  sx={{
    flex: 1,
    overflowY: "auto",
    p: 2,
  }}
>
  {loading ? (
    <CircularProgress />
  ) : items.length === 0 ? (
    <Typography>Your cart is empty.</Typography>
  ) : (
    items.map((item, index) => {
      if (!item.product) return null;

      return (
        <CartItem
          key={`${item.product._id}-${index}`}
          item={item}
        />
      );
    })
  )}
</Box>

      {/* Cart Summary */}
      <CartSummary />
    </Drawer>
  );
};

export default CartDrawer;