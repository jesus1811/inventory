import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";
import productsCategorySlice from "./productsSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    categories: categoriesSlice,
    products: productsCategorySlice,
    category: categorySlice,
    product: productSlice,
  },
});
export default store;
