import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/ProductsSlice";
import categoriesReducer from "../features/categories/CategoriesSlice";
import bannerReducer from "../features/banners/BannerSlice";
import cartReducer from "../features/cart/CartSlice";


import orderReducer from "../features/orders/OrderSlice";
import variantReducer from "../features/variants/VariantSlice";
import authReducer from "../auth/authSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    categories: categoriesReducer,
    banner: bannerReducer,

    variants: variantReducer,
    cart: cartReducer,   
    orders: orderReducer,

  },
});

export default store;