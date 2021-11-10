import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";

const Username = function (props) {
  return (
    <Form.Group className="mb-3" controlId="formUsername">
      <FloatingLabel controlId="floatingUsername" label="Username">
        <Form.Control
          type="text"
          name="username"
          value={props.value}
          placeholder="Enter username"
          onChange={props.usernameHandler}
        />
      </FloatingLabel>
      <Form.Control.Feedback type={props.error}>
        {props.error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default Username;
