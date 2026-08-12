

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
// ADMIN / MANAGEMENT PAGES
// ============================================

import SuperAdminDashboard from "../pages/admin/Dashboard";
import ManagementDashboard from "../pages/management/Dashboard";

import ProductManagement from "../pages/products/ProductManagement";
import BannerManagement from "../pages/banners/BannerManagement";
import CategoryManagement from "../pages/categories/CategoryManagement";
import VariantManagement from "../pages/management/VarientManagement";

// ============================================
// APP ROUTES
// ============================================

const AppRoutes = () => {

    return (

        <Routes>

            {/* ======================================== */}
            {/* PUBLIC ROUTES */}
            {/* ======================================== */}

            <Route
                path="/"
                element={<Landing />}
            />

            <Route
                path="/about"
                element={<About />}
            />

            <Route
                path="/collections"
                element={<Collections />}
            />

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

            {/* ======================================== */}
            {/* PUBLIC PRODUCT DETAILS */}
            {/* ======================================== */}

            <Route
                path="/product/:id"
                element={<ProductDetails />}
            />

            {/* ======================================== */}
            {/* CUSTOMER */}
            {/* ======================================== */}

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

                <Route
                    index
                    element={<CustomerDashboard />}
                />

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

            {/* ======================================== */}
            {/* SUPER ADMIN */}
            {/* ======================================== */}

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

            {/* ======================================== */}
            {/* MANAGEMENT */}
            {/* ======================================== */}

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

            {/* ======================================== */}
            {/* CATCH ALL */}
            {/* ======================================== */}

            {/* <Route
                path="*"
                element={<NotFound />}
            /> */}

        </Routes>

    );

};

// ============================================
// DEFAULT EXPORT
// ============================================

export default AppRoutes;