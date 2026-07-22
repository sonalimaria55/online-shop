// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//   getCartApi,
//   addToCartApi,
//   updateCartApi,
//   removeCartItemApi,
//   clearCartApi,
// } from "./CartApi";


// // GET CART
// export const getCart = createAsyncThunk(
//   "cart/getCart",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await getCartApi();
//       return response.data.cart;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Failed to get cart"
//       );
//     }
//   }
// );


// // ADD TO CART
// export const addToCart = createAsyncThunk(
//   "cart/addToCart",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await addToCartApi(data);
//       return response.data.cart;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Failed to add item"
//       );
//     }
//   }
// );


// // UPDATE QUANTITY
// export const updateCart = createAsyncThunk(
//   "cart/updateCart",
//   async ({productId, quantity}, { rejectWithValue }) => {
//     try {
//       const response = await updateCartApi(productId, quantity);
//       return response.data.cart;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Failed to update cart"
//       );
//     }
//   }
// );


// // REMOVE ITEM
// export const removeCartItem = createAsyncThunk(
//   "cart/removeCartItem",
//   async (productId, { rejectWithValue }) => {
//     try {
//       const response = await removeCartItemApi(productId);
//       return response.data.cart;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Failed to remove item"
//       );
//     }
//   }
// );


// // CLEAR CART
// export const clearCart = createAsyncThunk(
//   "cart/clearCart",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await clearCartApi();
//       return response.data.cart;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Failed to clear cart"
//       );
//     }
//   }
// );

//------------------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getCartApi,
  addToCartApi,
  updateCartApi,
  removeCartItemApi,
  clearCartApi,
  mergeGuestCartApi,
} from "./CartApi";


// ===============================
// GET CART
// ===============================
export const getCart = createAsyncThunk(
  "cart/getCart",
  async (_, { rejectWithValue }) => {

    try {

      const response = await getCartApi();

      return response.data.cart;

    } catch (error) {

      return rejectWithValue(
        error.response?.data?.message || "Failed to get cart"
      );

    }

  }
);



// ===============================
// ADD TO CART
// ===============================
export const addToCart = createAsyncThunk(
  "cart/addToCart",

  async (data, { rejectWithValue }) => {

    console.log("CART THUNK DATA:", data);

    try {

      const response = await addToCartApi(data);


      console.log(
        "CART RESPONSE:",
        response.data
      );


      return response.data.cart;


    } catch (error) {


      console.log(
        "CART ERROR:",
        error.response?.data || error.message
      );


      return rejectWithValue(
        error.response?.data?.message || "Failed to add item"
      );

    }

  }
);



// ===============================
// UPDATE QUANTITY
// ===============================
export const updateCart = createAsyncThunk(

  "cart/updateCart",

  async (
    { productId, quantity },
    { rejectWithValue }
  ) => {


    try {


      const response =
        await updateCartApi(
          productId,
          quantity
        );


      return response.data.cart;


    } catch(error){


      return rejectWithValue(
        error.response?.data?.message ||
        "Failed to update cart"
      );


    }

  }

);



// ===============================
// REMOVE ITEM
// ===============================
export const removeCartItem = createAsyncThunk(

  "cart/removeCartItem",

  async (
    productId,
    { rejectWithValue }
  ) => {


    try {


      const response =
        await removeCartItemApi(
          productId
        );


      return response.data.cart;


    } catch(error){


      return rejectWithValue(
        error.response?.data?.message ||
        "Failed to remove item"
      );


    }

  }

);



// ===============================
// CLEAR CART
// ===============================
export const clearCart = createAsyncThunk(

  "cart/clearCart",

  async (
    _,
    { rejectWithValue }
  ) => {


    try {


      const response =
        await clearCartApi();


      return response.data.cart;


    } catch(error){


      return rejectWithValue(
        error.response?.data?.message ||
        "Failed to clear cart"
      );


    }

  }

);

// ===============================
// MERGE GUEST CART
// ===============================
export const mergeGuestCart = createAsyncThunk(

  "cart/mergeGuestCart",

  async (_, { rejectWithValue }) => {

    try {

      const response = await mergeGuestCartApi();

      return response.data.cart;

    } catch (error) {

      return rejectWithValue(
        error.response?.data?.message ||
        "Failed to merge guest cart"
      );

    }

  }

);