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

export const getCart = createAsyncThunk(
    "cart/getCart",

    async (_, { rejectWithValue }) => {

        try {

            const response =
                await getCartApi();

            return response.data.cart;

        } catch (error) {

            console.error(
                "GET CART ERROR:",
                error.response?.data ||
                error.message
            );

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to get cart"
            );
        }
    }
);


// ======================================================
// ADD TO CART
// ======================================================

export const addToCart = createAsyncThunk(
    "cart/addToCart",

    async (data, { rejectWithValue }) => {

        try {

            console.log(
                "CART THUNK DATA:",
                data
            );

            const response =
                await addToCartApi(data);

            console.log(
                "CART RESPONSE:",
                response.data
            );

            return response.data.cart;

        } catch (error) {

            console.error(
                "ADD CART ERROR:",
                error.response?.data ||
                error.message
            );

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to add item"
            );
        }
    }
);


// ======================================================
// UPDATE CART ITEM
// ======================================================
// IMPORTANT:
// This uses CART ITEM ID, NOT PRODUCT ID.
//
// item._id = cart item's _id
// ======================================================

export const updateCart = createAsyncThunk(
    "cart/updateCart",

    async (
        { itemId, quantity },
        { rejectWithValue }
    ) => {

        try {

            if (!itemId) {

                throw new Error(
                    "Cart item ID is required"
                );
            }

            const response =
                await updateCartApi(
                    itemId,
                    quantity
                );

            return response.data.cart;

        } catch (error) {

            console.error(
                "UPDATE CART ERROR:",
                error.response?.data ||
                error.message
            );

            return rejectWithValue(
                error.response?.data?.message ||
                error.message ||
                "Failed to update cart"
            );
        }
    }
);


// ======================================================
// REMOVE CART ITEM
// ======================================================
// IMPORTANT:
// This also uses CART ITEM ID.
// ======================================================

export const removeCartItem =
    createAsyncThunk(
        "cart/removeCartItem",

        async (
            itemId,
            { rejectWithValue }
        ) => {

            try {

                if (!itemId) {

                    throw new Error(
                        "Cart item ID is required"
                    );
                }

                const response =
                    await removeCartItemApi(
                        itemId
                    );

                return response.data.cart;

            } catch (error) {

                console.error(
                    "REMOVE CART ERROR:",
                    error.response?.data ||
                    error.message
                );

                return rejectWithValue(
                    error.response?.data?.message ||
                    error.message ||
                    "Failed to remove item"
                );
            }
        }
    );


// ======================================================
// CLEAR CART
// ======================================================

export const clearCart = createAsyncThunk(
    "cart/clearCart",

    async (_, { rejectWithValue }) => {

        try {

            const response =
                await clearCartApi();

            return response.data.cart;

        } catch (error) {

            console.error(
                "CLEAR CART ERROR:",
                error.response?.data ||
                error.message
            );

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to clear cart"
            );
        }
    }
);


// ======================================================
// MERGE GUEST CART
// ======================================================

export const mergeGuestCart = createAsyncThunk(
    "cart/mergeGuestCart",

    async (_, { rejectWithValue }) => {

        try {

            const response =
                await mergeGuestCartApi();

            return response.data.cart;

        } catch (error) {

            console.error(
                "MERGE CART ERROR:",
                error.response?.data ||
                error.message
            );

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to merge guest cart"
            );
        }
    }
);