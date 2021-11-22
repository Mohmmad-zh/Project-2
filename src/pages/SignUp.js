import { Form, Button, Col, Alert, Row } from "react-bootstrap"

// import
function SignUp(props) {
  const { signUp, errorSignUp } = props
  return (
    <Row>
      <Col md={6} className="mx-auto">
        <Form onSubmit={signUp}>
          <Col>{errorSignUp !== null ? <Alert variant="danger">{errorSignUp}</Alert> : null}</Col>
          <Form.Group className="mb-3">
            <Form.Label>First Name:</Form.Label>
            <Col>
              <Form.Control type="text" required autoFocus name="firstName" />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name:</Form.Label>
            <Col>
              <Form.Control type="text" required name="lastName" />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Col>
              <Form.Control type="email" required name="email" />
            </Col>
          </Form.Group>
       
          <Form.Group className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Col>
              <Form.Control type="password" required name="password" />
            </Col>
          </Form.Group>

          {/* <Form.Group className="mb-3">
          <Form.Label >Confirm Password:</Form.Label>
          <Col >
          <Form.Control type="password" required name="password" />
          </Col>
        </Form.Group> */}
   

          <Form.Group className="mb-3">
            <Form.Label>Photo:</Form.Label>
            <Col>
              <Form.Control type="url" name="photo" />
            </Col>
          </Form.Group>

          <Form.Group>
            <Col className="col-md-7 ms-md-auto">
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  )
}

export default SignUp
