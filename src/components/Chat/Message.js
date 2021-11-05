import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import classes from "./Message.module.css";
import { useSelector, useDispatch } from "react-redux";
import { chatActions } from "../../store/chat-reducer";
import { useState, useEffect } from "react";

const Message = function ({ id, user, message, interval }) {
  const [duration, setDuration] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const userName = useSelector((state) => state.login.userName);
  const dispatch = useDispatch();

  const type = user === userName ? "USER" : "TARGET";

  useEffect(() => {
    if (duration < interval) {
      setTimeout(() => {
        setDuration((state) => state + 0.5);
        setPercentage((duration / interval) * 100);
      }, 500);
    } else {
      dispatch(chatActions.removeMessage(id));
    }
  }, [duration, interval, id, dispatch]);

  return (
    <Card className={classes.message}>
      <p>{type}</p>
      <p>{duration}</p>
      <p className={classes.message__text}>{message}</p>
      <ProgressBar now={percentage} className={classes.message__timer} />
    </Card>
  );
};

export default Message;
