const { createSlice } = require("@reduxjs/toolkit");
const local = () => {
  if (typeof window !== "undefined") return JSON.parse(localStorage.getItem("user")) || {};
  return {};
};
const initialState = { value: local() };
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logut: (state) => {
      state.value = {};
    },
  },
});
export const { login, logut } = authSlice.actions;
export default authSlice.reducer;
