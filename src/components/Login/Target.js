import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TargetUsername from "./TargetUsername";
import classes from "./Target.module.css";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/login-reducer";
import { connectTarget } from "../../store/connection-actions";

const Target = function () {
  const [targetUsername, setTargetUsername] = useState("");
  const userStatus = useSelector((state) => state.login.userStatus);
  const dispatch = useDispatch();

  const targetUsernameHandler = function (event) {
    setTargetUsername(event.target.value);
  };

  const submitHandler = function (event) {
    dispatch(loginActions.setTargetUsername(targetUsername));
    dispatch(connectTarget(targetUsername));
  };

  const disableBtn = userStatus !== "connection";

  return (
    <Form>
      <TargetUsername targetUsernameHandler={targetUsernameHandler} />
      <Button
        className={classes.connect__btn}
        variant="secondary"
        disabled={disableBtn}
        onClick={submitHandler}
      >
        Connect
      </Button>
    </Form>
  );
};

export default Target;
