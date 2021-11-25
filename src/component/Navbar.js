import { Navbar, Container, Nav, NavDropdown, Col, DropdownButton } from "react-bootstrap"
import { Link } from "react-router-dom"
function NavbarItem(props) {
  const { logout } = props
  return (
    <>
    //_________________Navbar Contents_________________
      <Navbar sticky="top" bg="black" expand="lg">
        <Container fluid>
          <Col>
            <Link to="/" className="navbar-brand" style={{ color: "white" }}>
              <Navbar.Brand href>
                <img
                  style={{ filter: "invert(1)" }}
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffreevector.co%2Fwp-content%2Fuploads%2F2009%2F12%2F67275-3d-dictionary.png&f=1&nofb=1"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              Home
            </Link>
          </Col>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {localStorage.UserToken === undefined ? (
              <>
                <Nav className="ms-auto my-2 my-lg-0">
                  <Link style={{ color: "white" }} to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                  <Link style={{ color: "white" }} to="/login" className="nav-link">
                    Sign In
                  </Link>
                </Nav>
              </>
            ) : (
              <>
                <DropdownButton style={{ color: "black" }} id="dropdown-button-dark-example2" title="Account">
                  <Link to="/profile" className="dropdown-item">
                    Profile
                  </Link>

                  <NavDropdown.Divider />
                  <NavDropdown.Item to="/logout" onClick={logout}>
                    Log Out
                  </NavDropdown.Item>
                </DropdownButton>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default NavbarItem
