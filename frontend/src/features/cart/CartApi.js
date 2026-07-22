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

import axiosInstance from "../../api/axiosInstance";


// Get Cart
export const getCartApi = () => {
  return axiosInstance.get("/cart");
};


// Add Item
export const addToCartApi = (data) => {
  return axiosInstance.post("/cart/add", data);
};


// Update Quantity
export const updateCartApi = (productId, quantity) => {
  return axiosInstance.put(`/cart/${productId}`, {
    quantity,
  });
};


// Remove Item
export const removeCartItemApi = (productId) => {
  return axiosInstance.delete(`/cart/${productId}`);
};


// Clear Cart
export const clearCartApi = () => {
  return axiosInstance.delete("/cart");
};
export const mergeGuestCartApi = () => {

  return axiosInstance.post("/cart/merge");

};