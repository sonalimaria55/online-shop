// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Button,
//     Box,
//     Container,
//     IconButton,
//     Badge,
// } from "@mui/material";

// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { useNavigate } from "react-router-dom";
// import logout from "../../utils/logout";


// const CustomerNavbar = () => {
//     const navigate = useNavigate();

//     const { items } = useSelector(
//         (state) => state.cart
//     );


//     const totalItems = items.reduce(
//         (total, item) => total + item.quantity,
//         0
//     );


//     return (

//         <AppBar
//             position="fixed"
//             elevation={0}
//             sx={{
//                 background: "rgba(250,248,243,0.9)",
//                 backdropFilter: "blur(12px)",
//                 color: "#222"
//             }}
//         >

//             <Container maxWidth="lg">

//                 <Toolbar
//                     disableGutters
//                     sx={{
//                         display: "grid",
//                         gridTemplateColumns: "1fr auto 1fr",
//                         py: 1.5
//                     }}
//                 >


//                     {/* Logo */}

//                     <Typography
//                         component={Link}
//                         to="/boutique"
//                         sx={{
//                             textDecoration: "none",
//                             color: "#222",
//                             fontSize: "28px",
//                             letterSpacing: 7,
//                             fontWeight: 600
//                         }}
//                     >
//                         SERINA
//                     </Typography>



//                     {/* Menu */}

//                     <Box
//                         sx={{
//                             display: "flex",
//                             gap: 4
//                         }}
//                     >

//                         <Button
//                             component={Link}
//                             to="/boutique"
//                         >
//                             Home
//                         </Button>


//                         <Button
//                             component={Link}
//                             to="/collections"
//                         >
//                             Collections
//                         </Button>


//                         <Button
//                             component={Link}
//                             to="/boutique/orders"
//                         >
//                             Orders
//                         </Button>


//                     </Box>




//                     {/* Right */}

//                     <Box
//                         sx={{
//                             display: "flex",
//                             justifyContent: "flex-end",
//                             alignItems: "center",
//                             gap: 2
//                         }}
//                     >


//                         <IconButton
//                             component={Link}
//                             to="/boutique/cart"
//                         >

//                             <Badge
//                                 badgeContent={totalItems}
//                                 color="error"
//                             >

//                                 <ShoppingCartOutlinedIcon
//                                     sx={{
//                                         color: "#B08D57"
//                                     }}
//                                 />

//                             </Badge>

//                         </IconButton>



//                         <Button
//                             component={Link}
//                             to="/profile"
//                             sx={{
//                                 color: "#B08D57"
//                             }}
//                         >
//                             Profile
//                         </Button>
//                         <Button
//                             onClick={() => logout(navigate)}
//                             sx={{
//                                 color: "#B08D57",
//                                 textTransform: "none"
//                             }}
//                         >
//                             Logout
//                         </Button>


//                     </Box>


//                 </Toolbar>

//             </Container>

//         </AppBar>

//     );

// };


// export default CustomerNavbar;
//--------------------------------------------------

// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Button,
//     Box,
//     Container,
//     IconButton,
//     Badge,
// } from "@mui/material";

// import {
//     Link,
//     useNavigate,
// } from "react-router-dom";

// import {
//     useSelector,
// } from "react-redux";

// import ShoppingCartOutlinedIcon
//     from "@mui/icons-material/ShoppingCartOutlined";

// import logout from "../../utils/logout";

// const CustomerNavbar = ({
//     onCartClick,
// }) => {

//     const navigate = useNavigate();

//     const {
//         items = [],
//     } = useSelector(
//         (state) => state.cart
//     );

//     const totalItems = items.reduce(
//         (total, item) =>
//             total + item.quantity,
//         0
//     );

//     return (

//         <AppBar
//             position="fixed"
//             elevation={0}
//             sx={{
//                 background:
//                     "rgba(250,248,243,0.9)",
//                 backdropFilter:
//                     "blur(12px)",
//                 color: "#222",
//             }}
//         >

//             <Container maxWidth="lg">

//                 <Toolbar
//                     disableGutters
//                     sx={{
//                         display: "grid",
//                         gridTemplateColumns:
//                             "1fr auto 1fr",
//                         py: 1.5,
//                     }}
//                 >

//                     {/* ==================================================
//                         LOGO
//                     ================================================== */}

//                     <Typography
//                         component={Link}
//                         to="/boutique"
//                         sx={{
//                             textDecoration:
//                                 "none",
//                             color: "#222",
//                             fontSize: "28px",
//                             letterSpacing: 7,
//                             fontWeight: 600,
//                         }}
//                     >
//                         SERINA
//                     </Typography>

//                     {/* ==================================================
//                         MENU
//                     ================================================== */}

//                     <Box
//                         sx={{
//                             display: "flex",
//                             gap: 4,
//                         }}
//                     >

//                         <Button
//                             component={Link}
//                             to="/boutique"
//                         >
//                             Home
//                         </Button>

//                         <Button
//                             component={Link}
//                             to="/collections"
//                         >
//                             Collections
//                         </Button>

//                         <Button
//                             component={Link}
//                             to="/boutique/orders"
//                         >
//                             Orders
//                         </Button>

//                     </Box>

//                     {/* ==================================================
//                         RIGHT
//                     ================================================== */}

//                     <Box
//                         sx={{
//                             display: "flex",
//                             justifyContent:
//                                 "flex-end",
//                             alignItems:
//                                 "center",
//                             gap: 2,
//                         }}
//                     >

//                         {/* CART */}

//                         <IconButton
//                             onClick={onCartClick}
//                             sx={{
//                                 color: "#B08D57",
//                             }}
//                         >

//                             <Badge
//                                 badgeContent={
//                                     totalItems
//                                 }
//                                 color="error"
//                             >

//                                 <ShoppingCartOutlinedIcon />

//                             </Badge>

//                         </IconButton>

//                         {/* PROFILE */}

//                         <Button
//                             component={Link}
//                             to="/profile"
//                             sx={{
//                                 color:
//                                     "#B08D57",
//                             }}
//                         >
//                             Profile
//                         </Button>

//                         {/* LOGOUT */}

//                         <Button
//                             onClick={() =>
//                                 logout(navigate)
//                             }
//                             sx={{
//                                 color:
//                                     "#B08D57",
//                                 textTransform:
//                                     "none",
//                             }}
//                         >
//                             Logout
//                         </Button>

//                     </Box>

//                 </Toolbar>

//             </Container>

//         </AppBar>

//     );
// };

// export default CustomerNavbar;
//--------------------------------------------------------

// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Button,
//     Box,
//     Container,
//     IconButton,
//     Badge,
// } from "@mui/material";

// import {
//     Link,
//     useNavigate,
// } from "react-router-dom";

// import {
//     useSelector,
// } from "react-redux";

// import ShoppingCartOutlinedIcon
//     from "@mui/icons-material/ShoppingCartOutlined";

// import logout from "../../utils/logout";
// import {
//     useCartDrawer,
// } from "../../context/CartDrawerContext";


// const CustomerNavbar = ({
//     onCartClick,
// }) => {

//     const navigate = useNavigate();


//     const {
//         items = [],
//     } = useSelector(
//         (state) => state.cart
//     );


//     const totalItems = items.reduce(
//         (total, item) =>
//             total + (item.quantity || 0),
//         0
//     );


//     return (

//         <AppBar
//             position="fixed"
//             elevation={0}
//             sx={{
//                 background:
//                     "rgba(250,248,243,0.9)",

//                 backdropFilter:
//                     "blur(12px)",

//                 color: "#222",
//             }}
//         >

//             <Container maxWidth="lg">

//                 <Toolbar
//                     disableGutters
//                     sx={{
//                         display: "grid",

//                         gridTemplateColumns:
//                             "1fr auto 1fr",

//                         py: 1.5,
//                     }}
//                 >

//                     {/* ========================= */}
//                     {/* LOGO */}
//                     {/* ========================= */}

//                     <Typography
//                         component={Link}
//                         to="/boutique"

//                         sx={{
//                             textDecoration: "none",
//                             color: "#222",
//                             fontSize: "28px",
//                             letterSpacing: 7,
//                             fontWeight: 600,
//                         }}
//                     >
//                         SERINA
//                     </Typography>


//                     {/* ========================= */}
//                     {/* MENU */}
//                     {/* ========================= */}

//                     <Box
//                         sx={{
//                             display: "flex",
//                             gap: 4,
//                         }}
//                     >

//                         <Button
//                             component={Link}
//                             to="/boutique"
//                         >
//                             Home
//                         </Button>


//                         <Button
//                             component={Link}
//                             to="/collections"
//                         >
//                             Collections
//                         </Button>


//                         <Button
//                             component={Link}
//                             to="/boutique/orders"
//                         >
//                             Orders
//                         </Button>

//                     </Box>


//                     {/* ========================= */}
//                     {/* RIGHT SIDE */}
//                     {/* ========================= */}

//                     <Box
//                         sx={{
//                             display: "flex",
//                             justifyContent:
//                                 "flex-end",

//                             alignItems: "center",

//                             gap: 2,
//                         }}
//                     >

//                         {/* ========================= */}
//                         {/* CART */}
//                         {/* ========================= */}

//                         <IconButton
//                             onClick={onCartClick}
//                             sx={{
//                                 color: "#B08D57",
//                             }}
//                         >

//                             <Badge
//                                 badgeContent={
//                                     totalItems
//                                 }
//                                 color="error"
//                             >

//                                 <ShoppingCartOutlinedIcon />

//                             </Badge>

//                         </IconButton>


//                         {/* ========================= */}
//                         {/* PROFILE */}
//                         {/* ========================= */}

//                         <Button
//                             component={Link}
//                             to="/profile"

//                             sx={{
//                                 color: "#B08D57",
//                             }}
//                         >
//                             Profile
//                         </Button>


//                         {/* ========================= */}
//                         {/* LOGOUT */}
//                         {/* ========================= */}

//                         <Button
//                             onClick={() =>
//                                 logout(navigate)
//                             }

//                             sx={{
//                                 color: "#B08D57",
//                                 textTransform:
//                                     "none",
//                             }}
//                         >
//                             Logout
//                         </Button>

//                     </Box>

//                 </Toolbar>

//             </Container>

//         </AppBar>

//     );

// };


// export default CustomerNavbar;
// //--------------------------------------------------------------

// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Button,
//     Box,
//     Container,
//     IconButton,
//     Badge,
// } from "@mui/material";

// import {
//     Link,
//     useNavigate,
// } from "react-router-dom";

// import { useSelector } from "react-redux";

// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// import logout from "../../utils/logout";

// const CustomerNavbar = ({ onCartClick }) => {

//     const navigate = useNavigate();

//     const {
//         items = [],
//     } = useSelector(
//         (state) => state.cart
//     );

//     const totalItems = items.reduce(
//         (total, item) =>
//             total + (item.quantity || 0),
//         0
//     );

//     return (
//         <AppBar
//             position="fixed"
//             elevation={0}
//             sx={{
//                 background: "rgba(250,248,243,0.9)",
//                 backdropFilter: "blur(12px)",
//                 color: "#222",
//             }}
//         >

//             <Container maxWidth="lg">

//                 <Toolbar
//                     disableGutters
//                     sx={{
//                         display: "grid",
//                         gridTemplateColumns: "1fr auto 1fr",
//                         py: 1.5,
//                     }}
//                 >

//                     {/* ================= LOGO ================= */}

//                     <Typography
//                         component={Link}
//                         to="/boutique"
//                         sx={{
//                             textDecoration: "none",
//                             color: "#222",
//                             fontSize: "28px",
//                             letterSpacing: 7,
//                             fontWeight: 600,
//                         }}
//                     >
//                         SERINA
//                     </Typography>


//                     {/* ================= MENU ================= */}

//                     <Box
//                         sx={{
//                             display: "flex",
//                             gap: 4,
//                         }}
//                     >

//                         <Button
//                             component={Link}
//                             to="/boutique"
//                         >
//                             Home
//                         </Button>

//                         <Button
//                             component={Link}
//                             to="/collections"
//                         >
//                             Collections
//                         </Button>

//                         <Button
//                             component={Link}
//                             to="/boutique/orders"
//                         >
//                             Orders
//                         </Button>

//                     </Box>


//                     {/* ================= RIGHT SIDE ================= */}

//                     <Box
//                         sx={{
//                             display: "flex",
//                             justifyContent: "flex-end",
//                             alignItems: "center",
//                             gap: 2,
//                         }}
//                     >

//                         {/* ================= CART ================= */}

//                         <IconButton
//                             onClick={onCartClick}
//                             sx={{
//                                 color: "#B08D57",
//                             }}
//                         >

//                             <Badge
//                                 badgeContent={totalItems}
//                                 color="error"
//                             >

//                                 <ShoppingCartOutlinedIcon />

//                             </Badge>

//                         </IconButton>


//                         {/* ================= PROFILE ================= */}

//                         <Button
//                             component={Link}
//                             to="/profile"
//                             sx={{
//                                 color: "#B08D57",
//                             }}
//                         >
//                             Profile
//                         </Button>


//                         {/* ================= LOGOUT ================= */}

//                         <Button
//                             onClick={() =>
//                                 logout(navigate)
//                             }
//                             sx={{
//                                 color: "#B08D57",
//                                 textTransform: "none",
//                             }}
//                         >
//                             Logout
//                         </Button>

//                     </Box>

//                 </Toolbar>

//             </Container>

//         </AppBar>
//     );
// };

// export default CustomerNavbar;
//-----------------------------------------------------------------------

// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Button,
//     Box,
//     Container,
//     IconButton,
//     Badge,
// } from "@mui/material";

// import {
//     Link,
//     useNavigate,
// } from "react-router-dom";

// import { useSelector } from "react-redux";

// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// import logout from "../../utils/logout";

// const CustomerNavbar = ({ onCartClick }) => {

//     const navigate = useNavigate();

//     const {
//         items = [],
//     } = useSelector(
//         (state) => state.cart
//     );

//     const totalItems = items.reduce(
//         (total, item) =>
//             total + (item.quantity || 0),
//         0
//     );

//     return (
//         <AppBar
//             position="fixed"
//             elevation={0}
//             sx={{
//                 background: "rgba(250,248,243,0.9)",
//                 backdropFilter: "blur(12px)",
//                 color: "#222",
//             }}
//         >

//             <Container maxWidth="lg">

//                 <Toolbar
//                     disableGutters
//                     sx={{
//                         display: "grid",
//                         gridTemplateColumns: "1fr auto 1fr",
//                         py: 1.5,
//                     }}
//                 >

//                     {/* LOGO */}

//                     <Typography
//                         component={Link}
//                         to="/boutique"
//                         sx={{
//                             textDecoration: "none",
//                             color: "#222",
//                             fontSize: "28px",
//                             letterSpacing: 7,
//                             fontWeight: 600,
//                         }}
//                     >
//                         SERINA
//                     </Typography>


//                     {/* MENU */}

//                     <Box
//                         sx={{
//                             display: "flex",
//                             gap: 4,
//                         }}
//                     >

//                         <Button
//                             component={Link}
//                             to="/boutique"
//                         >
//                             Home
//                         </Button>

//                         <Button
//                             component={Link}
//                             to="/collections"
//                         >
//                             Collections
//                         </Button>

//                         <Button
//                             component={Link}
//                             to="/boutique/orders"
//                         >
//                             Orders
//                         </Button>

//                     </Box>


//                     {/* RIGHT SIDE */}

//                     <Box
//                         sx={{
//                             display: "flex",
//                             justifyContent: "flex-end",
//                             alignItems: "center",
//                             gap: 2,
//                         }}
//                     >

//                         {/* CART */}

//                         <IconButton
//                             onClick={onCartClick}
//                             sx={{
//                                 color: "#B08D57",
//                             }}
//                         >

//                             <Badge
//                                 badgeContent={totalItems}
//                                 color="error"
//                             >

//                                 <ShoppingCartOutlinedIcon />

//                             </Badge>

//                         </IconButton>


//                         {/* PROFILE */}

//                         <Button
//                             component={Link}
//                             to="/profile"
//                             sx={{
//                                 color: "#B08D57",
//                             }}
//                         >
//                             Profile
//                         </Button>


//                         {/* LOGOUT */}

//                         <Button
//                             onClick={() => logout(navigate)}
//                             sx={{
//                                 color: "#B08D57",
//                                 textTransform: "none",
//                             }}
//                         >
//                             Logout
//                         </Button>

//                     </Box>

//                 </Toolbar>

//             </Container>

//         </AppBar>
//     );
// };

// export default CustomerNavbar;
//----------------------------------------------------------------------------

// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Button,
//     Box,
//     Container,
//     IconButton,
//     Badge,
// } from "@mui/material";

// import {
//     Link,
//     useNavigate,
// } from "react-router-dom";

// import {
//     useSelector,
// } from "react-redux";

// import ShoppingCartOutlinedIcon
//     from "@mui/icons-material/ShoppingCartOutlined";

// import logout from "../../utils/logout";


// const CustomerNavbar = ({
//     onCartClick,
// }) => {

//     const navigate = useNavigate();


//     // ============================================
//     // CART STATE
//     // ============================================

//     const {
//         items = [],
//     } = useSelector(
//         (state) => state.cart
//     );


//     // ============================================
//     // TOTAL CART ITEMS
//     // ============================================

//     const totalItems = items.reduce(
//         (total, item) => {

//             return total + (
//                 Number(item.quantity) || 0
//             );

//         },
//         0
//     );


//     // ============================================
//     // CART CLICK
//     // ============================================

//     const handleCartClick = () => {

//         console.log(
//             "CUSTOMER NAVBAR: CART CLICKED"
//         );

//         if (onCartClick) {

//             onCartClick();

//         }

//     };


//     // ============================================
//     // LOGOUT
//     // ============================================

//     const handleLogout = () => {

//         console.log(
//             "CUSTOMER NAVBAR: LOGOUT"
//         );

//         logout(navigate);

//     };


//     return (
//         <AppBar
//             position="fixed"
//             elevation={0}
//             sx={{
//                 background:
//                     "rgba(250,248,243,0.95)",

//                 backdropFilter:
//                     "blur(12px)",

//                 color: "#222",

//                 borderBottom:
//                     "1px solid #eee",

//                 zIndex: 1200,
//             }}
//         >

//             <Container
//                 maxWidth="lg"
//             >

//                 <Toolbar
//                     disableGutters
//                     sx={{
//                         display: "grid",

//                         gridTemplateColumns:
//                             "1fr auto 1fr",

//                         py: 1.5,
//                     }}
//                 >

//                     {/* ================================= */}
//                     {/* LOGO */}
//                     {/* ================================= */}

//                     <Typography
//                         component={Link}
//                         to="/boutique"
//                         sx={{
//                             textDecoration: "none",

//                             color: "#222",

//                             fontSize: "28px",

//                             letterSpacing: 7,

//                             fontWeight: 600,
//                         }}
//                     >
//                         SERINA
//                     </Typography>


//                     {/* ================================= */}
//                     {/* CENTER MENU */}
//                     {/* ================================= */}

//                     <Box
//                         sx={{
//                             display: "flex",

//                             gap: 4,

//                             alignItems: "center",
//                         }}
//                     >

//                         <Button
//                             component={Link}
//                             to="/boutique"
//                             sx={{
//                                 color: "#222",

//                                 textTransform:
//                                     "uppercase",
//                             }}
//                         >
//                             Home
//                         </Button>


//                         <Button
//                             component={Link}
//                             to="/collections"
//                             sx={{
//                                 color: "#222",

//                                 textTransform:
//                                     "uppercase",
//                             }}
//                         >
//                             Collections
//                         </Button>


//                         <Button
//                             component={Link}
//                             to="/boutique/orders"
//                             sx={{
//                                 color: "#222",

//                                 textTransform:
//                                     "uppercase",
//                             }}
//                         >
//                             Orders
//                         </Button>

//                     </Box>


//                     {/* ================================= */}
//                     {/* RIGHT SIDE */}
//                     {/* ================================= */}

//                     <Box
//                         sx={{
//                             display: "flex",

//                             justifyContent:
//                                 "flex-end",

//                             alignItems:
//                                 "center",

//                             gap: 2,
//                         }}
//                     >

//                         {/* ================================= */}
//                         {/* CART */}
//                         {/* ================================= */}

//                         <IconButton
//                             onClick={
//                                 handleCartClick
//                             }
//                             sx={{
//                                 color: "#B08D57",
//                             }}
//                         >

//                             <Badge
//                                 badgeContent={
//                                     totalItems
//                                 }
//                                 color="error"
//                             >

//                                 <ShoppingCartOutlinedIcon />

//                             </Badge>

//                         </IconButton>


//                         {/* ================================= */}
//                         {/* PROFILE */}
//                         {/* ================================= */}

//                         <Button
//                             component={Link}
//                             to="/profile"
//                             sx={{
//                                 color: "#B08D57",

//                                 textTransform:
//                                     "none",
//                             }}
//                         >
//                             Profile
//                         </Button>


//                         {/* ================================= */}
//                         {/* LOGOUT */}
//                         {/* ================================= */}

//                         <Button
//                             onClick={
//                                 handleLogout
//                             }
//                             sx={{
//                                 color: "#B08D57",

//                                 textTransform:
//                                     "none",
//                             }}
//                         >
//                             Logout
//                         </Button>

//                     </Box>

//                 </Toolbar>

//             </Container>

//         </AppBar>
//     );

// };

// export default CustomerNavbar;
//----------------------------------------------------------------
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

import {
    Link,
    useNavigate,
} from "react-router-dom";

import {
    useSelector,
} from "react-redux";

import ShoppingCartOutlinedIcon
    from "@mui/icons-material/ShoppingCartOutlined";

import logout from "../../utils/logout";


const CustomerNavbar = ({
    onCartClick,
}) => {

    const navigate = useNavigate();


    // ============================================
    // CART STATE
    // ============================================

    const {
        items = [],
    } = useSelector(
        (state) => state.cart
    );


    // ============================================
    // TOTAL CART ITEMS
    // ============================================

    const totalItems = items.reduce(
        (total, item) => {

            return total + (
                Number(item.quantity) || 0
            );

        },
        0
    );


    // ============================================
    // CART CLICK
    // ============================================

    const handleCartClick = () => {

        console.log(
            "CUSTOMER NAVBAR: CART CLICKED"
        );

        if (onCartClick) {

            onCartClick();

        }

    };


    // ============================================
    // LOGOUT
    // ============================================

    const handleLogout = () => {

        console.log(
            "CUSTOMER NAVBAR: LOGOUT"
        );

        logout(navigate);

    };


    return (

        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background:
                    "rgba(250,248,243,0.95)",

                backdropFilter:
                    "blur(12px)",

                color: "#222",

                borderBottom:
                    "1px solid #eee",

                zIndex: 1200,
            }}
        >

            <Container maxWidth="lg">

                <Toolbar
                    disableGutters
                    sx={{
                        display: "grid",

                        gridTemplateColumns:
                            "1fr auto 1fr",

                        py: 1.5,
                    }}
                >

                    {/* ================================= */}
                    {/* LOGO */}
                    {/* ================================= */}

                    <Typography
                        component={Link}
                        to="/boutique"
                        sx={{
                            textDecoration: "none",
                            color: "#222",
                            fontSize: "28px",
                            letterSpacing: 7,
                            fontWeight: 600,
                        }}
                    >
                        SERINA
                    </Typography>


                    {/* ================================= */}
                    {/* CENTER MENU */}
                    {/* ================================= */}

                    <Box
                        sx={{
                            display: "flex",
                            gap: 4,
                            alignItems: "center",
                        }}
                    >

                        <Button
                            component={Link}
                            to="/boutique"
                            sx={{
                                color: "#222",
                                textTransform: "uppercase",
                            }}
                        >
                            Home
                        </Button>


                        <Button
                            component={Link}
                            to="/collections"
                            sx={{
                                color: "#222",
                                textTransform: "uppercase",
                            }}
                        >
                            Collections
                        </Button>


                        <Button
                            component={Link}
                            to="/boutique/orders"
                            sx={{
                                color: "#222",
                                textTransform: "uppercase",
                            }}
                        >
                            Orders
                        </Button>

                    </Box>


                    {/* ================================= */}
                    {/* RIGHT SIDE */}
                    {/* ================================= */}

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >

                        {/* CART */}

                        <IconButton
                            onClick={handleCartClick}
                            sx={{
                                color: "#B08D57",
                            }}
                        >

                            <Badge
                                badgeContent={totalItems}
                                color="error"
                            >

                                <ShoppingCartOutlinedIcon />

                            </Badge>

                        </IconButton>


                        {/* PROFILE */}

                        <Button
                            component={Link}
                            to="/profile"
                            sx={{
                                color: "#B08D57",
                                textTransform: "none",
                            }}
                        >
                            Profile
                        </Button>


                        {/* LOGOUT */}

                        <Button
                            onClick={handleLogout}
                            sx={{
                                color: "#B08D57",
                                textTransform: "none",
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