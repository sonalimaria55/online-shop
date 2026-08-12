import axiosInstance from "../../api/axiosInstance";

// ==================================================
// CREATE PAYMENT ORDER
// ==================================================

export const createPaymentOrderApi = (
    orderId
) => {

    return axiosInstance.post(
        "/payment/create",
        {
            orderId,
        }
    );
};

// ==================================================
// VERIFY PAYMENT
// ==================================================

export const verifyPaymentApi = (
    paymentData
) => {

    return axiosInstance.post(
        "/payment/verify",
        paymentData
    );
};