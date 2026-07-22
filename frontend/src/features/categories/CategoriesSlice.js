
// import { createSlice } from "@reduxjs/toolkit";

// import {
//     createCategory,
//     getCategories,
//     getCategoryById,
//     updateCategory,
//     deleteCategory
// } from "./CategoriesThunk";


// const initialState = {

//     categories: [],

//     category: null,

//     loading: false,

//     error: null

// };


// const CategoriesSlice = createSlice({

//     name: "categories",

//     initialState,

//     reducers: {

//         clearCategoryError: (state) => {

//             state.error = null;

//         }

//     },


//     extraReducers: (builder) => {

//         builder


//         // ================= GET ALL =================

//         .addCase(getCategories.pending, (state)=>{

//             state.loading = true;

//         })

//         .addCase(getCategories.fulfilled,(state,action)=>{

//             state.loading = false;

//             state.categories =
//                 action.payload.categories;

//         })

//         .addCase(getCategories.rejected,(state,action)=>{

//             state.loading = false;

//             state.error =
//                 action.payload;

//         })


//         // ================= GET SINGLE =================

//         .addCase(getCategoryById.pending,(state)=>{

//             state.loading = true;

//         })

//         .addCase(getCategoryById.fulfilled,(state,action)=>{

//             state.loading = false;

//             state.category =
//                 action.payload.category;

//         })

//         .addCase(getCategoryById.rejected,(state,action)=>{

//             state.loading = false;

//             state.error =
//                 action.payload;

//         })


//         // ================= CREATE =================

//         .addCase(createCategory.pending,(state)=>{

//             state.loading = true;

//         })

//         .addCase(createCategory.fulfilled,(state,action)=>{

//             state.loading = false;

//             state.categories.unshift(
//                 action.payload.category
//             );

//         })

//         .addCase(createCategory.rejected,(state,action)=>{

//             state.loading = false;

//             state.error =
//                 action.payload;

//         })


//         // ================= UPDATE =================

//         .addCase(updateCategory.pending,(state)=>{

//             state.loading = true;

//         })

//         .addCase(updateCategory.fulfilled,(state,action)=>{

//             state.loading = false;


//             const updatedCategory =
//                 action.payload.category;


//             const index =
//                 state.categories.findIndex(

//                     item =>
//                     item._id === updatedCategory._id

//                 );


//             if(index !== -1){

//                 state.categories[index] =
//                     updatedCategory;

//             }


//         })

//         .addCase(updateCategory.rejected,(state,action)=>{

//             state.loading = false;

//             state.error =
//                 action.payload;

//         })


//         // ================= DELETE =================

//         .addCase(deleteCategory.pending,(state)=>{

//             state.loading = true;

//         })


//         .addCase(deleteCategory.fulfilled,(state,action)=>{

//             state.loading = false;


//             state.categories =
//                 state.categories.filter(

//                     item =>
//                     item._id !== action.payload.id

//                 );

//         })


//         .addCase(deleteCategory.rejected,(state,action)=>{

//             state.loading = false;

//             state.error =
//                 action.payload;

//         });


//     }

// });


// export const {
//     clearCategoryError

// } = CategoriesSlice.actions;


// export default CategoriesSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

import {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
} from "./CategoriesThunk";


const initialState = {

    categories: [],

    category: null,

    loading: false,

    error: null

};


const CategoriesSlice = createSlice({

    name: "categories",

    initialState,

    reducers: {

        clearCategoryError: (state) => {

            state.error = null;

        }

    },


    extraReducers: (builder) => {

        builder


        // ================= GET ALL =================

        .addCase(getCategories.pending, (state)=>{

            state.loading = true;

        })

        .addCase(getCategories.fulfilled,(state,action)=>{

            state.loading = false;

            state.categories =
                action.payload.categories;

        })

        .addCase(getCategories.rejected,(state,action)=>{

            state.loading = false;

            state.error =
                action.payload;

        })


        // ================= GET SINGLE =================

        .addCase(getCategoryById.pending,(state)=>{

            state.loading = true;

        })

        .addCase(getCategoryById.fulfilled,(state,action)=>{

            state.loading = false;

            state.category =
                action.payload.category;

        })

        .addCase(getCategoryById.rejected,(state,action)=>{

            state.loading = false;

            state.error =
                action.payload;

        })


        // ================= CREATE =================

        .addCase(createCategory.pending,(state)=>{

            state.loading = true;

        })

        .addCase(createCategory.fulfilled,(state,action)=>{

            state.loading = false;

            state.categories.unshift(
                action.payload.category
            );

        })

        .addCase(createCategory.rejected,(state,action)=>{

            state.loading = false;

            state.error =
                action.payload;

        })


        // ================= UPDATE =================

        .addCase(updateCategory.pending,(state)=>{

            state.loading = true;

        })

        .addCase(updateCategory.fulfilled,(state,action)=>{

            state.loading = false;


            const updatedCategory =
                action.payload.category;


            const index =
                state.categories.findIndex(

                    item =>
                    item._id === updatedCategory._id

                );


            if(index !== -1){

                state.categories[index] =
                    updatedCategory;

            }


        })

        .addCase(updateCategory.rejected,(state,action)=>{

            state.loading = false;

            state.error =
                action.payload;

        })


        // ================= DELETE =================

        .addCase(deleteCategory.pending,(state)=>{

            state.loading = true;

        })


        .addCase(deleteCategory.fulfilled,(state,action)=>{

            state.loading = false;


            state.categories =
                state.categories.filter(

                    item =>
                    item._id !== action.payload.id

                );

        })


        .addCase(deleteCategory.rejected,(state,action)=>{

            state.loading = false;

            state.error =
                action.payload;

        });


    }

});


export const {
    clearCategoryError

} = CategoriesSlice.actions;


export default CategoriesSlice.reducer;