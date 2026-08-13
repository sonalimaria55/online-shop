// import { useState } from "react";
// import { Outlet } from "react-router-dom";

// import VisitorNavbar from "../components/navbar/VisitorNavbar";
// import CartDrawer from "../components/cart/CartDrawer";

// const VisitorLayout = () => {

//     const [cartOpen, setCartOpen] = useState(false);

//     const openCart = () => {
//         console.log("VISITOR LAYOUT: OPEN CART");
//         setCartOpen(true);
//     };

//     const closeCart = () => {
//         console.log("VISITOR LAYOUT: CLOSE CART");
//         setCartOpen(false);
//     };

//     return (
//         <>
//             <VisitorNavbar
//                 onCartClick={openCart}
//             />

//             <Outlet />

//             <CartDrawer
//                 open={cartOpen}
//                 onClose={closeCart}
//             />
//         </>
//     );
// };

// export default VisitorLayout;
//------------------------------------------------------------

// import { useState } from "react";
// import { Outlet } from "react-router-dom";

// import VisitorNavbar from "../components/navbar/VisitorNavbar";
// import CartDrawer from "../components/cart/CartDrawer";
// import Footer from "../components/Footer";

// const VisitorLayout = () => {
//     const [cartOpen, setCartOpen] = useState(false);

//     const openCart = () => {
//         setCartOpen(true);
//     };

//     const closeCart = () => {
//         setCartOpen(false);
//     };

//     return (
//         <>
//             <VisitorNavbar
//                 onCartClick={openCart}
//             />

//             <Outlet
//                 context={{
//                     openCart,
//                     closeCart,
//                 }}
//             />

//             <Footer />

//             <CartDrawer
//                 open={cartOpen}
//                 onClose={closeCart}
//             />
//         </>
//     );
// };

// export default VisitorLayout;

import { useState } from "react";
import { Outlet } from "react-router-dom";

import VisitorNavbar from "../components/navbar/VisitorNavbar";
import CartDrawer from "../components/cart/CartDrawer";
import Footer from "../components/Footer";

const VisitorLayout = () => {

    const [cartOpen, setCartOpen] = useState(false);

    const openCart = () => {
        setCartOpen(true);
    };

    const closeCart = () => {
        setCartOpen(false);
    };

    return (
        <>
            {/* ================================
                VISITOR NAVBAR
            ================================= */}

            <VisitorNavbar
                onCartClick={openCart}
            />


            {/* ================================
                PAGE CONTENT
            ================================= */}

            <Outlet />


            {/* ================================
                SINGLE FOOTER
            ================================= */}

            <Footer />


            {/* ================================
                VISITOR CART DRAWER
            ================================= */}

            <CartDrawer
                open={cartOpen}
                onClose={closeCart}
            />

        </>
    );
};

export default VisitorLayout;