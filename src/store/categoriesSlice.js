import { createSlice } from "@reduxjs/toolkit";
const local = () => {
  if (typeof window !== "undefined") return JSON.parse(localStorage.getItem("categories")) || [];
  return [];
};
const initialState = { value: local() };
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("categories", JSON.stringify(action.payload));
    },
  },
});
export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
