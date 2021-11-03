import { createSlice } from "@reduxjs/toolkit";

const loginStatus = {
  userName: "",
  userTimer: 0,
  userConnectionStatus: null,
  targetName: "",
  targetConnectionStatus: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState: loginStatus,
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setUserTimer(state, action) {
      state.userTimer = action.payload;
    },
    setTargetUsername(state, action) {
      state.targetName = action.payload;
    },
    setUserConnectionStatus(state, action) {
      state.userConnectionStatus = action.payload;
      console.log(action.payload);
    },
    setTargetConnectionStatus(state, action) {
      state.targetConnectionStatus = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
