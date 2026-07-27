


// import { Routes, Route, Navigate } from "react-router-dom";

// import Landing from "../pages/Landing";
// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";
// import VerifyOTP from "../pages/auth/VerifyOTP";

// import CustomerLayout from "../layout/CustomerLayout";
// import SuperAdminLayout from "../layout/SuperAdminLayout";
// import ManagementLayout from "../layout/ManagementLayout";

// import CustomerDashboard from "../pages/customer/Dashboard";
// import SuperAdminDashboard from "../pages/admin/Dashboard";
// import ManagementDashboard from "../pages/management/Dashboard";

// import BannerManagement from "../pages/banners/BannerManagement";

// import ProtectedRoute from "./ProtectedRoute";

// import About from "../pages/About";
// import Collections from "../pages/Collections";
// import ProductManagement from "../pages/products/ProductManagement";
// import ProductDetails from "../pages/customer/ProductDetails";

// import Cart from "../pages/customer/Cart";
// import Checkout from "../pages/customer/Checkout";
// import Orders from "../pages/customer/Orders";
// import CategoryManagement from "../pages/categories/CategoryManagement";
// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* ================= Public Routes ================= */}

//       <Route path="/" element={<Landing />} />

//       <Route path="/about" element={<About />} />

//       <Route path="/collections" element={<Collections />} />

//       <Route path="/login" element={<Login />} />

//       <Route path="/register" element={<Register />} />

//       <Route path="/verify-otp" element={<VerifyOTP />} />
//       <Route path="/product/:id" element={<ProductDetails />} />

//       {/* ================= Customer ================= */}
//       <Route
//         path="/boutique"
//         element={
//           <ProtectedRoute allowedRoles={["customer"]}>
//             <CustomerLayout />
//           </ProtectedRoute>
//         }
//       >
//         <Route index element={<CustomerDashboard />} />

//         <Route
//           path="product/:id"
//           element={<ProductDetails />}
//         />

//         <Route
//           path="cart"
//           element={<Cart />}
//         />

//         <Route
//           path="checkout"
//           element={<Checkout />}
//         />

//         <Route
//           path="orders"
//           element={<Orders />}
//         />

//       </Route>

//       {/* ================= Super Admin ================= */}
//       <Route
//         path="/super-admin"
//         element={
//           <ProtectedRoute allowedRoles={["super_admin"]}>
//             <SuperAdminLayout />
//           </ProtectedRoute>
//         }
//       >
//         <Route index element={<SuperAdminDashboard />} />
//         {/* Products */}
//         <Route
//           path="products"
//           element={<ProductManagement />}
//         />

//         <Route
//           path="categories"
//           element={<CategoryManagement />}
//         />

//         {/* Banner Management */}
//         <Route
//           path="banners"
//           element={<BannerManagement />}
//         />
//       </Route>


//       {/* ================= Management ================= */}
//       <Route
//         path="/management"
//         element={
//           <ProtectedRoute allowedRoles={["management_support"]}>
//             <ManagementLayout />
//           </ProtectedRoute>
//         }
//       >
//         <Route index element={<ManagementDashboard />} />
//       </Route>

//       {/* ================= Catch All ================= */}
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// };

// export default AppRoutes;


import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import VerifyOTP from "../pages/auth/VerifyOTP";

import CustomerLayout from "../layout/CustomerLayout";
import SuperAdminLayout from "../layout/SuperAdminLayout";
import ManagementLayout from "../layout/ManagementLayout";

import CustomerDashboard from "../pages/customer/Dashboard";
import SuperAdminDashboard from "../pages/admin/Dashboard";
import ManagementDashboard from "../pages/management/Dashboard";

import BannerManagement from "../pages/banners/BannerManagement";

import ProtectedRoute from "./ProtectedRoute";

import About from "../pages/About";
import Collections from "../pages/Collections";
import ProductManagement from "../pages/products/ProductManagement";
//import ProductDetails from "../pages/customer/ProductDetails";
import ProductDetails from "../pages/products/ProductDetails";

import Cart from "../pages/customer/Cart";
import Checkout from "../pages/customer/Checkout";
import Orders from "../pages/customer/Orders";
import CategoryManagement from "../pages/categories/CategoryManagement";
import VariantManagement from "../pages/management/VarientManagement";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ================= Public Routes ================= */}

      <Route path="/" element={<Landing />} />

      <Route path="/about" element={<About />} />

      <Route path="/collections" element={<Collections />} />

      {/* Product Details (Visible to Visitors + Customers) */}
      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/verify-otp" element={<VerifyOTP />} />

      {/* ================= Customer ================= */}

      <Route
        path="/boutique"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <CustomerLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<CustomerDashboard />} />

        <Route
          path="cart"
          element={<Cart />}
        />

        <Route
          path="checkout"
          element={<Checkout />}
        />

        <Route
          path="orders"
          element={<Orders />}
        />
      </Route>

      {/* ================= Super Admin ================= */}

      <Route
        path="/super-admin"
        element={
          <ProtectedRoute allowedRoles={["super_admin"]}>
            <SuperAdminLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<SuperAdminDashboard />}
        />

        <Route
          path="products"
          element={<ProductManagement />}
        />

        <Route
          path="categories"
          element={<CategoryManagement />}
        />



        <Route
          path="variants"
          element={<VariantManagement />}
        />

        <Route
          path="banners"
          element={<BannerManagement />}
        />
      </Route>

      {/* ================= Management ================= */}

      <Route
        path="/management"
        element={
          <ProtectedRoute allowedRoles={["management_support"]}>
            <ManagementLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<ManagementDashboard />}
        />

        <Route
          path="products"
          element={<ProductManagement />}
        />

        <Route
          path="categories"
          element={<CategoryManagement />}
        />

        <Route
          path="variants"
          element={<VariantManagement />}
        />

        <Route
          path="banners"
          element={<BannerManagement />}
        />
      </Route>

      {/* ================= Catch All ================= */}

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
};

export default AppRoutes;