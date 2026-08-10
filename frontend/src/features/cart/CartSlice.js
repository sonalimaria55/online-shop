import { createSlice } from "@reduxjs/toolkit";

import {
  getCart,
  addToCart,
  updateCart,
  removeCartItem,
  clearCart,
} from "./CartThunk";


const initialState = {
  cart: null,
  items: [],
  loading: false,
  error: null,
  success: false,
};


const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    clearCartState: (state) => {
      state.cart = null;
      state.items = [];
      state.error = null;
    },

  },


  extraReducers: (builder) => {

    builder

      // GET CART
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })

      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;

        state.cart = action.payload;

        state.items = action.payload?.items || [];
      })

      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })



      // ADD TO CART
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })

      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;

        state.cart = action.payload;

        state.items = action.payload?.items || [];

        state.success = true;
      })

      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })



      // UPDATE QUANTITY
      .addCase(updateCart.fulfilled, (state, action) => {

        state.cart = action.payload;

        state.items = action.payload?.items || [];

      })



      // REMOVE ITEM
      .addCase(removeCartItem.fulfilled, (state, action) => {

        state.cart = action.payload;

        state.items = action.payload?.items || [];

      })



      // CLEAR CART
      .addCase(clearCart.fulfilled, (state) => {

        state.cart = null;

        state.items = [];

      });

  }

});


export const {
  clearCartState
} = cartSlice.actions;


export default cartSlice.reducer;