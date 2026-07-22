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
import { useSelector } from "react-redux";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import logout from "../../utils/logout";


const CustomerNavbar = () => {
    const navigate = useNavigate();

    const { items } = useSelector(
        (state) => state.cart
    );


    const totalItems = items.reduce(
        (total, item) => total + item.quantity,
        0
    );


    return (

        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background: "rgba(250,248,243,0.9)",
                backdropFilter: "blur(12px)",
                color: "#222"
            }}
        >

            <Container maxWidth="lg">

                <Toolbar
                    disableGutters
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto 1fr",
                        py: 1.5
                    }}
                >


                    {/* Logo */}

                    <Typography
                        component={Link}
                        to="/boutique"
                        sx={{
                            textDecoration: "none",
                            color: "#222",
                            fontSize: "28px",
                            letterSpacing: 7,
                            fontWeight: 600
                        }}
                    >
                        SERINA
                    </Typography>



                    {/* Menu */}

                    <Box
                        sx={{
                            display: "flex",
                            gap: 4
                        }}
                    >

                        <Button
                            component={Link}
                            to="/boutique"
                        >
                            Home
                        </Button>


                        <Button
                            component={Link}
                            to="/collections"
                        >
                            Collections
                        </Button>


                        <Button
                            component={Link}
                            to="/boutique/orders"
                        >
                            Orders
                        </Button>


                    </Box>




                    {/* Right */}

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: 2
                        }}
                    >


                        <IconButton
                            component={Link}
                            to="/boutique/cart"
                        >

                            <Badge
                                badgeContent={totalItems}
                                color="error"
                            >

                                <ShoppingCartOutlinedIcon
                                    sx={{
                                        color: "#B08D57"
                                    }}
                                />

                            </Badge>

                        </IconButton>



                        <Button
                            component={Link}
                            to="/profile"
                            sx={{
                                color: "#B08D57"
                            }}
                        >
                            Profile
                        </Button>
                        <Button
                            onClick={() => logout(navigate)}
                            sx={{
                                color: "#B08D57",
                                textTransform: "none"
                            }}
                        >
                            Logout
                        </Button>


                    </Box>


                </Toolbar>

            </Container>

        </AppBar>

    );

};


export default CustomerNavbar;