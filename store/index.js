import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import categorySlice from "./categorySlice";
import productsCategorySlice from "./productsSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    categories: categoriesSlice,
    products: productsCategorySlice,
    category: categorySlice,
  },
});
export default store;
