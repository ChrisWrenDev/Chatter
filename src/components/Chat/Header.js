import Button from "react-bootstrap/Button";
import classes from "./Header.module.css";
import { useContext } from "react";
import PeerContext from "../../context store/peer-context";
import Interval from "../Login/Interval";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../redux store/login-reducer";
import ChatterLogo from "../../assets/chatter-logo__landscape.svg";

const Header = function () {
  const peer = useContext(PeerContext);
  const dispatch = useDispatch();
  const interval = useSelector((state) => state.login.userTimer);

  const intervalHandler = function (event) {
    dispatch(loginActions.setUserTimer(event.target.value));
  };

  const disconnectHandler = function () {
    peer.disconnectTarget();
  };
  return (
    <div className={classes.header}>
      <img
        src={ChatterLogo}
        alt="Chatter Logo"
        className={classes.header__logo}
      />
      <Interval value={interval} intervalHandler={intervalHandler} />
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
