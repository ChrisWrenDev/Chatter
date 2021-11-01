import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TargetName from "./TargetName";
import classes from "./Target.module.css";

const Target = function () {
  return (
    <Form>
      <TargetName />
      <Button
        className={classes.connect__btn}
        variant="secondary"
        type="submit"
      >
        Connect
      </Button>
    </Form>
  );
};

export default Target;
