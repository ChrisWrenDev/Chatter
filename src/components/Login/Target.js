import { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TargetUsername from "./TargetUsername";
import classes from "./Target.module.css";
import PeerContext from "../../context store/peer-context";
import { useSelector } from "react-redux";

const Target = function () {
  const [targetUsername, setTargetUsername] = useState("");

  const targetName = useSelector((state) => state.login.targetName);

  useEffect(() => {
    if (targetName !== "") {
      setTargetUsername(targetName);
    }
  }, [targetName]);

  const peer = useContext(PeerContext);

  const targetUsernameHandler = function (event) {
    setTargetUsername(event.target.value);
  };

  const submitHandler = function (event) {
    event.preventDefault();
    peer.connectTarget(targetUsername);
  };

  return (
    <Form onSubmit={submitHandler}>
      <TargetUsername
        value={targetUsername}
        targetUsernameHandler={targetUsernameHandler}
      />
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
