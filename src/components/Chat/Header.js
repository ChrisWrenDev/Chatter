import Button from "react-bootstrap/Button";
import classes from "./Header.module.css";
import { useContext } from "react";
import PeerContext from "../../context store/peer-context";

const Header = function () {
  const peer = useContext(PeerContext);

  const disconnectHandler = function () {
    peer.disconnectTarget();
  };
  return (
    <div className={classes.header}>
      <div className={classes.header__logo}>Logo</div>
      <Button
        className={classes.header__btn}
        variant="primary"
        type="button"
        onClick={disconnectHandler}
      >
        Disconnect
      </Button>
    </div>
  );
};

export default Header;
