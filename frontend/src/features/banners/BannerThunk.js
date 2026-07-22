import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// ======================
// Create Banner
// ======================
export const createBanner = createAsyncThunk(
  "banner/create",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/banners",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Banner creation failed"
      );
    }
  }
);

// ======================
// Get All Banners
// ======================
export const getBanners = createAsyncThunk(
  "banner/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/banners");

      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch banners"
      );
    }
  }
);

// ======================
// Update Banner
// ======================
export const updateBanner = createAsyncThunk(
  "banner/update",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/banners/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Banner update failed"
      );
    }
  }
);

// ======================
// Delete Banner
// ======================
export const deleteBanner = createAsyncThunk(
  "banner/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/banners/${id}`);

      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Banner delete failed"
      );
    }
  }
);


// ======================
// Change Banner Visibility
// ======================
export const changeBannerVisibility = createAsyncThunk(
  "banner/changeVisibility",
  async ({ id, visibility }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(
        `/banners/${id}/visibility`,
        {
          visibility,
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Failed to update visibility"
      );
    }
  }
);

export const getHomeBanners = createAsyncThunk(

"banner/home",

async(_, {rejectWithValue})=>{


try{


const response =
await axiosInstance.get(
"/banners/home"
);


return response.data.data;


}
catch(error){


return rejectWithValue(

error.response?.data?.message ||
"Failed to load banners"

);


}


}

);

// ======================
// Get Customer Banners
// ======================
export const getCustomerBanners = createAsyncThunk(
  "banner/customer",

  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/banners/customer");

      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Failed to load customer banners"
      );
    }
  }
);