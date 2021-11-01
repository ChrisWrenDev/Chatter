import Form from "react-bootstrap/Form";

const Username = function () {
  return (
    <Form.Group className="mb-3" controlId="formUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter username" />
    </Form.Group>
  );
};

export default Username;
