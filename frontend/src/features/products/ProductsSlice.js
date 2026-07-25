// import { createSlice } from "@reduxjs/toolkit";

// import {
//   createProduct,
//   getProducts,
//   updateProduct,
//   deleteProduct,
//   getFeaturedProducts,
//   getProductById,
//   getHomeCollections,
// } from "./ProductsThunk";

// const initialState = {

//   products: [],

//   featuredProducts: [],

//   homeCollections: [],

//   selectedProduct: null,

//   loading: false,

//   error: null,

//   success: false

// };

// const ProductsSlice = createSlice({
//   name: "products",

//   initialState,

//   reducers: {},

//   extraReducers: (builder) => {
//     builder

//       // ==========================
//       // GET PRODUCTS
//       // ==========================
//       .addCase(getProducts.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(getProducts.fulfilled, (state, action) => {
//         state.loading = false;

//  console.log("SLICE RECEIVED:", action.payload);

//         state.products =
//           action.payload?.data?.products ||
//           action.payload?.products ||
//           action.payload ||
//           [];
//       })

//       // .addCase(getProducts.rejected, (state, action) => {
//       //   state.loading = false;
//       //   state.error = action.payload;
//       // })

//       .addCase(getProducts.fulfilled, (state, action) => {
//         console.log(
//           "REDUX PRODUCT PAYLOAD:",
//           action.payload
//         );

//         state.products =
//           action.payload?.data?.products ||
//           action.payload?.products ||
//           action.payload ||
//           [];
//       })





//       // ==========================
//       // CREATE PRODUCT
//       // ==========================
//       .addCase(createProduct.fulfilled, (state, action) => {
//         const product =
//           action.payload?.data?.product ||
//           action.payload?.product ||
//           action.payload;

//         if (product) {
//           state.products.unshift(product);
//         }
//       })

//       // ==========================
//       // UPDATE PRODUCT
//       // ==========================
//       .addCase(updateProduct.fulfilled, (state, action) => {
//         const updated =
//           action.payload?.data?.product ||
//           action.payload?.product ||
//           action.payload;

//         if (updated) {
//           state.products = state.products.map((item) =>
//             item._id === updated._id ? updated : item
//           );
//         }
//       })

//       // ==========================
//       // DELETE PRODUCT
//       // ==========================
//       .addCase(deleteProduct.fulfilled, (state, action) => {
//         state.products = state.products.filter(
//           (item) => item._id !== action.payload.id
//         );
//       })

//       // ==========================
//       // GET FEATURED PRODUCTS
//       // ==========================
//       .addCase(getFeaturedProducts.fulfilled, (state, action) => {
//         state.featuredProducts =
//           action.payload?.data || [];
//       })

//       // ==========================
//       // GET PRODUCT BY ID
//       // ==========================
//       // .addCase(getProductById.fulfilled, (state, action) => {
//       //   state.selectedProduct =
//       //     action.payload?.product || null;
//       // })

//       .addCase(getProductById.fulfilled, (state, action) => {
//         state.selectedProduct = action.payload;
//       })


//       .addCase(
//         getHomeCollections.fulfilled,
//         (state, action) => {

//           state.homeCollections =
//             action.payload?.data || [];

//         }
//       );




//   },
// });

// export default ProductsSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getProductById,
  getHomeCollections,
} from "./ProductsThunk";


const initialState = {

  products: [],

  featuredProducts: [],

  homeCollections: [],

  selectedProduct: null,

  loading:false,

  error:null,

  success:false,

};



const ProductsSlice = createSlice({

  name:"products",

  initialState,

  reducers:{},


  extraReducers:(builder)=>{

    builder


    // ==========================
    // GET ALL PRODUCTS
    // ==========================

    .addCase(getProducts.pending,(state)=>{

        state.loading = true;
        state.error = null;

    })


    .addCase(getProducts.fulfilled,(state,action)=>{

        state.loading = false;

        state.products =
        action.payload.products || [];

    })


    .addCase(getProducts.rejected,(state,action)=>{

        state.loading = false;

        state.error =
        action.payload || action.error.message;

    })



    // ==========================
    // CREATE PRODUCT
    // ==========================

    .addCase(createProduct.fulfilled,(state,action)=>{

        const product = action.payload.product;


        if(product){

            state.products.unshift(product);

        }

    })



    // ==========================
    // UPDATE PRODUCT
    // ==========================

    .addCase(updateProduct.fulfilled,(state,action)=>{

        const updated = action.payload.product;


        if(updated){

            state.products =
            state.products.map(item=>

                item._id === updated._id
                ? updated
                : item

            );

        }

    })



    // ==========================
    // DELETE PRODUCT
    // ==========================

    .addCase(deleteProduct.fulfilled,(state,action)=>{


        state.products =
        state.products.filter(

            item => item._id !== action.payload.id

        );


    })



    // ==========================
    // FEATURED PRODUCTS
    // ==========================

    .addCase(getFeaturedProducts.fulfilled,(state,action)=>{


        state.featuredProducts =
        action.payload.products || [];


    })



    // ==========================
    // PRODUCT DETAILS
    // ==========================

    .addCase(getProductById.pending,(state)=>{


        state.loading = true;

        state.error = null;


    })


    .addCase(getProductById.fulfilled,(state,action)=>{


        state.loading = false;


        state.selectedProduct =
        action.payload.product ||
        action.payload ||
        null;


    })


    .addCase(getProductById.rejected,(state,action)=>{


        state.loading = false;


        state.error =
        action.payload ||
        action.error.message;


    })



    // ==========================
    // HOME COLLECTIONS
    // ==========================

    .addCase(getHomeCollections.fulfilled,(state,action)=>{


        state.homeCollections =
        action.payload.products || [];


    });


  },

});


export default ProductsSlice.reducer;