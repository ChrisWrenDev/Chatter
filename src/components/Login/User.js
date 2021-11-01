import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Username from "./Username";
import Interval from "./Interval";
import classes from "./User.module.css";

const User = function () {
  return (
    <Form className={classes.login__form}>
      <Username />
      <Interval />
      <Button className={classes.login__btn} variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default User;
