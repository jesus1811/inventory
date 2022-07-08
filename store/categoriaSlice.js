import { createSlice } from "@reduxjs/toolkit";
const local = () => {
  if (typeof window !== "undefined") return JSON.parse(localStorage.getItem("categories")) || [];
  return [];
};
const initialState = { value: local() };
const categoriaSlice = createSlice({
  name: "categorias",
  initialState,
  reducers: {
    cargar: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("categories", JSON.stringify(action.payload));
    },
  },
});
export const { cargar } = categoriaSlice.actions;
export default categoriaSlice.reducer;
