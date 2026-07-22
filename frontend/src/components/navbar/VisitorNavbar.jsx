import { useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Badge,
} from "@mui/material";

import { Link } from "react-router-dom";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const VisitorNavbar = ({ onCartClick }) => {
  const { items } = useSelector((state) => state.cart);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Collections",
      path: "/collections",
    },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(250,248,243,0.85)",
        backdropFilter: "blur(12px)",
        color: "#222",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            py: 1.5,
          }}
        >
          {/* Logo */}
          <Typography
            component={Link}
            to="/"
            sx={{
              fontSize: "28px",
              fontWeight: 600,
              letterSpacing: 7,
              color: "#222",
              textDecoration: "none",
            }}
          >
            SERINA
          </Typography>

          {/* Menu */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              gap: 4,
              justifyContent: "center",
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  color: "#555",
                  textTransform: "none",
                  fontSize: "15px",
                  letterSpacing: 1,
                  "&:hover": {
                    color: "#B08D57",
                    background: "transparent",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Right Side */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Cart */}
            <IconButton
              onClick={onCartClick}
              sx={{
                color: "#B08D57",
              }}
            >
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>

            {/* Login */}
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              sx={{
                borderColor: "#B08D57",
                color: "#B08D57",
                borderRadius: "25px",
                px: 3,
                textTransform: "none",
              }}
            >
              Login
            </Button>

            {/* Register */}
            <Button
              component={Link}
              to="/register"
              variant="contained"
              sx={{
                background: "#B08D57",
                color: "#fff",
                borderRadius: "25px",
                px: 3,
                textTransform: "none",
                "&:hover": {
                  background: "#967344",
                },
              }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default VisitorNavbar;