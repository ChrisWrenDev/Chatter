import Card from "react-bootstrap/Card";
import classes from "./Login.module.css";
import User from "./User";
import Target from "./Target";

const Login = function () {
  return (
    <Card className={classes.form}>
      <User />
      <Target />
    </Card>
  );
};

export default Login;
