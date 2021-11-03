import Form from "react-bootstrap/Form";

const Interval = function (props) {
  return (
    <Form.Group className="mb-3" controlId="formTimeout">
      <Form.Label className="text-left">Clear Message</Form.Label>
      <Form.Select onChange={props.intervalHandler}>
        <option>Interval Time</option>
        <option value="5">5 seconds</option>
        <option value="10">10 seconds</option>
        <option value="15">15 seconds</option>
      </Form.Select>
    </Form.Group>
  );
};

export default Interval;
