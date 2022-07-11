import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productsCategorySlice from "./productsSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    categories: categoriesSlice,
    products: productsCategorySlice,
  },
});
export default store;
