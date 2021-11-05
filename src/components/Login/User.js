import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Username from "./Username";
import Interval from "./Interval";
import classes from "./User.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/login-reducer";
import {
  connectUser,
  disconnectUser,
  reconnectUser,
} from "../../store/connection-actions";

const User = function () {
  const [username, setUsername] = useState("");
  const [interval, setInterval] = useState("");
  const [btnState, setBtnState] = useState("login");

  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.login.userStatus);

  useEffect(() => {
    switch (userStatus) {
      case "":
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
    if (btnState === "login") {
      dispatch(loginActions.setUserName(username));
      dispatch(loginActions.setUserTimer(interval));
      dispatch(connectUser(username));
    } else if (btnState === "logout") {
      dispatch(disconnectUser());
    } else if (btnState === "reconnect") {
      dispatch(reconnectUser());
    }
  };

  return (
    <Form className={classes.login__form}>
      <Username usernameHandler={usernameHandler} />
      <Interval intervalHandler={intervalHandler} />
      <Button
        className={classes[`${btnState}__btn`]}
        variant="primary"
        onClick={submitHandler}
      >
        {btnState}
      </Button>
    </Form>
  );
};

export default User;
