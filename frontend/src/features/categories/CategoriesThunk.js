// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//     createCategoryApi,
//     getCategoriesApi,
//     deleteCategoryApi
// } from "./CategoriesApi";



// export const createCategory = createAsyncThunk(
//     "categories/createCategory",
//     async(data,{rejectWithValue})=>{

//         try{

//             return await createCategoryApi(data);

//         }catch(error){

//             return rejectWithValue(
//                 error.response.data
//             );

//         }

//     }
// );



// export const getCategories = createAsyncThunk(
//     "categories/getCategories",
//     async(_,{rejectWithValue})=>{

//         try{

//             return await getCategoriesApi();

//         }catch(error){

//             return rejectWithValue(
//                 error.response.data
//             );

//         }

//     }
// );



// export const deleteCategory = createAsyncThunk(
//     "categories/deleteCategory",
//     async(id,{rejectWithValue})=>{

//         try{

//             return await deleteCategoryApi(id);

//         }catch(error){

//             return rejectWithValue(
//                 error.response.data
//             );

//         }

//     }
// );


// export const updateCategory = createAsyncThunk(
//     "categories/updateCategory",
//     async ({ id, data }, { rejectWithValue }) => {
//         try {
//             return await updateCategoryApi(id, data);
//         } catch (error) {
//             return rejectWithValue(error.response.data);
//         }
//     }
// );


import { createAsyncThunk } from "@reduxjs/toolkit";

import {

    createCategoryApi,

    getCategoriesApi,

    getCategoryByIdApi,

    updateCategoryApi,

    deleteCategoryApi

} from "./CategoriesApi";



// CREATE CATEGORY
export const createCategory = createAsyncThunk(

    "categories/createCategory",

    async (data, { rejectWithValue }) => {

        try {

            return await createCategoryApi(data);

        } catch (error) {

            return rejectWithValue(
                error.response.data
            );

        }

    }

);



// GET ALL CATEGORIES
export const getCategories = createAsyncThunk(

    "categories/getCategories",

    async (_, { rejectWithValue }) => {

        try {

            return await getCategoriesApi();

        } catch (error) {

            return rejectWithValue(
                error.response.data
            );

        }

    }

);



// GET SINGLE CATEGORY
export const getCategoryById = createAsyncThunk(

    "categories/getCategoryById",

    async (id, { rejectWithValue }) => {

        try {

            return await getCategoryByIdApi(id);

        } catch (error) {

            return rejectWithValue(
                error.response.data
            );

        }

    }

);



// UPDATE CATEGORY
export const updateCategory = createAsyncThunk(

    "categories/updateCategory",

    async ({ id, data }, { rejectWithValue }) => {

        try {

            return await updateCategoryApi(
                id,
                data
            );

        } catch (error) {

            return rejectWithValue(
                error.response.data
            );

        }

    }

);



// DELETE CATEGORY
export const deleteCategory = createAsyncThunk(

    "categories/deleteCategory",

    async (id, { rejectWithValue }) => {

        try {

            return await deleteCategoryApi(id);

        } catch (error) {

            return rejectWithValue(
                error.response.data
            );

        }

    }

);