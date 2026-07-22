import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/ProductsSlice";
import categoriesReducer from "../features/categories/CategoriesSlice";
import bannerReducer from "../features/banners/BannerSlice";
import cartReducer from "../features/cart/CartSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    banner: bannerReducer,
    cart: cartReducer,   // add this

  },
});

export default store;