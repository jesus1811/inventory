import { createSlice } from "@reduxjs/toolkit";
const local = () => {
  if (typeof window !== "undefined") return JSON.parse(localStorage.getItem("categorie")) || [];
  return [];
};
const initialState = { value: local() };
const categoriaIdSlice = createSlice({
  name: "categoria",
  initialState,
  reducers: {
    cargar: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("categorie", JSON.stringify(action.payload));
    },
  },
});
export const { cargar } = categoriaIdSlice.actions;
export default categoriaIdSlice.reducer;