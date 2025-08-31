import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    user: {
      id: 1,
      name: "laktab hamza",
      email: "hamza@gmail.com",
    },
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;