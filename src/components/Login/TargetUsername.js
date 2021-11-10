import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";

const TargetUsername = function (props) {
  return (
    <Form.Group className="mb-3" controlId="formTarget">
      <FloatingLabel controlId="floatingTarget" label="Target">
        <Form.Control
          type="text"
          name="target"
          value={props.value}
          placeholder="Target username"
          onChange={props.targetUsernameHandler}
        />
      </FloatingLabel>
      <Form.Control.Feedback type={props.error}>
        {props.error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default TargetUsername;
