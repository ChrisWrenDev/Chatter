import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TargetUsername from "./TargetUsername";
import classes from "./Target.module.css";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/login-reducer";

const Target = function () {
  const [targetUsername, setTargetUsername] = useState("");
  const dispatch = useDispatch();

  const targetUsernameHandler = function (event) {
    setTargetUsername(event.target.value);
  };

  const submitFormHandler = function (event) {
    event.preventDefault();

    dispatch(loginActions.setTargetUsername(targetUsername));

    console.log("Target Updated");
  };

  return (
    <Form onSubmit={submitFormHandler}>
      <TargetUsername targetUsernameHandler={targetUsernameHandler} />
      <Button
        className={classes.connect__btn}
        variant="secondary"
        type="submit"
      >
        Connect
      </Button>
    </Form>
  );
};

export default Target;
