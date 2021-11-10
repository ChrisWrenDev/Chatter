import { createSlice } from "@reduxjs/toolkit";

// {
//   id: 1,
//   user: "user",
//   interval: 5,
//   message:
//     "lorem itpsum whas a loveely day inside the country cabin. we didnt know how to cook all the apples we found.",
// }

const chatStatus = {
  chatDuration: 0,
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState: chatStatus,
  reducers: {
    addMessage(state, action) {
      //Add message to the array
      state.messages.push({
        id: state.messages.length++,
        user: action.payload.user,
        interval: action.payload.interval,
        message: action.payload.message,
      });
    },
    removeMessage(state, action) {
      //Remove message from the array
      state.messages = state.messages.filter(
        (item) => item.id !== action.payload
      );
    },
    resetMessages(state) {
      state.messages = [];
      state.chatDuration = 0;
    },
    updateChatDuration(state, action) {
      state.chatDuration = action.payload;
    },
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice.reducer;
