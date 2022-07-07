import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categoriaSlice from "./categoriaSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    categorias: categoriaSlice,
  },
});
export default store;
