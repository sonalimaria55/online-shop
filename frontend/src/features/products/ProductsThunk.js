// const express = require("express");
// const router = express.Router();

// const {
//   createProduct,
//   getProducts,
//   getProductById,
//   updateProduct,
//   deleteProduct,
//   getHomeCollections,
//   getFeaturedProducts,
// } = require("../controllers/productController");

// const upload = require("../middleware/upload");

// // ===============================
// // Home Sections
// // ===============================

// router.get("/home-collections", getHomeCollections);

// router.get("/featured-products", getFeaturedProducts);

// // ===============================
// // Product CRUD
// // ===============================

// // Create Product
// router.post("/", upload("serina/products").array("images", 5), createProduct);

// // Get All Products
// router.get("/", getProducts);

// // Get Product By ID
// router.get("/:id", getProductById);

// // Update Product
// router.put("/:id", upload("serina/products").array("images", 5), updateProduct);

// // Delete Product
// router.delete("/:id", deleteProduct);

// module.exports = router;

import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getProductsApi,
    getFeaturedProductsApi,
    getHomeCollectionsApi,
    createProductApi,
    updateProductApi,
    deleteProductApi,
    getProductByIdApi
} from "./ProductsApi";



// GET ALL PRODUCTS
// export const getProducts = createAsyncThunk(
//     "products/getProducts",

//     async (_, { rejectWithValue }) => {

//         try {

//             const response = await getProductsApi();

//             return response.data;

//         } catch(error) {

//             return rejectWithValue(
//                 error.response?.data || error.message
//             );

//         }

//     }
// );

// GET ALL PRODUCTS
// export const getProducts = createAsyncThunk(
//     "products/getProducts",

//     async (_, { rejectWithValue }) => {

//         try {

//             const response = await getProductsApi();

//             console.log(
//                 "PRODUCT API RESPONSE:",
//                 response.data
//             );

//             return response.data;

//         } catch(error) {

//             return rejectWithValue(
//                 error.response?.data || error.message
//             );

//         }

//     }
// );
// GET ALL PRODUCTS
// GET ALL PRODUCTS



export const getProducts = createAsyncThunk(
    "products/getProducts",

    async (_, { rejectWithValue }) => {

        try {

            const response = await getProductsApi();

            console.log(
                "PRODUCT API RESPONSE:",
                response.data
            );

            return response.data;

        } catch(error) {

            return rejectWithValue(
                error.response?.data || error.message
            );

        }

    }
);



// GET FEATURED PRODUCTS
export const getFeaturedProducts = createAsyncThunk(
    "products/getFeaturedProducts",

    async (_, { rejectWithValue }) => {

        try {

            const response = await getFeaturedProductsApi();

            return response.data;

        } catch(error) {

            return rejectWithValue(
                error.response?.data || error.message
            );

        }

    }
);




// GET HOME COLLECTIONS
export const getHomeCollections = createAsyncThunk(
    "products/getHomeCollections",

    async (_, { rejectWithValue }) => {

        try {

            const response = await getHomeCollectionsApi();

            return response.data;

        } catch(error) {

            return rejectWithValue(
                error.response?.data || error.message
            );

        }

    }
);




// CREATE PRODUCT
export const createProduct = createAsyncThunk(
    "products/createProduct",

    async (data, { rejectWithValue }) => {

        try {

            const response = await createProductApi(data);

            return response.data;

        } catch(error) {

            return rejectWithValue(
                error.response?.data || error.message
            );

        }

    }
);




// UPDATE PRODUCT
export const updateProduct = createAsyncThunk(
    "products/updateProduct",

    async ({id, data}, { rejectWithValue }) => {

        try {

            const response = await updateProductApi(id, data);

            return response.data;

        } catch(error) {

            return rejectWithValue(
                error.response?.data || error.message
            );

        }

    }
);




// DELETE PRODUCT
export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",

    async (id, { rejectWithValue }) => {

        try {

            const response = await deleteProductApi(id);

            return response.data;

        } catch(error) {

            return rejectWithValue(
                error.response?.data || error.message
            );

        }

    }
);




// GET PRODUCT BY ID
export const getProductById = createAsyncThunk(
    "products/getProductById",

    async (id, { rejectWithValue }) => {

        try {

            const response = await getProductByIdApi(id);

            return response.data;

        } catch(error) {

            return rejectWithValue(
                error.response?.data || error.message
            );

        }

    }
);

