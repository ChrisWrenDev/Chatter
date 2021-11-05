import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./ChatForm.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../store/connection-actions";

const ChatForm = function () {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.userName);
  const interval = useSelector((state) => state.login.userTimer);

  const textInputHandler = function (event) {
    setMessage(event.target.value);
  };

  const submitMessageHandler = function (event) {
    event.preventDefault();
    dispatch(
      sendMessage({
        user,
        interval,
        message,
      })
    );
  };
  return (
    <Form onSubmit={submitMessageHandler} className={classes.chatForm}>
      <Form.Control
        onChange={textInputHandler}
        as="textarea"
        placeholder="Message..."
      />
      <Form.Control.Feedback type="invalid">
        Please add text to submit a message
      </Form.Control.Feedback>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ChatForm;
