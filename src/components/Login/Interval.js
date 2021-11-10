import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";

const Interval = function (props) {
  return (
    <Form.Group className="mb-3" controlId="formTimeout">
      <FloatingLabel controlId="floatingSelect" label="Timer">
        <Form.Select value={props.value} onChange={props.intervalHandler}>
          <option value="5">5 seconds</option>
          <option value="10">10 seconds</option>
          <option value="15">15 seconds</option>
        </Form.Select>
      </FloatingLabel>
    </Form.Group>
  );
};

export default Interval;
