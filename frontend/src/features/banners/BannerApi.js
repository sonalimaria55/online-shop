import axiosInstance from "../../api/axiosInstance";

export const getBannersApi = async () => {
  const response = await axiosInstance.get("/banners");
  return response.data;
};

export const createBannerApi = async (formData) => {
  const response = await axiosInstance.post("/banners", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getHomeBannersApi = async () => {

  const response = await axiosInstance.get(
    "/banners/home"
  );

  return response.data;

};