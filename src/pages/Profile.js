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
              <Col md={7}>
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
      <div style={{ display: "flex" }}>
        <Row style={{position:"relative", left:"450px"}}>
          <Container className="ms-5 mt-5">
            <Col md={7} className="ms-5">
            <h1>Favourites:</h1>
              </Col>
              <Col style={{position:"relative", left: "50px" , fontSize: "25px"}}>
            <ul>
              {profile.items.map(item => (
                <li>
                  <Link className={styles.link} to="/" onClick={() => getWordFav(item)}>
                    {item.title}
                  </Link>

                  <BsTrash className={styles.hover}
                    style={{ marginLeft: "90px", fontSize:"20px" }}
                    onClick={() => deleteFavourite(item._id)}
                    />
                </li>
              ))}
            </ul>
              </Col>
          </Container>
        </Row>
      </div>
    </>
  )
}

export default Profile
