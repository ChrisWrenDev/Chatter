import Button from "react-bootstrap/Button";
import classes from "./Header.module.css";

const Header = function () {
  return (
    <div className={classes.header}>
      <div className={classes.header__logo}>Logo</div>
      <Button className={classes.header__btn} variant="primary" type="submit">
        Disconnect
      </Button>
    </div>
  );
};

export default Header;
