import { createSlice } from "@reduxjs/toolkit";
const local = () => {
  if (typeof window !== "undefined") return JSON.parse(localStorage.getItem("products")) || [];
  return [];
};
const initialState = { value: local() };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("products", JSON.stringify(action.payload));
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
