const { createSlice } = require("@reduxjs/toolkit");
const local = () => {
  if (typeof window !== "undefined") return JSON.parse(localStorage.getItem("user")) || {};
  return {};
};
const initialState = { value: local() };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
