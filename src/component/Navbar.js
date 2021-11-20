import { Navbar, Container, Nav, NavDropdown, Col, DropdownButton } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavbarItem(props) {
  const { logout } = props
  return (
    <>
      <Navbar sticky="top" bg="white" expand="lg">
        <Container fluid>
          <Col>
            <Link to="/" className="navbar-brand">
              Home
            </Link>
            {localStorage.UserToken !== undefined ? (
              <Link to="/" className="navbar-brand">
                Favourite
              </Link>
            ) : null}
          </Col>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {localStorage.UserToken === undefined ? (
              <>
                <Nav className="ms-auto my-2 my-lg-0">
                  <Link to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                  <Link to="/login" className="nav-link">
                    Sign In
                  </Link>
                </Nav>
              </>
            ) : (
              <>
                <DropdownButton id="dropdown-button-dark-example2" title="Dropdown button" className="ms">
                  <NavDropdown.Item to="/profile">Profile</NavDropdown.Item>
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
