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
    <div style={{backgroundColor:"beige"}}>
      <div style={{ display: "flex", backgroundColor:"beige",opacity:"0.8" }}>
        <Container>
          <Form className="mt-5">
            <Row className="mt-5">
              <Col md={7} sm={3}>
                <Image style={{border:"groove 3px"}} className={styles.img} src={profile.photo} rounded height="300px" />
              </Col>
              <Col md={5} className="mt-5">
                <div className={styles.personalInf}>
                  <Form.Group as={Row} className="mb-3 d-flex align-items-center" controlId="formPlaintextEmail">
                    <Form.Label column sm="4" style={{ fontWeight: "Bold" }}>
                      Email
                    </Form.Label>
                    <Col style={{borderBottom:"groove", borderRight:"groove"}}>{profile.email}</Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3 d-flex align-items-center" controlId="formPlaintextEmail">
                    <Form.Label style={{ fontWeight: "Bold" }} column sm="4">
                      First Name
                    </Form.Label>
                    <Col style={{borderBottom:"groove", borderRight:"groove"}}>{profile.firstName}</Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3 d-flex align-items-center" controlId="formPlaintextEmail">
                    <Form.Label style={{ fontWeight: "Bold" }} column sm="4">
                      Last Name
                    </Form.Label>
                    <Col style={{borderBottom:"groove", borderRight:"groove"}}>{profile.lastName}</Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3 d-flex align-items-center" controlId="formPlaintextEmail">
                    <Form.Label style={{ fontWeight: "Bold" }} column sm="4">
                      Role
                    </Form.Label>
                    <Col style={{borderBottom:"groove", borderRight:"groove"}}>{profile.role}</Col>
                  </Form.Group>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      <hr/>
      <div style={{backgroundColor:"beige"}}>
        <Row /* style={{position:"relative", left:"450px"}} */>
          <Col md={3} className="mx-auto">
            <Row>
              <Col>
                <h1 style={{color:"red",marginBottom:"50px", marginLeft:"50px"}}>Favourites:</h1>
              </Col>
            </Row>
            <Row>
              <Col style={{ fontSize: "25px" }}>
                <ul>
                  {profile.items.map(item => (
                    <li style={{borderBottom:"groove", borderRight:"groove",backgroundColor:"whitesmoke"}}>
                      <Link className={styles.link} to="/" onClick={() => getWordFav(item)}>
                        {item.title}
                      </Link>

                      <BsTrash
                        className={styles.hover}
                        style={{ marginLeft: "170px", fontSize: "20px" }}
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
    </div>
  )
}

export default Profile
