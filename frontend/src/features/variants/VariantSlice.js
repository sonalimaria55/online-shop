import { createSlice } from "@reduxjs/toolkit";

import {
    getVariants,
  
    createVariant,
    updateVariant,
    deleteVariant,
} from "./VariantThunk";

const initialState = {

    variants: [],

    selectedVariant: null,

    loading: false,

    error: null,

};

const variantSlice = createSlice({

    name: "variants",

    initialState,

    reducers: {},

    extraReducers: (builder) => {

        builder

        // GET ALL
        .addCase(getVariants.pending, (state) => {

            state.loading = true;

        })

        .addCase(getVariants.fulfilled, (state, action) => {

            state.loading = false;

            state.variants = action.payload.variants || [];

        })

        .addCase(getVariants.rejected, (state, action) => {

            state.loading = false;

            state.error = action.payload || action.error.message;

        })


        // GET ONE

// GET ONE


        // CREATE
        .addCase(createVariant.fulfilled, (state, action) => {

            state.variants.unshift(action.payload.variant);

        })


        // UPDATE
        .addCase(updateVariant.fulfilled, (state, action) => {

            state.variants = state.variants.map((item) =>

                item._id === action.payload.variant._id

                    ? action.payload.variant

                    : item

            );

        })


        // DELETE
        .addCase(deleteVariant.fulfilled, (state, action) => {

            state.variants = state.variants.filter(

                (item) => item._id !== action.meta.arg

            );

        });

    },

});

export default variantSlice.reducer;