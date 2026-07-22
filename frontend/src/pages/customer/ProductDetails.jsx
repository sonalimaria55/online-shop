import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import VisitorNavbar from "../../components/navbar/VisitorNavbar";
import CustomerNavbar from "../../components/navbar/CustomerNavbar";
import CartDrawer from "../../components/cart/CartDrawer";

import { getProductById } from "../../features/products/ProductsThunk";
import { addToCart } from "../../features/cart/CartThunk";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const [cartOpen, setCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { selectedProduct, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const handleAddToCart = async () => {
    await dispatch(
      addToCart({
        productId: selectedProduct._id,
        quantity,
      }),
    );

    setCartOpen(true);
  };

  if (loading || !selectedProduct) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 15,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      {token ? (
        <CustomerNavbar onCartClick={() => setCartOpen(true)} />
      ) : (
        <VisitorNavbar onCartClick={() => setCartOpen(true)} />
      )}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <Box
        sx={{
          background: "#FAF8F3",
          minHeight: "100vh",
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* IMAGE */}
            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <Box
                component="img"
                src={selectedProduct.image || "/placeholder.jpg"}
                alt={selectedProduct.productName}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />
            </Grid>

            {/* DETAILS */}
            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <Typography variant="h4" fontWeight={600}>
                {selectedProduct.productName}
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontSize: 30,
                  color: "#B08D57",
                  fontWeight: 600,
                }}
              >
                ₹ {selectedProduct.sellingPrice}
              </Typography>

              {selectedProduct.brand && (
                <Typography sx={{ mt: 3 }}>
                  <strong>Brand:</strong> {selectedProduct.brand}
                </Typography>
              )}

              <Typography sx={{ mt: 1 }}>
                <strong>SKU:</strong> {selectedProduct.sku}
              </Typography>

              <Typography sx={{ mt: 1 }}>
                <strong>Unit:</strong> {selectedProduct.unit}
              </Typography>

              {/* Quantity */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 5,
                }}
              >
                <IconButton
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  <RemoveIcon />
                </IconButton>

                <Typography
                  sx={{
                    mx: 3,
                    fontSize: 22,
                  }}
                >
                  {quantity}
                </Typography>

                <IconButton onClick={() => setQuantity(quantity + 1)}>
                  <AddIcon />
                </IconButton>
              </Box>

              {/* Buttons */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 5,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleAddToCart}
                  sx={{
                    background: "#C9A227",
                    color: "#fff",
                    px: 5,
                    "&:hover": {
                      background: "#A8841F",
                    },
                  }}
                >
                  ADD TO CART
                </Button>

                <Button variant="outlined" size="large">
                  Buy Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductDetails;
