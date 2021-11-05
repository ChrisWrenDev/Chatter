import Message from "./Message";
import classes from "./MessageList.module.css";
import { useSelector } from "react-redux";

const MessageList = function () {
  const messages = useSelector((state) => state.chat.messages);
  return (
    <div className={classes.messages__container}>
      <div className={classes.messages__feed}>
        {messages.map((msg) => (
          <Message
            key={msg.id}
            id={msg.id}
            user={msg.user}
            message={msg.message}
            interval={msg.interval}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
