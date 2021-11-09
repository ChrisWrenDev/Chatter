import { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../redux store/login-reducer";
import { chatActions } from "../redux store/chat-reducer";
import Peer from "peerjs";

const PeerContext = createContext({
  userConnection: null,
  targetConnection: null,
  connectUser: () => {},
  reconnectUser: () => {},
  disconnectUser: () => {},
  connectTarget: () => {},
  disconnectTarget: () => {},
});

export const PeerProvider = function (props) {
  const [userConn, setUserConn] = useState(null);
  const [targetConn, setTargetConn] = useState(null);
  const [connections, setConnection] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.userName);
  const interval = useSelector((state) => state.login.userTimer);

  const connectUserHandler = (username, interval) => {
    setUserConn(new Peer(username));

    dispatch(loginActions.setUserName(username));
    dispatch(loginActions.setUserTimer(interval));
  };
  const reconnectUserHander = () => {
    userConn.reconnect();
  };
  const disconnectUserHandler = () => {
    userConn.destroy();
  };

  useEffect(() => {
    if (userConn === null) return;
    userConn.on("open", function (id) {
      dispatch(loginActions.setUserStatus("open"));
    });

    userConn.on("connection", function (conn) {
      console.log(conn);
      setConnection((prevConnections) => [...prevConnections, conn]);
    });

    userConn.on("close", function () {
      dispatch(loginActions.setUserStatus("close"));
    });

    userConn.on("disconnected", function () {
      dispatch(loginActions.setUserStatus("disconnected"));
    });

    userConn.on("error", function () {
      dispatch(loginActions.setUserStatus("error"));
    });
  }, [userConn, dispatch]);

  const connectTargetHandler = (target) => {
    loginActions.setTargetUsername(target);
    let connIndex = connections.findIndex((conn) => conn.peer === target);
    console.log(connIndex);
    if (connIndex !== -1) {
      setTargetConn(connections[connIndex]);
      dispatch(loginActions.setTargetStatus("connection"));
    } else {
      setTargetConn(userConn.connect(target));
    }
  };
  const disconnectTargetHandler = () => {
    targetConn.close();
  };

  useEffect(() => {
    if (targetConn === null) return;
    targetConn.on("data", function (data) {
      console.log("Message Recieved");
      dispatch(chatActions.addMessage(data));
    });

    targetConn.on("open", function () {
      dispatch(loginActions.setTargetStatus("connection"));
    });

    targetConn.on("close", function () {
      dispatch(loginActions.setTargetStatus("close"));
    });

    targetConn.on("error", function (err) {
      dispatch(loginActions.setTargetStatus("error"));
    });
  }, [targetConn, dispatch]);

  const sendMessageHandler = function (message) {
    targetConn.send({
      user,
      interval,
      message,
    });
    dispatch(chatActions.addMessage({ message, interval }));
    console.log("Message Sent: " + message);
  };

  return (
    <PeerContext.Provider
      value={{
        userConnection: userConn,
        targetConnection: targetConn,
        connectUser: connectUserHandler,
        reconnectUser: reconnectUserHander,
        disconnectUser: disconnectUserHandler,
        connectTarget: connectTargetHandler,
        disconnectTarget: disconnectTargetHandler,
        sendMessage: sendMessageHandler,
      }}
    >
      {props.children}
    </PeerContext.Provider>
  );
};

export default PeerContext;
