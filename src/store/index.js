import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login-reducer";
import chatReducer from "./chat-reducer";

const store = configureStore({
  reducer: {
    login: loginReducer,
    chat: chatReducer,
  },
});

export default store;
