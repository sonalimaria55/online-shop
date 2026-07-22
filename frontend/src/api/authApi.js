// // import axiosInstance from "./axiosInstance";
// // // Register
// // export const registerUser = (data) => {
// //     return axiosInstance.post("/auth/register", data);
// // };
// // // Verify OTP
// // export const verifyOTP = (data) => {
// //     return axiosInstance.post("/auth/verify-otp", data);
// // };
// // // Resend OTP
// // export const resendOTP = (data) => {
// //     return axiosInstance.post("/auth/resend-otp", data);
// // };
// // // Login
// // export const loginUser = (data) => {
// //     return axiosInstance.post("/auth/login", data);
// // };


// import axiosInstance from "./axiosInstance";


// // Register
// export const registerUser = (data) => {
//     return axiosInstance.post(
//         "/auth/register",
//         data
//     );
// };


// // Verify OTP
// export const verifyOTP = (data) => {
//     return axiosInstance.post(
//         "/auth/verify-otp",
//         data
//     );
// };


// // Resend OTP
// export const resendOTP = (data) => {
//     return axiosInstance.post(
//         "/auth/resend-otp",
//         data
//     );
// };


// // Login
// export const loginUser = (data) => {
//     return axiosInstance.post(
//         "/auth/login",
//         data
//     );
// };


import axiosInstance from "./axiosInstance";


export const registerUser = (data) => {
    return axiosInstance.post(
        "/auth/register",
        data
    );
};


export const verifyOTP = (data) => {
    return axiosInstance.post(
        "/auth/verify-otp",
        data
    );
};


export const resendOTP = (data) => {
    return axiosInstance.post(
        "/auth/resend-otp",
        data
    );
};


export const loginUser = (data) => {
    return axiosInstance.post(
        "/auth/login",
        data
    );
};