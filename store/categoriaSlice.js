import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: [] };
const categoriaSlice = createSlice({
  name: "categorias",
  initialState,
  reducers: {
    cargar: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { cargar } = categoriaSlice.actions;
export default categoriaSlice.reducer;
