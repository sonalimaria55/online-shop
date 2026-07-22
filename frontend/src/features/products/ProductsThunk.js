

import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getProductsApi,
    createProductApi,
    updateProductApi,
    deleteProductApi,
    getFeaturedProductsApi,
  getProductByIdApi
} from "./ProductsApi";



// GET PRODUCTS

export const getProducts =
    createAsyncThunk(
        "products/getProducts",

        async (_, thunkAPI) => {

            try {

                const response = await getProductsApi();

                console.log(
                    "PRODUCT RESPONSE:",
                    response.data
                );

                return response.data;

            }
            catch (error) {

                return thunkAPI.rejectWithValue(
                    error.response?.data ||
                    "Failed to load products"
                );

            }

        });





// CREATE PRODUCT

// CREATE PRODUCT

export const createProduct =
createAsyncThunk(

  "products/createProduct",

  async (data, thunkAPI) => {

    try {

      const response =
      await createProductApi(data);

      return response.data;

    }
    catch(error){

      return thunkAPI.rejectWithValue(

        error.response?.data ||

        "Failed to create product"

      );

    }

  }

);





// UPDATE PRODUCT

export const updateProduct =
    createAsyncThunk(
        "products/updateProduct",

        async ({ id, data }, thunkAPI) => {

            try {

                const response =
                    await updateProductApi(id, data);


                return response.data;

            }
            catch (error) {

                return thunkAPI.rejectWithValue(
                    error.response?.data ||
                    "Failed to update product"
                );

            }

        });





// DELETE PRODUCT

export const deleteProduct =
    createAsyncThunk(
        "products/deleteProduct",

        async (id, thunkAPI) => {

            try {

                await deleteProductApi(id);


                return { id };

            }
            catch (error) {

                return thunkAPI.rejectWithValue(
                    error.response?.data ||
                    "Failed to delete product"
                );

            }

        });

// GET FEATURED PRODUCTS

export const getFeaturedProducts =
    createAsyncThunk(

        "products/getFeaturedProducts",

        async (_, thunkAPI) => {


            try {


                const response =
                    await getFeaturedProductsApi();


                return response.data;


            }
            catch (error) {


                return thunkAPI.rejectWithValue(

                    error.response?.data ||

                    "Failed to load featured products"

                );


            }


        }

    );
// GET PRODUCT BY ID
export const getProductById =
createAsyncThunk(

  "products/getProductById",

  async(id, thunkAPI)=>{

    try{

      const response =
      await getProductByIdApi(id);

      return response.data;

    }
    catch(error){

      return thunkAPI.rejectWithValue(

        error.response?.data ||

        "Failed to load product"

      );

    }

  }

);