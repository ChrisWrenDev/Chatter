import Form from "react-bootstrap/Form";

const TargetUsername = function (props) {
  return (
    <Form.Group className="mb-3" controlId="formTarget">
      <Form.Label className="text-left">Target</Form.Label>
      <Form.Control
        type="text"
        placeholder="Target username"
        onChange={props.targetUsernameHandler}
      />
      <Form.Control.Feedback type="invalid">
        The following target is not logged in.
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default TargetUsername;
