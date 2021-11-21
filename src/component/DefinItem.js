import { Form, Col, Row, FormGroup } from "react-bootstrap"
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
            <FormGroup as={Row}>
              <Col className=" mx-auto" sm="70%">
                <Form.Control type="text" required name="word" placeholder="Enter a word to define" />
                {/* Form.Control == <input type="text" /> */}
              </Col>
            </FormGroup>
            <FormGroup as={Row}>
              <Col sm="30%">{/* <Button type="submit">Define</Button> */}</Col>
            </FormGroup>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}

export default DefineItem
