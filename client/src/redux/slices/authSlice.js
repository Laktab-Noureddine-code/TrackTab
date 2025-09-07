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
    isLoggedIn: false,
    loading: false,
    backendUrl: import.meta.env.VITE_BACKEND_URL,
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

export const { setToken ,setIsLoggedIn } = authSlice.actions;
export default authSlice.reducer;
