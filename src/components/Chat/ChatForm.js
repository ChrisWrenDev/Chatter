import { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./ChatForm.module.css";
import { useState } from "react";
import PeerContext from "../../context store/peer-context";

const ChatForm = function () {
  const [message, setMessage] = useState("");

  const peer = useContext(PeerContext);

  const textInputHandler = function (event) {
    setMessage(event.target.value);
  };

  const submitMessageHandler = function (event) {
    event.preventDefault();
    peer.sendMessage(message);
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
