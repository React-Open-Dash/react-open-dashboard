import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  isAuthorized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: { ...defaultState },
});

export default authSlice;
