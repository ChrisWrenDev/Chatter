import Message from "./Message";
import classes from "./MessageList.module.css";

const MessageList = function () {
  return (
    <div className={classes.messages__container}>
      <div className={classes.messages__feed}>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
};

export default MessageList;
