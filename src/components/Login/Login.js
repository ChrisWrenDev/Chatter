import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import classes from "./Login.module.css";
import User from "./User";
import Target from "./Target";
import ChatterLogo from "../../assets/chatter-logo__portrait.svg";

const Login = function () {
  return (
    <Fragment>
      <img
        src={ChatterLogo}
        alt="Chatter Logo"
        className={classes.login__logo}
      />
      <Card className={classes.login__form}>
        <User />
        <Target />
      </Card>
    </Fragment>
  );
};

export default Login;
