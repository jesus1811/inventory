import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categoriaSlice from "./categoriaSlice";
import productoForCategoriaSlice from "./productoForCategoriaSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    categorias: categoriaSlice,
    productoForCategoria: productoForCategoriaSlice,
  },
});
export default store;
