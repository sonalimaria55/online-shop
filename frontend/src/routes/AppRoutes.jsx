

// import NotFound from "../pages/NotFound";

// import {
//     Routes,
//     Route,
// } from "react-router-dom";

// // ============================================
// // PUBLIC PAGES
// // ============================================

// import Landing from "../pages/Landing";
// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";
// import VerifyOTP from "../pages/auth/VerifyOTP";
// import About from "../pages/About";
// import Collections from "../pages/Collections";

// // ============================================
// // LAYOUTS
// // ============================================

// import CustomerLayout from "../layout/CustomerLayout";
// import SuperAdminLayout from "../layout/SuperAdminLayout";
// import ManagementLayout from "../layout/ManagementLayout";

// // ============================================
// // ROUTE PROTECTION
// // ============================================

// import ProtectedRoute from "./ProtectedRoute";

// // ============================================
// // CUSTOMER PAGES
// // ============================================

// import CustomerDashboard from "../pages/customer/Dashboard";
// import ProductDetails from "../pages/products/ProductDetails";
// import Cart from "../pages/customer/Cart";
// import Checkout from "../pages/customer/Checkout";
// import Orders from "../pages/customer/Orders";

// // ============================================
// // ADMIN / MANAGEMENT PAGES
// // ============================================

// import SuperAdminDashboard from "../pages/admin/Dashboard";
// import ManagementDashboard from "../pages/management/Dashboard";

// import ProductManagement from "../pages/products/ProductManagement";
// import BannerManagement from "../pages/banners/BannerManagement";
// import CategoryManagement from "../pages/categories/CategoryManagement";
// import VariantManagement from "../pages/management/VarientManagement";

// // ============================================
// // APP ROUTES
// // ============================================

// const AppRoutes = () => {

//     return (

//         <Routes>

//             {/* ======================================== */}
//             {/* PUBLIC ROUTES */}
//             {/* ======================================== */}

//             <Route
//                 path="/"
//                 element={<Landing />}
//             />

//             <Route
//                 path="/about"
//                 element={<About />}
//             />

//             <Route
//                 path="/collections"
//                 element={<Collections />}
//             />

//             <Route
//                 path="/login"
//                 element={<Login />}
//             />

//             <Route
//                 path="/register"
//                 element={<Register />}
//             />

//             <Route
//                 path="/verify-otp"
//                 element={<VerifyOTP />}
//             />

//             {/* ======================================== */}
//             {/* PUBLIC PRODUCT DETAILS */}
//             {/* ======================================== */}

//             <Route
//                 path="/product/:id"
//                 element={<ProductDetails />}
//             />

//             {/* ======================================== */}
//             {/* CUSTOMER */}
//             {/* ======================================== */}

//             <Route
//                 path="/boutique"
//                 element={
//                     <ProtectedRoute
//                         allowedRoles={[
//                             "customer",
//                         ]}
//                     >
//                         <CustomerLayout />
//                     </ProtectedRoute>
//                 }
//             >

//                 <Route
//                     index
//                     element={<CustomerDashboard />}
//                 />

//                 <Route
//                     path="cart"
//                     element={<Cart />}
//                 />

//                 <Route
//                     path="checkout"
//                     element={<Checkout />}
//                 />

//                 <Route
//                     path="orders"
//                     element={<Orders />}
//                 />

//             </Route>

//             {/* ======================================== */}
//             {/* SUPER ADMIN */}
//             {/* ======================================== */}

//             <Route
//                 path="/super-admin"
//                 element={
//                     <ProtectedRoute
//                         allowedRoles={[
//                             "super_admin",
//                         ]}
//                     >
//                         <SuperAdminLayout />
//                     </ProtectedRoute>
//                 }
//             >

//                 <Route
//                     index
//                     element={<SuperAdminDashboard />}
//                 />

//                 <Route
//                     path="products"
//                     element={<ProductManagement />}
//                 />

//                 <Route
//                     path="categories"
//                     element={<CategoryManagement />}
//                 />

//                 <Route
//                     path="variants"
//                     element={<VariantManagement />}
//                 />

//                 <Route
//                     path="banners"
//                     element={<BannerManagement />}
//                 />

//             </Route>

//             {/* ======================================== */}
//             {/* MANAGEMENT */}
//             {/* ======================================== */}

//             <Route
//                 path="/management"
//                 element={
//                     <ProtectedRoute
//                         allowedRoles={[
//                             "management_support",
//                         ]}
//                     >
//                         <ManagementLayout />
//                     </ProtectedRoute>
//                 }
//             >

//                 <Route
//                     index
//                     element={<ManagementDashboard />}
//                 />

//                 <Route
//                     path="products"
//                     element={<ProductManagement />}
//                 />

//                 <Route
//                     path="categories"
//                     element={<CategoryManagement />}
//                 />

//                 <Route
//                     path="variants"
//                     element={<VariantManagement />}
//                 />

//                 <Route
//                     path="banners"
//                     element={<BannerManagement />}
//                 />

//             </Route>

//             {/* ======================================== */}
//             {/* CATCH ALL */}
//             {/* ======================================== */}

//             {/* <Route
//                 path="*"
//                 element={<NotFound />}
//             /> */}

//         </Routes>

//     );

// };

// // ============================================
// // DEFAULT EXPORT
// // ============================================

// export default AppRoutes;
// //------------------------------------------------------

// import NotFound from "../pages/NotFound";

// import {
//     Routes,
//     Route,
// } from "react-router-dom";

// // ============================================
// // PUBLIC PAGES
// // ============================================

// import Landing from "../pages/Landing";
// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";
// import VerifyOTP from "../pages/auth/VerifyOTP";
// import About from "../pages/About";
// import Collections from "../pages/Collections";

// // ============================================
// // COMPONENTS
// // ============================================

// // IMPORTANT:
// // This is the actual collections content.
// // It will be used inside CustomerLayout as well.
// import CollectionsSection from "../components/Collections";

// // ============================================
// // LAYOUTS
// // ============================================

// import CustomerLayout from "../layout/CustomerLayout";
// import SuperAdminLayout from "../layout/SuperAdminLayout";
// import ManagementLayout from "../layout/ManagementLayout";

// // ============================================
// // ROUTE PROTECTION
// // ============================================

// import ProtectedRoute from "./ProtectedRoute";

// // ============================================
// // CUSTOMER PAGES
// // ============================================

// import CustomerDashboard from "../pages/customer/Dashboard";
// import ProductDetails from "../pages/products/ProductDetails";
// import Cart from "../pages/customer/Cart";
// import Checkout from "../pages/customer/Checkout";
// import Orders from "../pages/customer/Orders";

// // ============================================
// // ADMIN / MANAGEMENT PAGES
// // ============================================

// import SuperAdminDashboard from "../pages/admin/Dashboard";
// import ManagementDashboard from "../pages/management/Dashboard";

// import ProductManagement from "../pages/products/ProductManagement";
// import BannerManagement from "../pages/banners/BannerManagement";
// import CategoryManagement from "../pages/categories/CategoryManagement";
// import VariantManagement from "../pages/management/VarientManagement";


// // ============================================
// // APP ROUTES
// // ============================================

// const AppRoutes = () => {

//     return (

//         <Routes>

//             {/* ==================================================
//                 PUBLIC ROUTES
//             ================================================== */}

//             <Route
//                 path="/"
//                 element={<Landing />}
//             />


//             <Route
//                 path="/about"
//                 element={<About />}
//             />


//             {/* --------------------------------------------------
//                 VISITOR COLLECTIONS

//                 VisitorNavbar is used by:
//                 pages/Collections.jsx
//             -------------------------------------------------- */}

//             <Route
//                 path="/collections"
//                 element={<Collections />}
//             />


//             <Route
//                 path="/login"
//                 element={<Login />}
//             />


//             <Route
//                 path="/register"
//                 element={<Register />}
//             />


//             <Route
//                 path="/verify-otp"
//                 element={<VerifyOTP />}
//             />


//             {/* ==================================================
//                 PUBLIC PRODUCT DETAILS
//             ================================================== */}

//             <Route
//                 path="/product/:id"
//                 element={<ProductDetails />}
//             />


//             {/* ==================================================
//                 CUSTOMER
//             ================================================== */}

//             <Route
//                 path="/boutique"
//                 element={
//                     <ProtectedRoute
//                         allowedRoles={[
//                             "customer",
//                         ]}
//                     >
//                         <CustomerLayout />
//                     </ProtectedRoute>
//                 }
//             >

//                 {/* ------------------------------------------------
//                     CUSTOMER HOME
//                 ------------------------------------------------ */}

//                 <Route
//                     index
//                     element={<CustomerDashboard />}
//                 />


//                 {/* ------------------------------------------------
//                     CUSTOMER COLLECTIONS

//                     IMPORTANT:

//                     This route is INSIDE CustomerLayout.

//                     Therefore it automatically receives:

//                     CustomerNavbar
//                     +
//                     CartDrawer
//                 ------------------------------------------------ */}

//                 <Route
//                     path="collections"
//                     element={
//                         <CollectionsSection />
//                     }
//                 />


//                 {/* ------------------------------------------------
//                     CUSTOMER CART
//                 ------------------------------------------------ */}

//                 <Route
//                     path="cart"
//                     element={<Cart />}
//                 />


//                 {/* ------------------------------------------------
//                     CUSTOMER CHECKOUT
//                 ------------------------------------------------ */}

//                 <Route
//                     path="checkout"
//                     element={<Checkout />}
//                 />


//                 {/* ------------------------------------------------
//                     CUSTOMER ORDERS
//                 ------------------------------------------------ */}

//                 <Route
//                     path="orders"
//                     element={<Orders />}
//                 />

//             </Route>


//             {/* ==================================================
//                 SUPER ADMIN
//             ================================================== */}

//             <Route
//                 path="/super-admin"
//                 element={
//                     <ProtectedRoute
//                         allowedRoles={[
//                             "super_admin",
//                         ]}
//                     >
//                         <SuperAdminLayout />
//                     </ProtectedRoute>
//                 }
//             >

//                 {/* Dashboard */}

//                 <Route
//                     index
//                     element={
//                         <SuperAdminDashboard />
//                     }
//                 />


//                 {/* Products */}

//                 <Route
//                     path="products"
//                     element={
//                         <ProductManagement />
//                     }
//                 />


//                 {/* Categories */}

//                 <Route
//                     path="categories"
//                     element={
//                         <CategoryManagement />
//                     }
//                 />


//                 {/* Variants */}

//                 <Route
//                     path="variants"
//                     element={
//                         <VariantManagement />
//                     }
//                 />


//                 {/* Banners */}

//                 <Route
//                     path="banners"
//                     element={
//                         <BannerManagement />
//                     }
//                 />

//             </Route>


//             {/* ==================================================
//                 MANAGEMENT
//             ================================================== */}

//             <Route
//                 path="/management"
//                 element={
//                     <ProtectedRoute
//                         allowedRoles={[
//                             "management_support",
//                         ]}
//                     >
//                         <ManagementLayout />
//                     </ProtectedRoute>
//                 }
//             >

//                 {/* Dashboard */}

//                 <Route
//                     index
//                     element={
//                         <ManagementDashboard />
//                     }
//                 />


//                 {/* Products */}

//                 <Route
//                     path="products"
//                     element={
//                         <ProductManagement />
//                     }
//                 />


//                 {/* Categories */}

//                 <Route
//                     path="categories"
//                     element={
//                         <CategoryManagement />
//                     }
//                 />


//                 {/* Variants */}

//                 <Route
//                     path="variants"
//                     element={
//                         <VariantManagement />
//                     }
//                 />


//                 {/* Banners */}

//                 <Route
//                     path="banners"
//                     element={
//                         <BannerManagement />
//                     }
//                 />

//             </Route>


//             {/* ==================================================
//                 CATCH ALL
//             ================================================== */}

//             <Route
//                 path="*"
//                 element={<NotFound />}
//             />

//         </Routes>

//     );

// };


// // ============================================
// // DEFAULT EXPORT
// // ============================================

// export default AppRoutes;
//-------------------------------------------------

// import NotFound from "../pages/NotFound";

// import {
//     Routes,
//     Route,
// } from "react-router-dom";

// // ============================================
// // PUBLIC PAGES
// // ============================================

// import Landing from "../pages/Landing";
// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";
// import VerifyOTP from "../pages/auth/VerifyOTP";
// import About from "../pages/About";
// import Collections from "../pages/Collections";

// // ============================================
// // COMPONENTS
// // ============================================

// import CollectionsSection from "../components/Collections";

// // ============================================
// // LAYOUTS
// // ============================================

// import VisitorLayout from "../layout/VisitorLayout";
// import CustomerLayout from "../layout/CustomerLayout";
// import SuperAdminLayout from "../layout/SuperAdminLayout";
// import ManagementLayout from "../layout/ManagementLayout";

// // ============================================
// // ROUTE PROTECTION
// // ============================================

// import ProtectedRoute from "./ProtectedRoute";

// // ============================================
// // CUSTOMER PAGES
// // ============================================

// import CustomerDashboard from "../pages/customer/Dashboard";
// import ProductDetails from "../pages/products/ProductDetails";
// import Cart from "../pages/customer/Cart";
// import Checkout from "../pages/customer/Checkout";
// import Orders from "../pages/customer/Orders";

// // ============================================
// // ADMIN / MANAGEMENT PAGES
// // ============================================

// import SuperAdminDashboard from "../pages/admin/Dashboard";
// import ManagementDashboard from "../pages/management/Dashboard";

// import ProductManagement from "../pages/products/ProductManagement";
// import BannerManagement from "../pages/banners/BannerManagement";
// import CategoryManagement from "../pages/categories/CategoryManagement";
// import VariantManagement from "../pages/management/VarientManagement";

// // ============================================
// // APP ROUTES
// // ============================================

// const AppRoutes = () => {

//     return (

//         <Routes>

//             {/* ==================================================
//                 VISITOR
//             ================================================== */}

//             <Route element={<VisitorLayout />}>

//                 <Route
//                     path="/"
//                     element={<Landing />}
//                 />

//                 <Route
//                     path="/about"
//                     element={<About />}
//                 />

//                 <Route
//                     path="/collections"
//                     element={<Collections />}
//                 />

//             </Route>


//             {/* ==================================================
//                 AUTH
//             ================================================== */}

//             <Route
//                 path="/login"
//                 element={<Login />}
//             />

//             <Route
//                 path="/register"
//                 element={<Register />}
//             />

//             <Route
//                 path="/verify-otp"
//                 element={<VerifyOTP />}
//             />


//             {/* ==================================================
//                 PUBLIC PRODUCT DETAILS
//             ================================================== */}

//             <Route
//                 path="/product/:id"
//                 element={<ProductDetails />}
//             />


//             {/* ==================================================
//                 CUSTOMER
//             ================================================== */}

//             <Route
//                 path="/boutique"
//                 element={
//                     <ProtectedRoute
//                         allowedRoles={[
//                             "customer",
//                         ]}
//                     >
//                         <CustomerLayout />
//                     </ProtectedRoute>
//                 }
//             >

//                 {/* CUSTOMER HOME */}

//                 <Route
//                     index
//                     element={<CustomerDashboard />}
//                 />


//                 {/* CUSTOMER COLLECTIONS */}

//                 <Route
//                     path="collections"
//                     element={<CollectionsSection />}
//                 />


//                 {/* CUSTOMER CART */}

//                 <Route
//                     path="cart"
//                     element={<Cart />}
//                 />


//                 {/* CUSTOMER CHECKOUT */}

//                 <Route
//                     path="checkout"
//                     element={<Checkout />}
//                 />


//                 {/* CUSTOMER ORDERS */}

//                 <Route
//                     path="orders"
//                     element={<Orders />}
//                 />

//             </Route>


//             {/* ==================================================
//                 SUPER ADMIN
//             ================================================== */}

//             <Route
//                 path="/super-admin"
//                 element={
//                     <ProtectedRoute
//                         allowedRoles={[
//                             "super_admin",
//                         ]}
//                     >
//                         <SuperAdminLayout />
//                     </ProtectedRoute>
//                 }
//             >

//                 <Route
//                     index
//                     element={
//                         <SuperAdminDashboard />
//                     }
//                 />

//                 <Route
//                     path="products"
//                     element={
//                         <ProductManagement />
//                     }
//                 />

//                 <Route
//                     path="categories"
//                     element={
//                         <CategoryManagement />
//                     }
//                 />

//                 <Route
//                     path="variants"
//                     element={
//                         <VariantManagement />
//                     }
//                 />

//                 <Route
//                     path="banners"
//                     element={
//                         <BannerManagement />
//                     }
//                 />

//             </Route>


//             {/* ==================================================
//                 MANAGEMENT
//             ================================================== */}

//             <Route
//                 path="/management"
//                 element={
//                     <ProtectedRoute
//                         allowedRoles={[
//                             "management_support",
//                         ]}
//                     >
//                         <ManagementLayout />
//                     </ProtectedRoute>
//                 }
//             >

//                 <Route
//                     index
//                     element={
//                         <ManagementDashboard />
//                     }
//                 />

//                 <Route
//                     path="products"
//                     element={
//                         <ProductManagement />
//                     }
//                 />

//                 <Route
//                     path="categories"
//                     element={
//                         <CategoryManagement />
//                     }
//                 />

//                 <Route
//                     path="variants"
//                     element={
//                         <VariantManagement />
//                     }
//                 />

//                 <Route
//                     path="banners"
//                     element={
//                         <BannerManagement />
//                     }
//                 />

//             </Route>


//             {/* ==================================================
//                 CATCH ALL
//             ================================================== */}

//             <Route
//                 path="*"
//                 element={<NotFound />}
//             />

//         </Routes>

//     );
// };

// export default AppRoutes;
//-------------------------------------------
import NotFound from "../pages/NotFound";

import {
    Routes,
    Route,
} from "react-router-dom";

// ============================================
// PUBLIC PAGES
// ============================================

import Landing from "../pages/Landing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import VerifyOTP from "../pages/auth/VerifyOTP";
import About from "../pages/About";
import Collections from "../pages/Collections";

// ============================================
// LAYOUTS
// ============================================

import VisitorLayout from "../layout/VisitorLayout";
import CustomerLayout from "../layout/CustomerLayout";
import SuperAdminLayout from "../layout/SuperAdminLayout";
import ManagementLayout from "../layout/ManagementLayout";

// ============================================
// ROUTE PROTECTION
// ============================================

import ProtectedRoute from "./ProtectedRoute";

// ============================================
// CUSTOMER PAGES
// ============================================

import CustomerDashboard from "../pages/customer/Dashboard";
import ProductDetails from "../pages/products/ProductDetails";
import Cart from "../pages/customer/Cart";
import Checkout from "../pages/customer/Checkout";
import Orders from "../pages/customer/Orders";

// ============================================
// ADMIN / MANAGEMENT
// ============================================

import SuperAdminDashboard from "../pages/admin/Dashboard";
import ManagementDashboard from "../pages/management/Dashboard";

import ProductManagement from "../pages/products/ProductManagement";
import BannerManagement from "../pages/banners/BannerManagement";
import CategoryManagement from "../pages/categories/CategoryManagement";
import VariantManagement from "../pages/management/VarientManagement";

//------
import Profile from "../pages/customer/Profile";


// ============================================
// COMPONENT
// ============================================
import CollectionProducts from "../pages/products/CollectionProducts";
const AppRoutes = () => {

    return (

        <Routes>

            {/* ==================================================
                VISITOR SHOPPING AREA
            ================================================== */}

            <Route
                element={<VisitorLayout />}
            >

                {/* HOME */}

                <Route
                    path="/"
                    element={<Landing />}
                />


                {/* ABOUT */}

                <Route
                    path="/about"
                    element={<About />}
                />


                {/* COLLECTIONS */}

                <Route
                    path="/collections"
                    element={<Collections />}
                />

<Route
    path="/collections/:categoryId"
    element={<CollectionProducts />}
/>





                {/* PRODUCT DETAILS */}

                <Route
                    path="/product/:id"
                    element={<ProductDetails />}
                />

            </Route>


            {/* ==================================================
                AUTHENTICATION
               
                These are outside VisitorLayout intentionally.
                ================================================== */}

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/verify-otp"
                element={<VerifyOTP />}
            />


            {/* ==================================================
                CUSTOMER
            ================================================== */}

            <Route
                path="/boutique"
                element={
                    <ProtectedRoute
                        allowedRoles={[
                            "customer",
                        ]}
                    >
                        <CustomerLayout />
                    </ProtectedRoute>
                }
            >

                {/* CUSTOMER HOME */}

                <Route
                    index
                    element={<CustomerDashboard />}
                />


                {/* CUSTOMER COLLECTIONS */}

                <Route
                    path="collections"
                    element={<Collections />}
                />


                {/* CUSTOMER CART */}

                <Route
                    path="cart"
                    element={<Cart />}
                />


                {/* CUSTOMER CHECKOUT */}

                <Route
                    path="checkout"
                    element={<Checkout />}
                />


                {/* CUSTOMER ORDERS */}

                <Route
                    path="orders"
                    element={<Orders />}
                />
                <Route path="profile" element={<Profile />} />

            </Route>


            {/* ==================================================
                SUPER ADMIN
            ================================================== */}

            <Route
                path="/super-admin"
                element={
                    <ProtectedRoute
                        allowedRoles={[
                            "super_admin",
                        ]}
                    >
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


            {/* ==================================================
                MANAGEMENT
            ================================================== */}

            <Route
                path="/management"
                element={
                    <ProtectedRoute
                        allowedRoles={[
                            "management_support",
                        ]}
                    >
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


            {/* ==================================================
                NOT FOUND
            ================================================== */}

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
    );
};

export default AppRoutes;