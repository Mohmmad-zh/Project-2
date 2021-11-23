import { Form, Col, Row, FormGroup, Button,Stack } from "react-bootstrap"
function DefineItem(props) {
  return (
    <Row>
      <Col md={5} className=" mx-auto mb-5">
        <Form className=" mt-5 " onSubmit={props.getWord} style={{}}>
          <Row>
            <FormGroup as={Row}>
              <Col>
                <Form.Label column md="5"></Form.Label>
              </Col>
            </FormGroup>
            <Stack direction="horizontal" gap={3}>
              <Form.Control className="me-auto" placeholder="Add your item here..." />
              {
                <Button type="submit" variant="secondary">
                  Define
                </Button>
              }
              <div className="vr" />
              <Button variant="outline-danger">Reset</Button>
            </Stack>
            <FormGroup as={Row}>
              <Col sm="30%"></Col>
            </FormGroup>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}

export default DefineItem
