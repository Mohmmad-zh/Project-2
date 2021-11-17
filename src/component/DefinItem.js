import { Form, Col, Button } from "react-bootstrap"
function DefineItem(props) {
  return (
    <Form className="mt-5" onSubmit={props.getWord}>
      <Form.Label column md="2">
        Word
      </Form.Label>
      <Col md="6">
        <Form.Control type="text" required name="word" />
        {/* Form.Control == <input type="text" /> */}
      </Col>
      <Button type="submit">Define</Button>
    </Form>
  )
}

export default DefineItem
