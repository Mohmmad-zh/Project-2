import { Form, Button, Col, Row } from "react-bootstrap"

function Login(props) {
    const {login} = props
  return (
    <>
      <div className="ms-4 mt-4">
        <Form onSubmit={login}>
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

          <Form.Group as={Row} className="my-5">
            <Col md={{ span: 10, offset: 2 }}>
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    
    </>
  )
}

export default Login
