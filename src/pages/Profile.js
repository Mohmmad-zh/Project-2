import { Container, Image, Col, Row, Form, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
import styles from "./profile.module.css"
import { BsTrash } from "react-icons/bs"
function Profile(props) {
  const { profile, getWordFav, deleteFavourite } = props
  if (!profile) {
    return (
      <Spinner className={styles.spinner} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <Container>
          <Form className="mt-5">
            <Row className="mt-5">
              <Col md={7} sm={3}>
                <Image className={styles.img} src={profile.photo} rounded height="300px" />
              </Col>
              <Col md={5} className="mt-5">
                <div className={styles.personalInf}>
                  <Form.Group as={Row} className="mb-3 d-flex align-items-center" controlId="formPlaintextEmail">
                    <Form.Label column sm="4" style={{ fontWeight: "Bold" }}>
                      Email
                    </Form.Label>
                    <Col>{profile.email}</Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3 d-flex align-items-center" controlId="formPlaintextEmail">
                    <Form.Label style={{ fontWeight: "Bold" }} column sm="4">
                      First Name
                    </Form.Label>
                    <Col>{profile.firstName}</Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3 d-flex align-items-center" controlId="formPlaintextEmail">
                    <Form.Label style={{ fontWeight: "Bold" }} column sm="4">
                      Last Name
                    </Form.Label>
                    <Col>{profile.lastName}</Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3 d-flex align-items-center" controlId="formPlaintextEmail">
                    <Form.Label style={{ fontWeight: "Bold" }} column sm="4">
                      Role
                    </Form.Label>
                    <Col>{profile.role}</Col>
                  </Form.Group>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      <div>
        <Row /* style={{position:"relative", left:"450px"}} */>
          <Col md={3} className="mx-auto">
            <Row>
              <Col>
                <h1>Favourites:</h1>
              </Col>
            </Row>
            <Row>
              <Col style={{ fontSize: "25px" }}>
                <ul>
                  {profile.items.map(item => (
                    <li>
                      <Link className={styles.link} to="/" onClick={() => getWordFav(item)}>
                        {item.title}
                      </Link>

                      <BsTrash
                        className={styles.hover}
                        style={{ marginLeft: "90px", fontSize: "20px" }}
                        onClick={() => deleteFavourite(item._id)}
                      />
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Profile
