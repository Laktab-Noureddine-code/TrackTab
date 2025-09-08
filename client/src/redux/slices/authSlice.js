import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    user: null,
    token: null,
    isLoggedIn: false,
    loading: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setToken, setIsLoggedIn } = authSlice.actions;
export default authSlice.reducer;
