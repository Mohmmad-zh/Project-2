import { Container, Image, Col, Row, Form, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
import styles from "./profile.module.css"
function Profile(props) {
  const { profile, getWordFav } = props
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
              <p>{profile.email}</p>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              First Name
            </Form.Label>
            <Col>
              <p>{profile.firstName}</p>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Last Name
            </Form.Label>
            <Col>
              <p>{profile.lastName}</p>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Role
            </Form.Label>
            <Col>
              <p>{profile.role}</p>
            </Col>
          </Form.Group>
        </Container>
      </Form>
      <h1>Favourites:</h1>

      <ul>
        {profile.items.map(item => (
          <li>
            <Link className={styles.link} to="/" onClick={() => getWordFav(item.title)}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Profile
