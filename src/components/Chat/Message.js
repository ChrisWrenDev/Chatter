//import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import classes from "./Message.module.css";
import { useSelector, useDispatch } from "react-redux";
import { chatActions } from "../../redux store/chat-reducer";
import { useState, useEffect } from "react";
import { BsFillCircleFill } from "react-icons/bs";

const Message = function ({ id, user, message, interval }) {
  const [duration, setDuration] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const userName = useSelector((state) => state.login.userName);

  const dispatch = useDispatch();

  const type = user === userName ? "user" : "target";

  useEffect(() => {
    if (duration < interval) {
      const timer = setTimeout(() => {
        setDuration((state) => state + 0.1);
        setPercentage((duration / interval) * 100);
      }, 100);

      return () => {
        clearTimeout(timer);
      };
    } else {
      dispatch(chatActions.removeMessage(id));
    }
  }, [duration, interval, id, dispatch]);

  return (
    <div className={classes[`${type}__message`]}>
      <BsFillCircleFill className={classes[`${type}__icon`]} />
      <p className={classes.message__text}>{message}</p>
      <ProgressBar now={percentage} className={classes.message__timer} />
    </div>
  );
};

export default Message;
