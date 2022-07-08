import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

const productoForCategoriaSlice = createSlice({
  name: "productoForCategoria",
  initialState,
  reducers: {
    cargar: (state, action) => {
      // const productos = action.payload.filter((item) => {
      //   return item === item.idcategoria;
      // });
      state.value = action.payload.data.filter((item) => {
        return item.idcategoria === action.payload.id;
      });
    },
  },
});

export const { cargar } = productoForCategoriaSlice.actions;
export default productoForCategoriaSlice.reducer;
