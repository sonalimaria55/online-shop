// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//     getVariantsApi,
//     getVariantByIdApi,
//     createVariantApi,
//     updateVariantApi,
//     deleteVariantApi,
// } from "./VariantApi";


// // GET VARIANTS
// export const getVariants = createAsyncThunk(
//     "variants/getVariants",
//     async (_, { rejectWithValue }) => {
//         try {
//             const response = await getVariantsApi();
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(
//                 error.response?.data || error.message
//             );
//         }
//     }
// );


// // GET VARIANT
// export const getVariantById = createAsyncThunk(
//     "variants/getVariantById",
//     async (id, { rejectWithValue }) => {
//         try {
//             const response = await getVariantByIdApi(id);
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(
//                 error.response?.data || error.message
//             );
//         }
//     }
// );


// // CREATE
// export const createVariant = createAsyncThunk(
//     "variants/createVariant",
//     async (data, { rejectWithValue }) => {
//         try {
//             const response = await createVariantApi(data);
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(
//                 error.response?.data || error.message
//             );
//         }
//     }
// );


// // UPDATE
// export const updateVariant = createAsyncThunk(
//     "variants/updateVariant",
//     async ({ id, data }, { rejectWithValue }) => {
//         try {
//             const response = await updateVariantApi(id, data);
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(
//                 error.response?.data || error.message
//             );
//         }
//     }
// );


// // DELETE
// export const deleteVariant = createAsyncThunk(
//     "variants/deleteVariant",
//     async (id, { rejectWithValue }) => {
//         try {
//             const response = await deleteVariantApi(id);
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(
//                 error.response?.data || error.message
//             );
//         }
//     }
// );


import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getVariantsApi,
    createVariantApi,
    updateVariantApi,
    deleteVariantApi,
} from "./VariantApi";

// ==========================
// GET VARIANTS
// ==========================
export const getVariants = createAsyncThunk(
    "variants/getVariants",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getVariantsApi();
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || error.message
            );
        }
    }
);

// ==========================
// CREATE VARIANT
// ==========================
export const createVariant = createAsyncThunk(
    "variants/createVariant",
    async (data, { rejectWithValue }) => {
        try {
            const response = await createVariantApi(data);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || error.message
            );
        }
    }
);

// ==========================
// UPDATE VARIANT
// ==========================
export const updateVariant = createAsyncThunk(
    "variants/updateVariant",
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const response = await updateVariantApi(id, data);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || error.message
            );
        }
    }
);

// ==========================
// DELETE VARIANT
// ==========================
export const deleteVariant = createAsyncThunk(
    "variants/deleteVariant",
    async (id, { rejectWithValue }) => {
        try {
            const response = await deleteVariantApi(id);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || error.message
            );
        }
    }
);