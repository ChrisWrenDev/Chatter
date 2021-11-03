import Form from "react-bootstrap/Form";

const Username = function (props) {
  return (
    <Form.Group className="mb-3" controlId="formUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control
        type="text"
        name="username"
        placeholder="Enter username"
        onChange={props.usernameHandler}
      />
    </Form.Group>
  );
};

export default Username;
