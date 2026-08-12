import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    createOrderApi,
    getMyOrdersApi,
} from "./OrderApi";

// ======================================================
// CREATE ORDER
// ======================================================

export const createOrder = createAsyncThunk(
    "orders/createOrder",

    async (
        shippingAddress,
        { rejectWithValue }
    ) => {

        try {

            const response =
                await createOrderApi(
                    shippingAddress
                );

            return response.data.order;

        } catch (error) {

            console.error(
                "CREATE ORDER ERROR:",
                error.response?.data || error
            );

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to create order"
            );
        }
    }
);


// ======================================================
// GET MY ORDERS
// ======================================================

export const getMyOrders = createAsyncThunk(
    "orders/getMyOrders",

    async (
        _,
        { rejectWithValue }
    ) => {

        try {

            const response =
                await getMyOrdersApi();

            return response.data.orders;

        } catch (error) {

            console.error(
                "GET ORDERS ERROR:",
                error.response?.data || error
            );

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to get orders"
            );
        }
    }
);