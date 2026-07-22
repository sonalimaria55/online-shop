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

import { useState } from "react";
import { Outlet } from "react-router-dom";

import CustomerNavbar from "../components/navbar/CustomerNavbar";
import CartDrawer from "../components/cart/CartDrawer";

const CustomerLayout = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <CustomerNavbar
        onCartClick={() => setCartOpen(true)}
      />
      <Outlet />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
};

export default CustomerLayout;