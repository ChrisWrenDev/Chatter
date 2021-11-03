import Peer from "peerjs";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../store/login-reducer";
import { chatActions } from "../store/chat-reducer";
import { useState, useEffect, useCallback } from "react";

const usePeerJS = function () {
  const username = useSelector((state) => state.userName);
  const target = useSelector((state) => state.targetName);
  const dispatch = useDispatch();

  const [userConnection, setUserConnection] = useState(null);
  const [targetConnection, setTargetConnection] = useState(null);

  const connectUser = function () {
    setUserConnection(new Peer(username));
  };

  const reconnectUser = function () {
    userConnection.reconnect();
  };

  const disconnectUser = function () {
    userConnection.destroy();
  };

  const updateUserStatus = useCallback(
    function (status) {
      if (status === "connection") {
        dispatch(loginActions.setUserConnectionStatus("connection"));
      }
      if (status === "disconnected") {
        dispatch(loginActions.setUserConnectionStatus("disconnected"));
      }
      // dispatch(loginActions.setUserConnectionStatus("close"));
      // dispatch(loginActions.setUserConnectionStatus("error"));
    },
    [dispatch]
  );

  useEffect(() => {
    if (userConnection !== null) {
      userConnection.on("open", function (id) {
        console.log("Connection ID:" + id);
        updateUserStatus("connection");
      });

      userConnection.on("connection", function () {
        console.log("User Connected");
      });

      userConnection.on("close", function () {});

      userConnection.on("disconnected", function () {
        console.log("User Disconnected");
        updateUserStatus("disconnected");
      });

      userConnection.on("error", function () {});
    }
  }, [userConnection, updateUserStatus]);

  const connectTarget = function () {
    setTargetConnection(userConnection.connect(target));

    //Messages recieved added to store
    targetConnection.on("data", function (data) {
      dispatch(chatActions.addMessage(data));
    });
  };

  const sendMessages = function (msg) {
    targetConnection.send(msg);
  };

  return {
    connectUser,
    reconnectUser,
    disconnectUser,
    updateUserStatus,
    connectTarget,
    sendMessages,
  };
};

export default usePeerJS;
