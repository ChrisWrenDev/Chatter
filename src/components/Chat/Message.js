import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import classes from "./Message.module.css";

const Message = function () {
  return (
    <Card>
      <p className={classes.message}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        sollicitudin quam eu fringilla efficitur. Donec turpis nisl,
        sollicitudin vitae auctor sit amet, commodo ac nisl.
      </p>
      <ProgressBar now={60} className={classes.message__timer} />
    </Card>
  );
};

export default Message;
