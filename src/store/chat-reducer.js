import { createSlice } from "@reduxjs/toolkit";

const chatStatus = {
  chatDuration: 0,
  messages: [],
};

const chatSlice = createSlice({
  name: "login",
  initialState: chatStatus,
  reducers: {
    addMessage(state, action) {
      //Add message to the array
    },
    removeMessage(state, action) {
      //Remove message from the array
    },
    updateChatDuration(state, action) {
      state.chatDuration = action.payload;
    },
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice.reducer;
