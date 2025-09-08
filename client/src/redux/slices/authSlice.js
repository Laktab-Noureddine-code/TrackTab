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
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    setLoadingUser: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setToken, setIsLoggedIn, setUserData ,setLoadingUser } = authSlice.actions;
export default authSlice.reducer;
