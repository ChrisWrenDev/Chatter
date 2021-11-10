import { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Username from "./Username";
import Interval from "./Interval";
import classes from "./User.module.css";
import { useSelector } from "react-redux";
import PeerContext from "../../context store/peer-context";

const User = function () {
  const [username, setUsername] = useState("");
  const [interval, setInterval] = useState("");
  const [btnState, setBtnState] = useState("login");
  const [usernameError, setUsernameError] = useState("");

  const userName = useSelector((state) => state.login.userName);
  const userStatus = useSelector((state) => state.login.userStatus);
  const userTimer = useSelector((state) => state.login.userTimer);

  const peer = useContext(PeerContext);

  useEffect(() => {
    if (userName !== "") {
      setUsername(userName);
    }
  }, [userName]);

  useEffect(() => {
    if (userTimer !== "") {
      setInterval(userTimer);
    }
  }, [userTimer]);

  useEffect(() => {
    if (userStatus === "open") {
      setUsernameError("connected");
    } else {
      setUsernameError(userStatus);
    }
  }, [userStatus]);

  useEffect(() => {
    switch (userStatus) {
      case "":
      case "close":
      case "error":
        setBtnState("login");
        break;
      case "open":
      case "connection":
        setBtnState("logout");
        break;
      case "disconnected":
        setBtnState("reconnect");
        break;
      default:
    }
  }, [userStatus]);

  const usernameHandler = function (event) {
    setUsername(event.target.value);
  };

  const intervalHandler = function (event) {
    setInterval(event.target.value);
  };

  const submitHandler = function (event) {
    event.preventDefault();

    if (username === "") {
      setUsernameError("Please enter username");
      return;
    }

    if (btnState === "login") {
      peer.connectUser({ username, interval });
    } else if (btnState === "logout") {
      peer.disconnectUser();
    } else if (btnState === "reconnect") {
      peer.reconnectUser();
    }
  };

  return (
    <Form onSubmit={submitHandler} className={classes.login__form}>
      <Username
        value={username}
        error={usernameError}
        usernameHandler={usernameHandler}
      />
      <Interval value={interval} intervalHandler={intervalHandler} />
      <Button
        className={classes[`${btnState}__btn`]}
        variant="primary"
        type="submit"
      >
        {btnState}
      </Button>
    </Form>
  );
};

export default User;
