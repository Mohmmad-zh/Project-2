import { Form, Button, Col, Row, Alert } from "react-bootstrap"
import Footer from "../component/Footer"

function Login(props) {
  const { login, errorLogin } = props
  //________________________Login Page_____________________
  return (
    <>
    <div style={{minHeight:"70vh"}}>

      <Row className="mt-5">
        <Col md={6} className="mx-auto">
          <Form onSubmit={login}>
            <Col>{errorLogin !== null ? <Alert variant="danger">{errorLogin}</Alert> : null}</Col>
            <Form.Group as={Row}>
              <Form.Label>Email:</Form.Label>
              <Col>
                <Form.Control type="email" required name="email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="">
              <Form.Label>Password:</Form.Label>
              <Col>
                <Form.Control type="password" required name="password" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="my-5">
              <Col className="col-md-7 ms-md-auto">
                <Button variant="primary" type="submit">
                  Sign In
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
      <Footer/>
    </>
  )
}

export default Login
