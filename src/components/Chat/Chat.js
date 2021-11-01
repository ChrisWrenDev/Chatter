import Card from "react-bootstrap/Card";
import Header from "./Header";
import MessageList from "./MessageList";
import ChatForm from "./ChatForm";
import classes from "./Chat.module.css";

const Chat = function () {
  return (
    <Card className={classes.chat}>
      <Header />
      <MessageList />
      <ChatForm />
    </Card>
  );
};

export default Chat;
