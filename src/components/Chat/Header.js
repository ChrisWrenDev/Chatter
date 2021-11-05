import Button from "react-bootstrap/Button";
import classes from "./Header.module.css";
import { useDispatch } from "react-redux";
import { disconnectTarget } from "../../store/connection-actions";

const Header = function () {
  const dispatch = useDispatch();

  const disconnectHandler = function () {
    dispatch(disconnectTarget());
  };
  return (
    <div className={classes.header}>
      <div className={classes.header__logo}>Logo</div>
      <Button
        className={classes.header__btn}
        variant="primary"
        type="submit"
        onClick={disconnectHandler}
      >
        Disconnect
      </Button>
    </div>
  );
};

export default Header;
