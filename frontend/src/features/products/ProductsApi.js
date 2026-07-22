

import axiosInstance from "../../api/axiosInstance";


// ==========================
// GET ALL PRODUCTS (Admin)
// ==========================
export const getProductsApi = () => {

  return axiosInstance.get(
    "/products"
  );

};



// ==========================
// GET FEATURED PRODUCTS (Home Page)
// ==========================
export const getFeaturedProductsApi = () => {

  return axiosInstance.get(
    "/products/featured-products"
  );

};



// ==========================
// GET HOME COLLECTIONS (Optional)
// ==========================
export const getHomeCollectionsApi = () => {

  return axiosInstance.get(
    "/products/home-collections"
  );

};



// ==========================
// CREATE PRODUCT
// ==========================
export const createProductApi = (data) => {

  return axiosInstance.post(
    "/products",
    data,
    {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }
  );

};



// ==========================
// UPDATE PRODUCT
// ==========================
export const updateProductApi = (id, data) => {

  return axiosInstance.put(
    `/products/${id}`,
    data,
    {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }
  );

};



// ==========================
// DELETE PRODUCT
// ==========================
export const deleteProductApi = (id) => {

  return axiosInstance.delete(
    `/products/${id}`
  );

};

// ==========================
// GET PRODUCT BY ID
// ==========================
export const getProductByIdApi = (id) => {

  return axiosInstance.get(
    `/products/${id}`
  );

};