import { Form, Col, Row, FormGroup, Button, Stack } from "react-bootstrap"
function DefineItem(props) {
  return (
    <Row>
      <Col md={5} className=" mx-auto mb-5">
        <Form className=" mt-5 " onSubmit={props.getWord} >
          <Stack direction="horizontal" gap={3}>
            <Form.Control className="me-auto" name="word" placeholder="Add your word here..." />
            {
              <Button type="submit" variant="outline-secondary">
                Define
              </Button>
            }
            <div className="vr" />
            <Button variant="outline-danger">Reset</Button>
          </Stack>
        </Form>
      </Col>
    </Row>
  )
}

export default DefineItem
