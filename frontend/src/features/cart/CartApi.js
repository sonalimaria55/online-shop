// import axiosInstance from "../../api/axiosInstance";

// // Get Cart
// export const getCartApi = () => {
//   return axiosInstance.get("/cart");
// };

// // Add To Cart
// export const addToCartApi = (data) => {
//   return axiosInstance.post("/cart", data);
// };

// // Update Quantity
// export const updateCartApi = (productId, quantity) => {
//   return axiosInstance.put(`/cart/${productId}`, {
//     quantity,
//   });
// };

// // Remove Item
// export const removeCartItemApi = (productId) => {
//   return axiosInstance.delete(`/cart/${productId}`);
// };

// // Clear Cart
// export const clearCartApi = () => {
//   return axiosInstance.delete("/cart");
// };
//------------------------------------------------------------------

// import axiosInstance from "../../api/axiosInstance";


// // Get Cart
// export const getCartApi = () => {
//   return axiosInstance.get("/cart");
// };


// // Add Item
// export const addToCartApi = (data) => {
//   return axiosInstance.post("/cart/add", data);
// };


// // Update Quantity
// export const updateCartApi = (productId, quantity) => {
//   return axiosInstance.put(`/cart/${productId}`, {
//     quantity,
//   });
// };


// // Remove Item
// export const removeCartItemApi = (productId) => {
//   return axiosInstance.delete(`/cart/${productId}`);
// };


// // Clear Cart
// export const clearCartApi = () => {
//   return axiosInstance.delete("/cart");
// };
// export const mergeGuestCartApi = () => {

//   return axiosInstance.post("/cart/merge");

// };
//----------------------------------------------
// import axiosInstance from "../../api/axiosInstance";

// // ======================================================
// // GET CART
// // ======================================================

// export const getCartApi = () => {
//     return axiosInstance.get("/cart");
// };


// // ======================================================
// // ADD TO CART
// // ======================================================

// export const addToCartApi = (data) => {
//     return axiosInstance.post("/cart/add", data);
// };


// // ======================================================
// // UPDATE CART ITEM QUANTITY
// // ======================================================

// export const updateCartApi = (
//     itemId,
//     quantity
// ) => {
//     return axiosInstance.put(
//         `/cart/item/${itemId}`,
//         {
//             quantity,
//         }
//     );
// };


// // ======================================================
// // REMOVE CART ITEM
// // ======================================================

// export const removeCartItemApi = (
//     itemId
// ) => {
//     return axiosInstance.delete(
//         `/cart/item/${itemId}`
//     );
// };


// // ======================================================
// // CLEAR CART
// // ======================================================

// export const clearCartApi = () => {
//     return axiosInstance.delete(
//         "/cart/clear"
//     );
// };


// // ======================================================
// // MERGE GUEST CART
// // ======================================================

// export const mergeGuestCartApi = () => {
//     return axiosInstance.post(
//         "/cart/merge"
//     );
// };
//---------------------------------------------------------
import axiosInstance from "../../api/axiosInstance";

// ===============================
// GET CART
// ===============================
export const getCartApi = () => {
    return axiosInstance.get("/cart");
};


// ===============================
// ADD TO CART
// ===============================
export const addToCartApi = (data) => {
    return axiosInstance.post("/cart/add", data);
};


// ===============================
// UPDATE CART ITEM
// ===============================
// Backend:
// PUT /api/cart/item/:itemId

export const updateCartApi = (itemId, quantity) => {
    return axiosInstance.put(
        `/cart/item/${itemId}`,
        {
            quantity,
        }
    );
};


// ===============================
// REMOVE CART ITEM
// ===============================
// Backend:
// DELETE /api/cart/item/:itemId

export const removeCartItemApi = (itemId) => {
    return axiosInstance.delete(
        `/cart/item/${itemId}`
    );
};


// ===============================
// CLEAR CART
// ===============================
// Backend:
// DELETE /api/cart/clear

export const clearCartApi = () => {
    return axiosInstance.delete(
        "/cart/clear"
    );
};


// ===============================
// MERGE GUEST CART
// ===============================

export const mergeGuestCartApi = () => {
    return axiosInstance.post(
        "/cart/merge"
    );
};