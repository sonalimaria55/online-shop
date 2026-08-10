// import { Outlet } from "react-router-dom";

// const CustomerLayout = () => {
//   return (
//     <>
//       {/* Customer Navbar will come here */}

//       <Outlet />
//     </>
//   );
// };

// export default CustomerLayout;
//------------------------


// import { useState } from "react";
// import { Outlet } from "react-router-dom";

// import Navbar from "../components/Navbar"; // adjust path if needed
// import CartDrawer from "../components/cart/CartDrawer";

// const CustomerLayout = () => {
//   const [cartOpen, setCartOpen] = useState(false);

//   return (
//     <>
//       <Navbar onCartClick={() => setCartOpen(true)} />

//       <Outlet />

//       <CartDrawer
//         open={cartOpen}
//         onClose={() => setCartOpen(false)}
//       >
//         Cart is empty
//       </CartDrawer>
//     </>
//   );
// };

// export default CustomerLayout;

//----------------------------------------

// import { useState } from "react";
// import { Outlet } from "react-router-dom";

// import CustomerNavbar from "../components/navbar/CustomerNavbar";
// import CartDrawer from "../components/cart/CartDrawer";

// const CustomerLayout = () => {
//   const [cartOpen, setCartOpen] = useState(false);

//   return (
//     <>
//       <CustomerNavbar
//         onCartClick={() => setCartOpen(true)}
//       />
//       <Outlet />

//       <CartDrawer
//         open={cartOpen}
//         onClose={() => setCartOpen(false)}
//       />
//     </>
//   );
// };

// export default CustomerLayout;
//----------------------------------------------

// import { useState } from "react";

// import {
//     Outlet,
// } from "react-router-dom";

// import CustomerNavbar
//     from "../components/navbar/CustomerNavbar";

// import CartDrawer
//     from "../components/cart/CartDrawer";

// const CustomerLayout = () => {

//     const [
//         cartOpen,
//         setCartOpen,
//     ] = useState(false);

//     return (

//         <>
//             <CustomerNavbar
//                 onCartClick={() =>
//                     setCartOpen(true)
//                 }
//             />

//             {/* Space for fixed navbar */}

//             <Box
//                 sx={{
//                     pt: 10,
//                 }}
//             >
//                 <Outlet />
//             </Box>

//             <CartDrawer
//                 open={cartOpen}
//                 onClose={() =>
//                     setCartOpen(false)
//                 }
//             />

//         </>

//     );
// };

// export default CustomerLayout;
//--------------------------------------------

// import { useState } from "react";

// import {
//     Box,
// } from "@mui/material";

// import {
//     Outlet,
// } from "react-router-dom";

// import CustomerNavbar from "../components/navbar/CustomerNavbar";

// import CartDrawer from "../components/cart/CartDrawer";


// const CustomerLayout = () => {

//     const [
//         cartOpen,
//         setCartOpen,
//     ] = useState(false);


//     return (

//         <>

//             {/* ============================= */}
//             {/* CUSTOMER NAVBAR */}
//             {/* ============================= */}

//             <CustomerNavbar
//                 onCartClick={() =>
//                     setCartOpen(true)
//                 }
//             />


//             {/* ============================= */}
//             {/* PAGE CONTENT */}
//             {/* ============================= */}

//             <Box
//                 sx={{
//                     pt: 10,
//                 }}
//             >

//                 <Outlet />

//             </Box>


//             {/* ============================= */}
//             {/* CART DRAWER */}
//             {/* ============================= */}

//             <CartDrawer
//                 open={cartOpen}
//                 onClose={() =>
//                     setCartOpen(false)
//                 }
//             />

//         </>

//     );

// };


// export default CustomerLayout;
//-----------------------------------------------------------

// import { useState } from "react";

// import {
//     Box,
// } from "@mui/material";

// import {
//     Outlet,
// } from "react-router-dom";

// import CustomerNavbar from "../components/navbar/CustomerNavbar";

// import CartDrawer from "../components/cart/CartDrawer";

// const CustomerLayout = () => {
//     const [
//         cartOpen,
//         setCartOpen,
//     ] = useState(false);

//     return (
//         <>
//             <CustomerNavbar
//                 onCartClick={() =>
//                     setCartOpen(true)
//                 }
//             />

//             <Box
//                 sx={{
//                     pt: 10,
//                 }}
//             >
//                 <Outlet />
//             </Box>

//             <CartDrawer
//                 open={cartOpen}
//                 onClose={() =>
//                     setCartOpen(false)
//                 }
//             />
//         </>
//     );
// };

// export default CustomerLayout;

// import { useState } from "react";
// import { Box } from "@mui/material";
// import { Outlet } from "react-router-dom";

// import CustomerNavbar from "../components/navbar/CustomerNavbar";
// import CartDrawer from "../components/cart/CartDrawer";

// const CustomerLayout = () => {
//     const [cartOpen, setCartOpen] = useState(false);

//     return (
//         <>
//             {/* CUSTOMER NAVBAR */}
//             <CustomerNavbar
//                 onCartClick={() => setCartOpen(true)}
//             />

//             {/* CUSTOMER PAGE CONTENT */}
//             <Box
//                 sx={{
//                     pt: 10,
//                 }}
//             >
//                 <Outlet />
//             </Box>

//             {/* CART DRAWER */}
//             <CartDrawer
//                 open={cartOpen}
//                 onClose={() => setCartOpen(false)}
//             />
//         </>
//     );
// };

// export default CustomerLayout;
//---------------------------------------------------------

// import { useState } from "react";

// import { Box } from "@mui/material";

// import { Outlet } from "react-router-dom";

// import CustomerNavbar from "../components/navbar/CustomerNavbar";
// import CartDrawer from "../components/cart/CartDrawer";

// const CustomerLayout = () => {

//     // ============================================
//     // CART DRAWER STATE
//     // ============================================

//     const [cartOpen, setCartOpen] = useState(false);


//     // ============================================
//     // OPEN CART
//     // ============================================

//     const openCart = () => {

//         console.log("CUSTOMER LAYOUT: OPEN CART");

//         setCartOpen(true);

//     };


//     // ============================================
//     // CLOSE CART
//     // ============================================

//     const closeCart = () => {

//         console.log("CUSTOMER LAYOUT: CLOSE CART");

//         setCartOpen(false);

//     };


//     return (
//         <>

//             {/* ========================================= */}
//             {/* CUSTOMER NAVBAR */}
//             {/* ========================================= */}

//             <CustomerNavbar
//                 onCartClick={openCart}
//             />


//             {/* ========================================= */}
//             {/* CUSTOMER PAGE CONTENT */}
//             {/* ========================================= */}

//             <Box
//                 sx={{
//                     pt: 10,
//                 }}
//             >

//                 <Outlet
//                     context={{
//                         openCart,
//                     }}
//                 />

//             </Box>


//             {/* ========================================= */}
//             {/* CART DRAWER */}
//             {/* ========================================= */}

//             <CartDrawer
//                 open={cartOpen}
//                 onClose={closeCart}
//             />

//         </>
//     );

// };

// export default CustomerLayout;
//----------------------------

// import { useState } from "react";

// import { Box } from "@mui/material";

// import { Outlet } from "react-router-dom";

// import CustomerNavbar from "../components/navbar/CustomerNavbar";
// import CartDrawer from "../components/cart/CartDrawer";

// const CustomerLayout = () => {
//     const [cartOpen, setCartOpen] = useState(false);

//     // ============================================
//     // OPEN CART
//     // ============================================

//     const openCart = () => {
//         console.log("CUSTOMER LAYOUT: OPEN CART");
//         setCartOpen(true);
//     };

//     // ============================================
//     // CLOSE CART
//     // ============================================

//     const closeCart = () => {
//         console.log("CUSTOMER LAYOUT: CLOSE CART");
//         setCartOpen(false);
//     };

//     return (
//         <>
//             {/* ========================================= */}
//             {/* CUSTOMER NAVBAR */}
//             {/* ========================================= */}

//             <CustomerNavbar
//                 onCartClick={openCart}
//             />

//             {/* ========================================= */}
//             {/* PAGE CONTENT */}
//             {/* ========================================= */}

//             <Box
//                 sx={{
//                     pt: 10,
//                 }}
//             >
//                 <Outlet
//                     context={{
//                         openCart,
//                     }}
//                 />
//             </Box>

//             {/* ========================================= */}
//             {/* CART DRAWER */}
//             {/* ========================================= */}

//             <CartDrawer
//                 open={cartOpen}
//                 onClose={closeCart}
//             />
//         </>
//     );
// };

// export default CustomerLayout;
//-----------------------------------------

// import {
//     useEffect,
//     useState,
// } from "react";

// import {
//     Box,
// } from "@mui/material";

// import {
//     Outlet,
// } from "react-router-dom";

// import {
//     useDispatch,
// } from "react-redux";

// import CustomerNavbar
//     from "../components/navbar/CustomerNavbar";

// import CartDrawer
//     from "../components/cart/CartDrawer";

// import {
//     getCart,
// } from "../features/cart/CartThunk";


// const CustomerLayout = () => {

//     const dispatch = useDispatch();


//     // ============================================
//     // CART DRAWER
//     // ============================================

//     const [
//         cartOpen,
//         setCartOpen,
//     ] = useState(false);


//     // ============================================
//     // OPEN CART
//     // ============================================

//     const openCart = () => {

//         console.log(
//             "CUSTOMER LAYOUT: OPEN CART"
//         );

//         setCartOpen(true);

//     };


//     // ============================================
//     // CLOSE CART
//     // ============================================

//     const closeCart = () => {

//         console.log(
//             "CUSTOMER LAYOUT: CLOSE CART"
//         );

//         setCartOpen(false);

//     };


//     // ============================================
//     // GET CART
//     // ============================================

//     useEffect(() => {

//         dispatch(
//             getCart()
//         );

//     }, [dispatch]);


//     return (

//         <Box
//             sx={{
//                 minHeight: "100vh",
//                 background: "#FAF8F3",
//             }}
//         >

//             {/* ================================= */}
//             {/* NAVBAR */}
//             {/* ================================= */}

//             <CustomerNavbar
//                 onCartClick={openCart}
//             />


//             {/* ================================= */}
//             {/* PAGE */}
//             {/* ================================= */}

//             <Box
//                 sx={{
//                     pt: "80px",
//                 }}
//             >

//                 <Outlet
//                     context={{
//                         openCart,
//                     }}
//                 />

//             </Box>


//             {/* ================================= */}
//             {/* CART DRAWER */}
//             {/* ================================= */}

//             <CartDrawer
//                 open={cartOpen}
//                 onClose={closeCart}
//             />

//         </Box>

//     );

// };


// export default CustomerLayout;
//---------------------------------------------------
import { useState } from "react";
import { Outlet } from "react-router-dom";

import CustomerNavbar from "../components/navbar/CustomerNavbar";
import CartDrawer from "../components/cart/CartDrawer";

const CustomerLayout = () => {

    const [cartOpen, setCartOpen] = useState(false);


    const openCart = () => {
        setCartOpen(true);
    };


    const closeCart = () => {
        setCartOpen(false);
    };


    return (

        <>
            <CustomerNavbar
                onCartClick={openCart}
            />


            <Outlet
                context={{
                    openCart,
                    closeCart,
                }}
            />


            <CartDrawer
                open={cartOpen}
                onClose={closeCart}
            />

        </>

    );
};

export default CustomerLayout;