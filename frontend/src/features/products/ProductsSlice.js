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

//-------------------------------------------------------------------
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

//   loading:false,

//   error:null,

//   success:false,

// };



// const ProductsSlice = createSlice({

//   name:"products",

//   initialState,

//   reducers:{},


//   extraReducers:(builder)=>{

//     builder


//     // ==========================
//     // GET ALL PRODUCTS
//     // ==========================

//     .addCase(getProducts.pending,(state)=>{

//         state.loading = true;
//         state.error = null;

//     })


//     .addCase(getProducts.fulfilled,(state,action)=>{

//         state.loading = false;

//         state.products =
//         action.payload.products || [];

//     })


//     .addCase(getProducts.rejected,(state,action)=>{

//         state.loading = false;

//         state.error =
//         action.payload || action.error.message;

//     })



//     // ==========================
//     // CREATE PRODUCT
//     // ==========================

//     .addCase(createProduct.fulfilled,(state,action)=>{

//         const product = action.payload.product;


//         if(product){

//             state.products.unshift(product);

//         }

//     })



//     // ==========================
//     // UPDATE PRODUCT
//     // ==========================

//     .addCase(updateProduct.fulfilled,(state,action)=>{

//         const updated = action.payload.product;


//         if(updated){

//             state.products =
//             state.products.map(item=>

//                 item._id === updated._id
//                 ? updated
//                 : item

//             );

//         }

//     })



//     // ==========================
//     // DELETE PRODUCT
//     // ==========================

//     .addCase(deleteProduct.fulfilled,(state,action)=>{


//         state.products =
//         state.products.filter(

//             item => item._id !== action.payload.id

//         );


//     })



//     // ==========================
//     // FEATURED PRODUCTS
//     // ==========================

//     .addCase(getFeaturedProducts.fulfilled,(state,action)=>{


//         state.featuredProducts =
//         action.payload.products || [];


//     })



//     // ==========================
//     // PRODUCT DETAILS
//     // ==========================

//     .addCase(getProductById.pending,(state)=>{


//         state.loading = true;

//         state.error = null;


//     })


//     .addCase(getProductById.fulfilled,(state,action)=>{


//         state.loading = false;


//         state.selectedProduct =
//         action.payload.product ||
//         action.payload ||
//         null;


//     })


//     .addCase(getProductById.rejected,(state,action)=>{


//         state.loading = false;


//         state.error =
//         action.payload ||
//         action.error.message;


//     })



//     // ==========================
//     // HOME COLLECTIONS
//     // ==========================

//     .addCase(getHomeCollections.fulfilled,(state,action)=>{


//         state.homeCollections =
//         action.payload.products || [];


//     });


//   },

// });


// export default ProductsSlice.reducer;

//------------------------------------------

// import { createSlice } from "@reduxjs/toolkit";

// import {
//     createProduct,
//     getProducts,
//     updateProduct,
//     deleteProduct,
//     getFeaturedProducts,
//     getProductById,
//     getHomeCollections,
// } from "./ProductsThunk";

// const initialState = {
//     products: [],
//     featuredProducts: [],
//     homeCollections: [],
//     selectedProduct: null,

//     loading: false,
//     error: null,
//     success: false,
// };

// const ProductsSlice = createSlice({
//     name: "products",

//     initialState,

//     reducers: {
//         resetProductState: (state) => {
//             state.loading = false;
//             state.error = null;
//             state.success = false;
//         },

//         clearSelectedProduct: (state) => {
//             state.selectedProduct = null;
//         },
//     },

//     extraReducers: (builder) => {

//         builder

//         // =====================================
//         // GET ALL PRODUCTS
//         // =====================================
//         .addCase(getProducts.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//         })

//         .addCase(getProducts.fulfilled, (state, action) => {
//             state.loading = false;
//            // state.products = action.payload.products || [];

//            state.products = action.payload.products || action.payload || [];
//         })

//         .addCase(getProducts.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.payload || action.error.message;
//         })


//         // =====================================
//         // CREATE PRODUCT
//         // =====================================
//         .addCase(createProduct.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//             state.success = false;
//         })

//         .addCase(createProduct.fulfilled, (state, action) => {
//             state.loading = false;
//             state.success = true;

//             if (action.payload.product) {
//                 state.products.unshift(action.payload.product);
//             }
//         })

//         .addCase(createProduct.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.payload || action.error.message;
//         })


//         // =====================================
//         // UPDATE PRODUCT
//         // =====================================
//         .addCase(updateProduct.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//             state.success = false;
//         })

//         .addCase(updateProduct.fulfilled, (state, action) => {
//             state.loading = false;
//             state.success = true;

//             const updated = action.payload.product;

//             if (updated) {
//                 state.products = state.products.map((item) =>
//                     item._id === updated._id ? updated : item
//                 );

//                 state.selectedProduct = updated;
//             }
//         })

//         .addCase(updateProduct.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.payload || action.error.message;
//         })


//         // =====================================
//         // DELETE PRODUCT
//         // =====================================
//         .addCase(deleteProduct.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//         })

//         .addCase(deleteProduct.fulfilled, (state, action) => {
//             state.loading = false;
//             state.success = true;

//             state.products = state.products.filter(
//                 (item) => item._id !== action.payload.id
//             );
//         })

//         .addCase(deleteProduct.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.payload || action.error.message;
//         })


//         // =====================================
//         // FEATURED PRODUCTS
//         // =====================================
//         .addCase(getFeaturedProducts.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//         })

//         .addCase(getFeaturedProducts.fulfilled, (state, action) => {
//             state.loading = false;
//             state.featuredProducts = action.payload.products || [];
//         })

//         .addCase(getFeaturedProducts.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.payload || action.error.message;
//         })


//         // =====================================
//         // HOME COLLECTIONS
//         // =====================================
//         .addCase(getHomeCollections.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//         })

//         .addCase(getHomeCollections.fulfilled, (state, action) => {
//             state.loading = false;
//             state.homeCollections = action.payload.products || [];
//         })

//         .addCase(getHomeCollections.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.payload || action.error.message;
//         })


//         // =====================================
//         // GET PRODUCT BY ID
//         // =====================================
//         .addCase(getProductById.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//         })

//         .addCase(getProductById.fulfilled, (state, action) => {
//             state.loading = false;

//             state.selectedProduct =
//                 action.payload.product || null;
//         })

//         .addCase(getProductById.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.payload || action.error.message;
//         });

//     },
// });

// export const {
//     resetProductState,
//     clearSelectedProduct,
// } = ProductsSlice.actions;

// export default ProductsSlice.reducer;
//-------------------------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";

import {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    getFeaturedProducts,
    getProductById,
    getHomeCollections,
    getProductsByCategory,
} from "./ProductsThunk";


const initialState = {
    products: [],

    featuredProducts: [],

    homeCollections: [],

    // Products belonging to the selected category
    categoryProducts: [],

    selectedProduct: null,

    loading: false,
    error: null,
    success: false,
};


const ProductsSlice = createSlice({

    name: "products",

    initialState,

    reducers: {

        resetProductState: (state) => {

            state.loading = false;
            state.error = null;
            state.success = false;

        },


        clearSelectedProduct: (state) => {

            state.selectedProduct = null;

        },


        // Optional:
        // Clear category products when leaving category page
        clearCategoryProducts: (state) => {

            state.categoryProducts = [];

        },

    },


    extraReducers: (builder) => {

        builder


        // =====================================
        // GET ALL PRODUCTS
        // =====================================

        .addCase(getProducts.pending, (state) => {

            state.loading = true;
            state.error = null;

        })


        .addCase(getProducts.fulfilled, (state, action) => {

            state.loading = false;

            state.products =
                action.payload.products ||
                action.payload ||
                [];

        })


        .addCase(getProducts.rejected, (state, action) => {

            state.loading = false;

            state.error =
                action.payload ||
                action.error.message;

        })


        // =====================================
        // CREATE PRODUCT
        // =====================================

        .addCase(createProduct.pending, (state) => {

            state.loading = true;
            state.error = null;
            state.success = false;

        })


        .addCase(createProduct.fulfilled, (state, action) => {

            state.loading = false;
            state.success = true;

            if (action.payload.product) {

                state.products.unshift(
                    action.payload.product
                );

            }

        })


        .addCase(createProduct.rejected, (state, action) => {

            state.loading = false;

            state.error =
                action.payload ||
                action.error.message;

        })


        // =====================================
        // UPDATE PRODUCT
        // =====================================

        .addCase(updateProduct.pending, (state) => {

            state.loading = true;
            state.error = null;
            state.success = false;

        })


        .addCase(updateProduct.fulfilled, (state, action) => {

            state.loading = false;
            state.success = true;

            const updated =
                action.payload.product;

            if (updated) {

                state.products =
                    state.products.map((item) =>
                        item._id === updated._id
                            ? updated
                            : item
                    );

                state.selectedProduct =
                    updated;

            }

        })


        .addCase(updateProduct.rejected, (state, action) => {

            state.loading = false;

            state.error =
                action.payload ||
                action.error.message;

        })


        // =====================================
        // DELETE PRODUCT
        // =====================================

        .addCase(deleteProduct.pending, (state) => {

            state.loading = true;
            state.error = null;

        })


        .addCase(deleteProduct.fulfilled, (state, action) => {

            state.loading = false;
            state.success = true;

            state.products =
                state.products.filter(
                    (item) =>
                        item._id !== action.payload.id
                );

        })


        .addCase(deleteProduct.rejected, (state, action) => {

            state.loading = false;

            state.error =
                action.payload ||
                action.error.message;

        })


        // =====================================
        // FEATURED PRODUCTS
        // =====================================

        .addCase(getFeaturedProducts.pending, (state) => {

            state.loading = true;
            state.error = null;

        })


        .addCase(getFeaturedProducts.fulfilled, (state, action) => {

            state.loading = false;

            state.featuredProducts =
                action.payload.products ||
                [];

        })


        .addCase(getFeaturedProducts.rejected, (state, action) => {

            state.loading = false;

            state.error =
                action.payload ||
                action.error.message;

        })


        // =====================================
        // HOME COLLECTIONS
        // =====================================

        .addCase(getHomeCollections.pending, (state) => {

            state.loading = true;
            state.error = null;

        })


        .addCase(getHomeCollections.fulfilled, (state, action) => {

            state.loading = false;

            state.homeCollections =
                action.payload.products ||
                [];

        })


        .addCase(getHomeCollections.rejected, (state, action) => {

            state.loading = false;

            state.error =
                action.payload ||
                action.error.message;

        })


        // =====================================
        // GET PRODUCTS BY CATEGORY
        // =====================================

        .addCase(getProductsByCategory.pending, (state) => {

            state.loading = true;
            state.error = null;

        })


        .addCase(getProductsByCategory.fulfilled, (state, action) => {

            state.loading = false;

            state.categoryProducts =
                action.payload.products ||
                [];

        })


        .addCase(getProductsByCategory.rejected, (state, action) => {

            state.loading = false;

            state.categoryProducts = [];

            state.error =
                action.payload ||
                action.error.message;

        })


        // =====================================
        // GET PRODUCT BY ID
        // =====================================

        .addCase(getProductById.pending, (state) => {

            state.loading = true;
            state.error = null;

        })


        .addCase(getProductById.fulfilled, (state, action) => {

            state.loading = false;

            state.selectedProduct =
                action.payload.product ||
                null;

        })


        .addCase(getProductById.rejected, (state, action) => {

            state.loading = false;

            state.error =
                action.payload ||
                action.error.message;

        });

    },

});


export const {
    resetProductState,
    clearSelectedProduct,
    clearCategoryProducts,
} = ProductsSlice.actions;


export default ProductsSlice.reducer;