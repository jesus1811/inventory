import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import CategoriaidSlice from "./CategoriaidSlice";
import categoriaSlice from "./categoriaSlice";
import productoForCategoriaSlice from "./productoForCategoriaSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    categorias: categoriaSlice,
    productoForCategoria: productoForCategoriaSlice,
    categoria: CategoriaidSlice
  },
});
export default store;
