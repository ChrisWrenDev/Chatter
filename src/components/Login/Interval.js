import Form from "react-bootstrap/Form";

const Interval = function () {
  return (
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
  );
};

export default Interval;
