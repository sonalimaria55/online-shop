// import axiosInstance from "../../api/axiosInstance";

// // ======================================================
// // CREATE ORDER
// // ======================================================

// export const createOrderApi = (shippingAddress) => {

//     return axiosInstance.post(
//         "/orders/create",
//         {
//             shippingAddress,
//         }
//     );
// };


// // ======================================================
// // GET MY ORDERS
// // ======================================================

// export const getMyOrdersApi = () => {

//     return axiosInstance.get(
//         "/orders/my-orders"
//     );
// };
//--------------------
import axiosInstance from "../../api/axiosInstance";

// ======================================================
// CREATE ORDER
// ======================================================

export const createOrderApi = (shippingAddress) => {

    return axiosInstance.post(
        "/orders",
        {
            shippingAddress,
        }
    );
};


// ======================================================
// GET MY ORDERS
// ======================================================

export const getMyOrdersApi = () => {

    return axiosInstance.get(
        "/orders/my-orders"
    );
};


// ======================================================
// GET ONE ORDER
// ======================================================

export const getOrderByIdApi = (orderId) => {

    return axiosInstance.get(
        `/orders/${orderId}`
    );
};