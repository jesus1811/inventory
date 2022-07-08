import { createSlice } from "@reduxjs/toolkit";
const local = () => {
  if (typeof window !== "undefined") return JSON.parse(localStorage.getItem("productsForCategory")) || [];
  return [];
};
const initialState = { value: local() };

const productoForCategoriaSlice = createSlice({
  name: "productoForCategoria",
  initialState,
  reducers: {
    cargar: (state, action) => {
      const productsForCategory = action.payload.data.filter((item) => {
        return item.idcategoria === action.payload.id;
      });
      state.value = productsForCategory;
      localStorage.setItem("productsForCategory", JSON.stringify(productsForCategory));
    },
  },
});

export const { cargar } = productoForCategoriaSlice.actions;
export default productoForCategoriaSlice.reducer;
