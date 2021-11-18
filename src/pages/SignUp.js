import { Form, Button, Col, Row } from "react-bootstrap"


// import 
function SignUp(props) {
  const { signUp } = props
  return (
    <div className="ms-4 mt-4">
      <Form onSubmit={signUp}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label md="6">First Name:</Form.Label>
          <Col md="6">
            <Form.Control type="text" required autoFocus name="firstName" />
            
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label md="6">Last Name:</Form.Label>
          <Col md="6">
            <Form.Control type="text" required name="lastName" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label md="6">Email:</Form.Label>
          <Col md="6">
            <Form.Control type="email" required name="email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label md="6">Password:</Form.Label>
          <Col md="6">
            <Form.Control type="password" required name="password" />
          </Col>
        </Form.Group>

        {/* <Form.Group as={Row} className="mb-3">
          <Form.Label md="6">Confirm Password:</Form.Label>
          <Col md="6">
            <Form.Control type="password" required name="CoPassword" />
          </Col>
        </Form.Group> */}

        <Form.Group as={Row} className="mb-3">
          <Form.Label md="6">Photo:</Form.Label>
          <Col md="6">
            <Form.Control type="url" name="photo" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-5">
          <Col md={{ span: 10, offset: 2 }}>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SignUp