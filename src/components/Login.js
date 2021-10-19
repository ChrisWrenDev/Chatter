import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from "./Login.module.css";

const Login = function () {
  return (
    <div className={classes.form}>
      <Card className={classes.form__card}>
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTimeout">
            <Form.Label className="text-left">Clear Message</Form.Label>
            <Form.Select>
              <option value="" disabled selected>
                Interval Time
              </option>
              <option>5 seconds</option>
              <option>10 seconds</option>
              <option>15 seconds</option>
            </Form.Select>
          </Form.Group>
          <Button
            className={classes.login__btn}
            variant="primary"
            type="submit"
          >
            Login
          </Button>
        </Form>

        <Form>
          <Form.Group className="mb-3" controlId="formTarget">
            <Form.Label className="text-left">Target</Form.Label>
            <Form.Control type="text" placeholder="Target username" />
            <Form.Control.Feedback type="invalid">
              The following target is not logged in.
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            className={classes.connect__btn}
            variant="secondary"
            type="submit"
          >
            Conect
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
