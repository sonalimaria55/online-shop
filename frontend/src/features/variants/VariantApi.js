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


//-------------------------------------------------

// import axiosInstance from "../../api/axiosInstance";

// // Get All Variants
// export const getVariantsApi = () => {
//     return axiosInstance.get("/variants");
// };

// // Create Variant
// export const createVariantApi = (data) => {
//     return axiosInstance.post("/variants", data);
// };

// // Update Variant
// export const updateVariantApi = (id, data) => {
//     return axiosInstance.put(`/variants/${id}`, data);
// };

// // Delete Variant
// export const deleteVariantApi = (id) => {
//     return axiosInstance.delete(`/variants/${id}`);
// };



import axiosInstance from "../../api/axiosInstance";


// GET ALL VARIANTS
export const getVariantsApi = async()=>{

    const response =
        await axiosInstance.get(
            "/variants"
        );

    return response.data;

};


// CREATE VARIANT
export const createVariantApi = async(data)=>{

    const response =
        await axiosInstance.post(
            "/variants",
            data
        );

    return response.data;

};


// GET SINGLE VARIANT
export const getVariantByIdApi = async(id)=>{

    const response =
        await axiosInstance.get(
            `/variants/${id}`
        );

    return response.data;

};


// UPDATE VARIANT
export const updateVariantApi = async(id,data)=>{

    const response =
        await axiosInstance.put(
            `/variants/${id}`,
            data
        );

    return response.data;

};


// DELETE VARIANT
export const deleteVariantApi = async(id)=>{

    const response =
        await axiosInstance.delete(
            `/variants/${id}`
        );

    return response.data;

};