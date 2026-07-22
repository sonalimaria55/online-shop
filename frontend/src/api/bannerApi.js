import axiosInstance from "./axiosInstance";

// Admin
export const getAllBanners = () =>
  axiosInstance.get("/banners");

export const getBannerById = (id) =>
  axiosInstance.get(`/banners/${id}`);

export const createBanner = (formData) =>
  axiosInstance.post("/banners", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const updateBanner = (id, formData) =>
  axiosInstance.put(`/banners/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteBanner = (id) =>
  axiosInstance.delete(`/banners/${id}`);

export const updateVisibility = (id, visibility) =>
  axiosInstance.patch(`/banners/${id}/visibility`, {
    visibility,
  });

// Customer
export const getHomeBanners = () =>
  axiosInstance.get("/banners/home");

export const getCustomerBanners = () =>
  axiosInstance.get("/banners/customer");