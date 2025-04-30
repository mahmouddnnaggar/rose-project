import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "next-auth/react";
const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      signOut({ callbackUrl: window.location.href });
      state.token = null;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;
