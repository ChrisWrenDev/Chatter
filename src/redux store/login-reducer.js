import { createSlice } from "@reduxjs/toolkit";

const loginStatus = {
  userName: "",
  userTimer: 0,
  userStatus: "", //close
  targetName: "",
  targetStatus: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState: loginStatus,
  reducers: {
    setUserTimer(state, action) {
      state.userTimer = action.payload;
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setUserStatus(state, action) {
      state.userStatus = action.payload;
      console.log("User Status: " + action.payload);
    },
    setTargetUsername(state, action) {
      state.targetName = action.payload;
    },
    setTargetStatus(state, action) {
      state.targetStatus = action.payload;
      console.log("Target Status: " + action.payload);
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
