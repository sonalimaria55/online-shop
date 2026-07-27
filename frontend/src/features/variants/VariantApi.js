// import axiosInstance from "../../api/axiosInstance";

// // GET ALL VARIANTS
// export const getVariantsApi = () => {
//     return axiosInstance.get("/variants");
// };

// // GET SINGLE VARIANT
// export const getVariantByIdApi = (id) => {
//     return axiosInstance.get(`/variants/${id}`);
// };

// // CREATE VARIANT
// export const createVariantApi = (data) => {
//     return axiosInstance.post("/variants", data);
// };

// // UPDATE VARIANT
// export const updateVariantApi = (id, data) => {
//     return axiosInstance.put(`/variants/${id}`, data);
// };

// // DELETE VARIANT
// export const deleteVariantApi = (id) => {
//     return axiosInstance.delete(`/variants/${id}`);
// };




import axiosInstance from "../../api/axiosInstance";

// Get All Variants
export const getVariantsApi = () => {
    return axiosInstance.get("/variants");
};

// Create Variant
export const createVariantApi = (data) => {
    return axiosInstance.post("/variants", data);
};

// Update Variant
export const updateVariantApi = (id, data) => {
    return axiosInstance.put(`/variants/${id}`, data);
};

// Delete Variant
export const deleteVariantApi = (id) => {
    return axiosInstance.delete(`/variants/${id}`);
};