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

// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//   getCartApi,
//   addToCartApi,
//   updateCartApi,
//   removeCartItemApi,
//   clearCartApi,
//   mergeGuestCartApi,
// } from "./CartApi";

// // ===============================
// // GET CART
// // ===============================
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

// // ===============================
// // ADD TO CART
// // ===============================
// export const addToCart = createAsyncThunk(
//   "cart/addToCart",

//   async (data, { rejectWithValue }) => {

//     console.log("CART THUNK DATA:", data);

//     try {

//       const response = await addToCartApi(data);

//       console.log(
//         "CART RESPONSE:",
//         response.data
//       );

//       return response.data.cart;

//     } catch (error) {

//       console.log(
//         "CART ERROR:",
//         error.response?.data || error.message
//       );

//       return rejectWithValue(
//         error.response?.data?.message || "Failed to add item"
//       );

//     }

//   }
// );

// // ===============================
// // UPDATE QUANTITY
// // ===============================
// export const updateCart = createAsyncThunk(

//   "cart/updateCart",

//   async (
//     { productId, quantity },
//     { rejectWithValue }
//   ) => {

//     try {

//       const response =
//         await updateCartApi(
//           productId,
//           quantity
//         );

//       return response.data.cart;

//     } catch(error){

//       return rejectWithValue(
//         error.response?.data?.message ||
//         "Failed to update cart"
//       );

//     }

//   }

// );

// // ===============================
// // REMOVE ITEM
// // ===============================
// export const removeCartItem = createAsyncThunk(

//   "cart/removeCartItem",

//   async (
//     productId,
//     { rejectWithValue }
//   ) => {

//     try {

//       const response =
//         await removeCartItemApi(
//           productId
//         );

//       return response.data.cart;

//     } catch(error){

//       return rejectWithValue(
//         error.response?.data?.message ||
//         "Failed to remove item"
//       );

//     }

//   }

// );

// // ===============================
// // CLEAR CART
// // ===============================
// export const clearCart = createAsyncThunk(

//   "cart/clearCart",

//   async (
//     _,
//     { rejectWithValue }
//   ) => {

//     try {

//       const response =
//         await clearCartApi();

//       return response.data.cart;

//     } catch(error){

//       return rejectWithValue(
//         error.response?.data?.message ||
//         "Failed to clear cart"
//       );

//     }

//   }

// );

// // ===============================
// // MERGE GUEST CART
// // ===============================
// export const mergeGuestCart = createAsyncThunk(

//   "cart/mergeGuestCart",

//   async (_, { rejectWithValue }) => {

//     try {

//       const response = await mergeGuestCartApi();

//       return response.data.cart;

//     } catch (error) {

//       return rejectWithValue(
//         error.response?.data?.message ||
//         "Failed to merge guest cart"
//       );

//     }

//   }

// );
//--------------------------------------------------------------------------

// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//     getCartApi,
//     addToCartApi,
//     updateCartApi,
//     removeCartItemApi,
//     clearCartApi,
//     mergeGuestCartApi,
// } from "./CartApi";

// // ======================================================
// // GET CART
// // ======================================================

// export const getCart = createAsyncThunk(
//     "cart/getCart",

//     async (_, { rejectWithValue }) => {

//         try {

//             const response =
//                 await getCartApi();

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "GET CART ERROR:",
//                 error.response?.data ||
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to get cart"
//             );
//         }
//     }
// );

// // ======================================================
// // ADD TO CART
// // ======================================================

// export const addToCart = createAsyncThunk(
//     "cart/addToCart",

//     async (data, { rejectWithValue }) => {

//         console.log(
//             "CART THUNK DATA:",
//             data
//         );

//         try {

//             const response =
//                 await addToCartApi(data);

//             console.log(
//                 "CART RESPONSE:",
//                 response.data
//             );

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "ADD CART ERROR:",
//                 error.response?.data ||
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to add item"
//             );
//         }
//     }
// );

// // ======================================================
// // UPDATE CART ITEM QUANTITY
// // ======================================================

// export const updateCart = createAsyncThunk(
//     "cart/updateCart",

//     async (
//         { itemId, quantity },
//         { rejectWithValue }
//     ) => {

//         console.log(
//             "UPDATE CART:",
//             {
//                 itemId,
//                 quantity,
//             }
//         );

//         try {

//             if (!itemId) {
//                 throw new Error(
//                     "Cart item ID is required"
//                 );
//             }

//             const response =
//                 await updateCartApi(
//                     itemId,
//                     quantity
//                 );

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "UPDATE CART ERROR:",
//                 error.response?.data ||
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 error.message ||
//                 "Failed to update cart"
//             );
//         }
//     }
// );

// // ======================================================
// // REMOVE CART ITEM
// // ======================================================

// export const removeCartItem = createAsyncThunk(
//     "cart/removeCartItem",

//     async (
//         itemId,
//         { rejectWithValue }
//     ) => {

//         console.log(
//             "REMOVE CART ITEM:",
//             itemId
//         );

//         try {

//             if (!itemId) {
//                 throw new Error(
//                     "Cart item ID is required"
//                 );
//             }

//             const response =
//                 await removeCartItemApi(
//                     itemId
//                 );

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "REMOVE CART ERROR:",
//                 error.response?.data ||
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 error.message ||
//                 "Failed to remove item"
//             );
//         }
//     }
// );

// // ======================================================
// // CLEAR CART
// // ======================================================

// export const clearCart = createAsyncThunk(
//     "cart/clearCart",

//     async (_, { rejectWithValue }) => {

//         try {

//             const response =
//                 await clearCartApi();

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "CLEAR CART ERROR:",
//                 error.response?.data ||
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to clear cart"
//             );
//         }
//     }
// );

// // ======================================================
// // MERGE GUEST CART
// // ======================================================

// export const mergeGuestCart = createAsyncThunk(
//     "cart/mergeGuestCart",

//     async (_, { rejectWithValue }) => {

//         try {

//             const response =
//                 await mergeGuestCartApi();

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "MERGE CART ERROR:",
//                 error.response?.data ||
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to merge guest cart"
//             );
//         }
//     }
// );
//----------------------------------------------------------

// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//     getCartApi,
//     addToCartApi,
//     updateCartApi,
//     removeCartItemApi,
//     clearCartApi,
//     mergeGuestCartApi,
// } from "./CartApi";

// // ======================================================
// // GET CART
// // ======================================================

// export const getCart = createAsyncThunk(
//     "cart/getCart",

//     async (_, { rejectWithValue }) => {

//         try {

//             const response =
//                 await getCartApi();

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "GET CART ERROR:",
//                 error.response?.data ||
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to get cart"
//             );
//         }
//     }
// );

// // ======================================================
// // ADD TO CART
// // ======================================================

// export const addToCart = createAsyncThunk(
//     "cart/addToCart",

//     async (data, { rejectWithValue }) => {

//         try {

//             console.log(
//                 "CART THUNK DATA:",
//                 data
//             );

//             const response =
//                 await addToCartApi(data);

//             console.log(
//                 "CART RESPONSE:",
//                 response.data
//             );

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "ADD CART ERROR:",
//                 error.response?.data ||
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to add item"
//             );
//         }
//     }
// );

// // ======================================================
// // UPDATE CART ITEM
// // ======================================================
// // IMPORTANT:
// // This uses CART ITEM ID, NOT PRODUCT ID.
// //
// // item._id = cart item's _id
// // ======================================================

// export const updateCart = createAsyncThunk(
//     "cart/updateCart",

//     async (
//         { itemId, quantity },
//         { rejectWithValue }
//     ) => {

//         try {

//             if (!itemId) {

//                 throw new Error(
//                     "Cart item ID is required"
//                 );
//             }

//             const response =
//                 await updateCartApi(
//                     itemId,
//                     quantity
//                 );

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "UPDATE CART ERROR:",
//                 error.response?.data ||
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 error.message ||
//                 "Failed to update cart"
//             );
//         }
//     }
// );

// // ======================================================
// // REMOVE CART ITEM
// // ======================================================
// // IMPORTANT:
// // This also uses CART ITEM ID.
// // ======================================================

// export const removeCartItem =
//     createAsyncThunk(
//         "cart/removeCartItem",

//         async (
//             itemId,
//             { rejectWithValue }
//         ) => {

//             try {

//                 if (!itemId) {

//                     throw new Error(
//                         "Cart item ID is required"
//                     );
//                 }

//                 const response =
//                     await removeCartItemApi(
//                         itemId
//                     );

//                 return response.data.cart;

//             } catch (error) {

//                 console.error(
//                     "REMOVE CART ERROR:",
//                     error.response?.data ||
//                     error.message
//                 );

//                 return rejectWithValue(
//                     error.response?.data?.message ||
//                     error.message ||
//                     "Failed to remove item"
//                 );
//             }
//         }
//     );

// // ======================================================
// // CLEAR CART
// // ======================================================

// export const clearCart = createAsyncThunk(
//     "cart/clearCart",

//     async (_, { rejectWithValue }) => {

//         try {

//             const response =
//                 await clearCartApi();

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "CLEAR CART ERROR:",
//                 error.response?.data ||
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to clear cart"
//             );
//         }
//     }
// );

// // ======================================================
// // MERGE GUEST CART
// // ======================================================

// export const mergeGuestCart = createAsyncThunk(
//     "cart/mergeGuestCart",

//     async (_, { rejectWithValue }) => {

//         try {

//             const response =
//                 await mergeGuestCartApi();

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "MERGE CART ERROR:",
//                 error.response?.data ||
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to merge guest cart"
//             );
//         }
//     }
// );

//---------------------------------------------
// export const addToCart = createAsyncThunk(
//     "cart/addToCart",

//     async (data, { rejectWithValue }) => {

//         try {

//             console.log(
//                 "========== ADD TO CART THUNK =========="
//             );

//             console.log(
//                 "CART THUNK DATA:",
//                 JSON.stringify(data, null, 2)
//             );

//             const response = await addToCartApi(data);

//             console.log(
//                 "CART STATUS:",
//                 response.status
//             );

//             console.log(
//                 "CART HEADERS:",
//                 response.headers
//             );

//             console.log(
//                 "CART DATA:",
//                 response.data
//             );

//             console.log(
//                 "CART DATA JSON:",
//                 JSON.stringify(
//                     response.data,
//                     null,
//                     2
//                 )
//             );

//             console.log(
//                 "CART FROM RESPONSE:",
//                 JSON.stringify(
//                     response.data?.cart,
//                     null,
//                     2
//                 )
//             );

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "========== ADD CART ERROR =========="
//             );

//             console.error(
//                 "STATUS:",
//                 error.response?.status
//             );

//             console.error(
//                 "ERROR DATA:",
//                 error.response?.data
//             );

//             console.error(
//                 "ERROR MESSAGE:",
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to add item"
//             );
//         }
//     }
// );
//---------------------------------------------------------
// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//     getCartApi,
//     addToCartApi,
//     updateCartApi,
//     removeCartItemApi,
//     clearCartApi,
//     mergeGuestCartApi,
// } from "./CartApi";

// // ======================================================
// // GET CART
// // ======================================================

// export const getCart = createAsyncThunk(
//     "cart/getCart",

//     async (_, { rejectWithValue }) => {

//         try {

//             console.log(
//                 "========== GET CART =========="
//             );

//             const response =
//                 await getCartApi();

//             console.log(
//                 "GET CART STATUS:",
//                 response.status
//             );

//             console.log(
//                 "GET CART DATA:",
//                 response.data
//             );

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "GET CART ERROR:",
//                 error.response?.data ||
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to get cart"
//             );
//         }
//     }
// );

// // ======================================================
// // ADD TO CART
// // ======================================================

// export const addToCart = createAsyncThunk(
//     "cart/addToCart",

//     async (
//         data,
//         { rejectWithValue }
//     ) => {

//         try {

//             console.log(
//                 "========== ADD TO CART =========="
//             );

//             console.log(
//                 "CART THUNK DATA:",
//                 data
//             );

//             const response =
//                 await addToCartApi(data);

//             console.log(
//                 "CART STATUS:",
//                 response.status
//             );

//             console.log(
//                 "CART DATA:",
//                 response.data
//             );

//             console.log(
//                 "CART DATA JSON:",
//                 JSON.stringify(
//                     response.data,
//                     null,
//                     2
//                 )
//             );

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "========== ADD CART ERROR =========="
//             );

//             console.error(
//                 "STATUS:",
//                 error.response?.status
//             );

//             console.error(
//                 "ERROR DATA:",
//                 error.response?.data
//             );

//             console.error(
//                 "ERROR MESSAGE:",
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to add item"
//             );
//         }
//     }
// );

// // ======================================================
// // UPDATE CART
// // ======================================================

// export const updateCart = createAsyncThunk(
//     "cart/updateCart",

//     async (
//         { itemId, quantity },
//         { rejectWithValue }
//     ) => {

//         try {

//             if (!itemId) {
//                 throw new Error(
//                     "Cart item ID is required"
//                 );
//             }

//             const response =
//                 await updateCartApi(
//                     itemId,
//                     quantity
//                 );

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "UPDATE CART ERROR:",
//                 error.response?.data ||
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 error.message ||
//                 "Failed to update cart"
//             );
//         }
//     }
// );

// // ======================================================
// // REMOVE CART ITEM
// // ======================================================

// export const removeCartItem =
//     createAsyncThunk(
//         "cart/removeCartItem",

//         async (
//             itemId,
//             { rejectWithValue }
//         ) => {

//             try {

//                 if (!itemId) {
//                     throw new Error(
//                         "Cart item ID is required"
//                     );
//                 }

//                 const response =
//                     await removeCartItemApi(
//                         itemId
//                     );

//                 return response.data.cart;

//             } catch (error) {

//                 console.error(
//                     "REMOVE CART ERROR:",
//                     error.response?.data ||
//                     error.message
//                 );

//                 return rejectWithValue(
//                     error.response?.data?.message ||
//                     error.message ||
//                     "Failed to remove item"
//                 );
//             }
//         }
//     );

// // ======================================================
// // CLEAR CART
// // ======================================================

// export const clearCart = createAsyncThunk(
//     "cart/clearCart",

//     async (
//         _,
//         { rejectWithValue }
//     ) => {

//         try {

//             const response =
//                 await clearCartApi();

//             return response.data.cart;

//         } catch (error) {

//             console.error(
//                 "CLEAR CART ERROR:",
//                 error.response?.data ||
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to clear cart"
//             );
//         }
//     }
// );

// // ======================================================
// // MERGE GUEST CART
// // ======================================================

// export const mergeGuestCart =
//     createAsyncThunk(
//         "cart/mergeGuestCart",

//         async (
//             _,
//             { rejectWithValue }
//         ) => {

//             try {

//                 const response =
//                     await mergeGuestCartApi();

//                 return response.data.cart;

//             } catch (error) {

//                 console.error(
//                     "MERGE CART ERROR:",
//                     error.response?.data ||
//                     error.message
//                 );

//                 return rejectWithValue(
//                     error.response?.data?.message ||
//                     "Failed to merge guest cart"
//                 );
//             }
//         }
//     );
//-----------------------------------------------
//     import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//     getCartApi,
//     addToCartApi,
//     updateCartApi,
//     removeCartItemApi,
//     clearCartApi,
//     mergeGuestCartApi,
// } from "./CartApi";

// // ======================================================
// // GET CART
// // ======================================================

// export const getCart = createAsyncThunk(
//     "cart/getCart",
//     async (_, { rejectWithValue }) => {
//         try {
//             const response = await getCartApi();

//             console.log("========== GET CART ==========");
//             console.log("GET CART STATUS:", response.status);
//             console.log("GET CART DATA:", response.data);

//             return response.data.cart;
//         } catch (error) {
//             console.error(
//                 "GET CART ERROR:",
//                 error.response?.data || error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to get cart"
//             );
//         }
//     }
// );

// // ======================================================
// // ADD TO CART
// // ======================================================

// export const addToCart = createAsyncThunk(
//     "cart/addToCart",
//     async (data, { rejectWithValue }) => {
//         try {
//             console.log("========== ADD TO CART ==========");
//             console.log("CART THUNK DATA:", data);

//             const response = await addToCartApi(data);

//             console.log("CART STATUS:", response.status);
//             console.log("CART DATA:", response.data);

//             return response.data.cart;
//         } catch (error) {
//             console.error(
//                 "========== ADD CART ERROR =========="
//             );

//             console.error(
//                 "STATUS:",
//                 error.response?.status
//             );

//             console.error(
//                 "ERROR DATA:",
//                 error.response?.data
//             );

//             console.error(
//                 "ERROR MESSAGE:",
//                 error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to add item"
//             );
//         }
//     }
// );

// // ======================================================
// // UPDATE CART
// // ======================================================

// export const updateCart = createAsyncThunk(
//     "cart/updateCart",
//     async (
//         { itemId, quantity },
//         { rejectWithValue }
//     ) => {
//         try {
//             if (!itemId) {
//                 throw new Error(
//                     "Cart item ID is required"
//                 );
//             }

//             const response = await updateCartApi(
//                 itemId,
//                 quantity
//             );

//             return response.data.cart;
//         } catch (error) {
//             console.error(
//                 "UPDATE CART ERROR:",
//                 error.response?.data || error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 error.message ||
//                 "Failed to update cart"
//             );
//         }
//     }
// );

// // ======================================================
// // REMOVE CART ITEM
// // ======================================================

// export const removeCartItem = createAsyncThunk(
//     "cart/removeCartItem",
//     async (
//         itemId,
//         { rejectWithValue }
//     ) => {
//         try {
//             if (!itemId) {
//                 throw new Error(
//                     "Cart item ID is required"
//                 );
//             }

//             const response =
//                 await removeCartItemApi(itemId);

//             return response.data.cart;
//         } catch (error) {
//             console.error(
//                 "REMOVE CART ERROR:",
//                 error.response?.data || error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 error.message ||
//                 "Failed to remove item"
//             );
//         }
//     }
// );

// // ======================================================
// // CLEAR CART
// // ======================================================

// export const clearCart = createAsyncThunk(
//     "cart/clearCart",
//     async (_, { rejectWithValue }) => {
//         try {
//             const response =
//                 await clearCartApi();

//             return response.data.cart;
//         } catch (error) {
//             console.error(
//                 "CLEAR CART ERROR:",
//                 error.response?.data || error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to clear cart"
//             );
//         }
//     }
// );

// // ======================================================
// // MERGE GUEST CART
// // ======================================================

// export const mergeGuestCart = createAsyncThunk(
//     "cart/mergeGuestCart",
//     async (_, { rejectWithValue }) => {
//         try {
//             const response =
//                 await mergeGuestCartApi();

//             return response.data.cart;
//         } catch (error) {
//             console.error(
//                 "MERGE CART ERROR:",
//                 error.response?.data || error.message
//             );

//             return rejectWithValue(
//                 error.response?.data?.message ||
//                 "Failed to merge guest cart"
//             );
//         }
//     }
// );
//-------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getCartApi,
  addToCartApi,
  updateCartApi,
  removeCartItemApi,
  clearCartApi,
  mergeGuestCartApi,
} from "./CartApi";

// ======================================================
// GET CART
// ======================================================

// export const getCart = createAsyncThunk(
//   "cart/getCart",

//   async (_, { rejectWithValue }) => {
//     try {
//       console.log("========== GET CART ==========");

//       const response = await getCartApi();

//       console.log("GET CART STATUS:", response.status);
//       console.log("GET CART DATA:", response.data);
//       console.log("GET CART ITEMS:", response.data?.cart?.items);

//       return response.data?.cart || { items: [] };
//     } catch (error) {
//       console.error("GET CART ERROR:", error.response?.data || error.message);

//       return rejectWithValue(
//         error.response?.data?.message || error.message || "Failed to get cart",
//       );
//     }
//   },
// );

export const getCart = createAsyncThunk(
    "cart/getCart",

    async (_, { rejectWithValue }) => {

        try {

            console.log("========== GET CART ==========");

            const response = await getCartApi();

            console.log("GET CART STATUS:", response.status);
            console.log("GET CART RESPONSE:", response.data);

            return response.data;

        } catch (error) {

            console.error("GET CART ERROR:", error);
            console.error(
                "GET CART STATUS:",
                error.response?.status
            );
            console.error(
                "GET CART DATA:",
                error.response?.data
            );

            return rejectWithValue(
                error.response?.data || error.message
            );
        }
    }
);
// ======================================================
// ADD TO CART
// ======================================================

// export const addToCart = createAsyncThunk(
//   "cart/addToCart",

//   async (data, { rejectWithValue }) => {
//     try {
//       console.log("========== ADD TO CART ==========");
//       console.log("ADD TO CART DATA:", data);

//       const response = await addToCartApi(data);

//       console.log("ADD TO CART RESPONSE:", response.data);

//       return response.data?.cart || { items: [] };
//     } catch (error) {
//       console.error(
//         "ADD TO CART ERROR:",
//         error.response?.data || error.message,
//       );

//       return rejectWithValue(
//         error.response?.data?.message || error.message || "Failed to add item",
//       );
//     }
//   },
// );

export const addToCart = createAsyncThunk(
    "cart/addToCart",

    async (data, { rejectWithValue }) => {

        try {

            console.log("========== ADD TO CART ==========");
            console.log("DATA:", data);

            const response = await addToCartApi(data);

            console.log("STATUS:", response.status);
            console.log("RESPONSE DATA:", response.data);

            return response.data;

        } catch (error) {

            console.error("ADD TO CART ERROR:", error);
            console.error(
                "ERROR STATUS:",
                error.response?.status
            );
            console.error(
                "ERROR DATA:",
                error.response?.data
            );

            return rejectWithValue(
                error.response?.data || error.message
            );
        }
    }
);

// ======================================================
// UPDATE CART ITEM
// IMPORTANT: itemId = cart item's _id
// ======================================================

export const updateCart = createAsyncThunk(
  "cart/updateCart",

  async ({ itemId, quantity }, { rejectWithValue }) => {
    try {
      if (!itemId) {
        throw new Error("Cart item ID is required");
      }

      const response = await updateCartApi(itemId, quantity);

      return (
        response.data?.cart || {
          items: [],
        }
      );
    } catch (error) {
      console.error(
        "UPDATE CART ERROR:",
        error.response?.data || error.message,
      );

      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to update cart",
      );
    }
  },
);

// ======================================================
// REMOVE CART ITEM
// IMPORTANT: itemId = cart item's _id
// ======================================================

export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",

  async (itemId, { rejectWithValue }) => {
    try {
      if (!itemId) {
        throw new Error("Cart item ID is required");
      }

      const response = await removeCartItemApi(itemId);

      return (
        response.data?.cart || {
          items: [],
        }
      );
    } catch (error) {
      console.error(
        "REMOVE CART ERROR:",
        error.response?.data || error.message,
      );

      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to remove cart item",
      );
    }
  },
);

// ======================================================
// CLEAR CART
// ======================================================

export const clearCart = createAsyncThunk(
  "cart/clearCart",

  async (_, { rejectWithValue }) => {
    try {
      const response = await clearCartApi();

      return (
        response.data?.cart || {
          items: [],
        }
      );
    } catch (error) {
      console.error("CLEAR CART ERROR:", error.response?.data || error.message);

      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to clear cart",
      );
    }
  },
);

// ======================================================
// MERGE GUEST CART
// ======================================================

export const mergeGuestCart = createAsyncThunk(
  "cart/mergeGuestCart",

  async (_, { rejectWithValue }) => {
    try {
      console.log("========== MERGE GUEST CART ==========");

      const response = await mergeGuestCartApi();

      console.log("MERGE CART RESPONSE:", response.data);

      return (
        response.data?.cart || {
          items: [],
        }
      );
    } catch (error) {
      console.error("MERGE CART ERROR:", error.response?.data || error.message);

      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to merge guest cart",
      );
    }
  },
);
