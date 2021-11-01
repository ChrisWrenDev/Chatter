import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./ChatForm.module.css";

const ChatForm = function () {
  return (
    <Form className={classes.chatForm}>
      <Form.Control as="textarea" placeholder="Message..." />
      <Form.Control.Feedback type="invalid">
        Please add text to submit a message
      </Form.Control.Feedback>
      <Button>Submit</Button>
    </Form>
  );
};

export default ChatForm;
