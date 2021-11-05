import Peer from "peerjs";
import { chatActions } from "./chat-reducer";
import { loginActions } from "./login-reducer";

let userConnection;
let targetConnection;

//Add notification action to display on form
export const connectUser = function (userName) {
  return (dispatch) => {
    userConnection = new Peer(userName);

    userConnection.on("open", function (id) {
      dispatch(loginActions.setUserStatus("connection"));
    });

    userConnection.on("connection", function () {
      dispatch(loginActions.setUserStatus("connection"));
    });

    userConnection.on("close", function () {
      dispatch(loginActions.setUserStatus("close"));
    });

    userConnection.on("disconnected", function () {
      dispatch(loginActions.setUserStatus("disconnected"));
    });

    userConnection.on("error", function () {
      dispatch(loginActions.setUserStatus("error"));
    });
  };
};

export const reconnectUser = function () {
  userConnection.reconnect();
};

export const disconnectUser = function () {
  return () => {
    userConnection.destroy();
  };
};

export const connectTarget = function (target) {
  return (dispatch) => {
    targetConnection = userConnection.connect(target);

    targetConnection.on("data", function (data) {
      console.log("Data Recieved");
      dispatch(chatActions.addMessage(data));
    });
    targetConnection.on("open", function () {
      dispatch(loginActions.setTargetStatus("connection"));
    });

    targetConnection.on("close", function () {
      dispatch(loginActions.setTargetStatus("close"));
    });

    targetConnection.on("error", function (err) {
      dispatch(loginActions.setTargetStatus("error"));
    });
  };
};

export const disconnectTarget = function () {
  return () => {
    targetConnection.close();
  };
};

export const sendMessage = function (msg) {
  return (dispatch) => {
    console.log(targetConnection);
    //targetConnection.send(msg);
    dispatch(chatActions.addMessage(msg));
  };
};
