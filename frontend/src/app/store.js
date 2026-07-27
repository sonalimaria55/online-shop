import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/ProductsSlice";
import categoriesReducer from "../features/categories/CategoriesSlice";
import bannerReducer from "../features/banners/BannerSlice";
import cartReducer from "../features/cart/CartSlice";


import variantReducer from "../features/variants/VariantSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    banner: bannerReducer,

    variants: variantReducer,
    cart: cartReducer,   
    

  },
});

export default store;