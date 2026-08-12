import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    createPaymentOrderApi,
    verifyPaymentApi,
} from "./PaymentApi";

// ==================================================
// CREATE RAZORPAY ORDER
// ==================================================

export const createPaymentOrder =
    createAsyncThunk(
        "payment/createPaymentOrder",

        async (
            orderId,
            { rejectWithValue }
        ) => {

            try {

                const response =
                    await createPaymentOrderApi(
                        orderId
                    );

                console.log(
                    "PAYMENT THUNK RESPONSE:",
                    response.data
                );

                return response.data;

            } catch (error) {

                return rejectWithValue(
                    error.response?.data?.message ||
                    error.message ||
                    "Failed to create payment order"
                );
            }
        }
    );

// ==================================================
// VERIFY PAYMENT
// ==================================================

export const verifyPayment =
    createAsyncThunk(
        "payment/verifyPayment",

        async (
            paymentData,
            { rejectWithValue }
        ) => {

            try {

                const response =
                    await verifyPaymentApi(
                        paymentData
                    );

                return response.data.order;

            } catch (error) {

                return rejectWithValue(
                    error.response?.data?.message ||
                    error.message ||
                    "Payment verification failed"
                );
            }
        }
    );