import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    role: "USER",
    accessToken: null,
    user: null,
    isLoading: false,
    userEmail: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.userEmail = action.payload.userEmail;
    },
    registrationSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.userEmail = action.payload.userEmail;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.role = "USER";
      state.accessToken = null;
      state.user = null;
      state.userEmail = null;
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
    noLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  loginSuccess,
  logoutSuccess,
  registrationSuccess,
  setLoading,
  noLoading,
} = authSlice.actions;

export default authSlice.reducer;
