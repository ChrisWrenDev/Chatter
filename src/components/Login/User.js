import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Username from "./Username";
import Interval from "./Interval";
import classes from "./User.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/login-reducer";
import usePeerJS from "../../hooks/use-peer";

const User = function () {
  const [username, setUsername] = useState("");
  const [interval, setInterval] = useState("");

  const dispatch = useDispatch();
  let userStatus = useSelector((state) => state.login.userConnectionStatus);

  const { connectUser, disconnectUser } = usePeerJS();

  const usernameHandler = function (event) {
    setUsername(event.target.value);
  };

  const intervalHandler = function (event) {
    setInterval(event.target.value);
  };

  const formSubmitHandler = function (event) {
    event.preventDefault();
  };

  const loginHandler = function (event) {
    dispatch(loginActions.setUserName(username));
    dispatch(loginActions.setUserTimer(interval));

    connectUser();
  };

  const logoutHandler = function (event) {
    disconnectUser();
  };

  const loginBtn = (
    <Button
      onClick={loginHandler}
      className={classes.login__btn}
      variant="primary"
      type="submit"
    >
      Login
    </Button>
  );

  const logoutBtn = (
    <Button
      onClick={logoutHandler}
      className={classes.logout__btn}
      variant="primary"
      type="submit"
    >
      Logout
    </Button>
  );

  return (
    <Form onSubmit={formSubmitHandler} className={classes.login__form}>
      <Username usernameHandler={usernameHandler} />
      <Interval intervalHandler={intervalHandler} />
      {userStatus !== "connection" ? loginBtn : logoutBtn}
    </Form>
  );
};

export default User;
