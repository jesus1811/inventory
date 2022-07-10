import { createSlice } from "@reduxjs/toolkit";
const local = () => {
  if (typeof window !== "undefined") return JSON.parse(localStorage.getItem("category")) || [];
  return [];
};
const initialState = { value: local() };
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("category", JSON.stringify(action.payload));
    },
  },
});
export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
