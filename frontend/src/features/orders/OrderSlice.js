import {
    createSlice,
} from "@reduxjs/toolkit";

import {
    createOrder,
    getMyOrders,
} from "./OrderThunk";


const initialState = {

    orders: [],

    selectedOrder: null,

    loading: false,

    error: null,

};


const orderSlice = createSlice({

    name: "orders",

    initialState,

    reducers: {

        clearOrderError: (state) => {

            state.error = null;

        },

        clearSelectedOrder: (state) => {

            state.selectedOrder = null;

        },

    },


    extraReducers: (builder) => {

        // ==================================================
        // CREATE ORDER
        // ==================================================

        builder

            .addCase(
                createOrder.pending,
                (state) => {

                    state.loading = true;
                    state.error = null;

                }
            )

            .addCase(
                createOrder.fulfilled,
                (state, action) => {

                    state.loading = false;

                    state.selectedOrder =
                        action.payload;

                    state.orders.unshift(
                        action.payload
                    );

                }
            )

            .addCase(
                createOrder.rejected,
                (state, action) => {

                    state.loading = false;

                    state.error =
                        action.payload;

                }
            );


        // ==================================================
        // GET MY ORDERS
        // ==================================================

        builder

            .addCase(
                getMyOrders.pending,
                (state) => {

                    state.loading = true;
                    state.error = null;

                }
            )

            .addCase(
                getMyOrders.fulfilled,
                (state, action) => {

                    state.loading = false;

                    state.orders =
                        action.payload;

                }
            )

            .addCase(
                getMyOrders.rejected,
                (state, action) => {

                    state.loading = false;

                    state.error =
                        action.payload;

                }
            );

    },

});


export const {
    clearOrderError,
    clearSelectedOrder,
} = orderSlice.actions;


export default orderSlice.reducer;