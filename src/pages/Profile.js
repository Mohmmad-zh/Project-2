import { Container, Image, Col, Row, Form, Spinner } from "react-bootstrap"
import styles from "./profile.module.css"
function Profile(props) {
  const { profile } = props
  if (!profile) {
    return (
      <Spinner className={styles.spinner} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }
  return (
    <>
      <Form>
        <Container>
          <Col>
            {/* //  ? {"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fote.org.uk%2Fwp-content%2Fuploads%2F2017%2F03%2Fprofile-icon.png&f=1&nofb=1" */}
            <Image src={profile.photo} rounded height="300px" />
          </Col>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col>
              <div>{profile.email}</div>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              First Name
            </Form.Label>
            <Col>
              <div>{profile.firstName}</div>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Last Name
            </Form.Label>
            <Col>
              <div>{profile.lastName}</div>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Role
            </Form.Label>
            <Col>
              <div>{profile.role}</div>
            </Col>
          </Form.Group>
        </Container>
      </Form>
    </>
  )
}

export default Profile
