import { createSlice } from "@reduxjs/toolkit";
const local = () => {
  if (typeof window !== "undefined") return JSON.parse(localStorage.getItem("productsForCategory")) || [];
  return [];
};
const initialState = { value: local() };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
