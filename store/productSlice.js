import { createSlice } from "@reduxjs/toolkit";
const local = () => {
  if (typeof window !== "undefined") return JSON.parse(localStorage.getItem("product")) || [];
  return [];
};
const initialState = { value: local() };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("product", JSON.stringify(action.payload));
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
