import { Navbar, Container, Nav, NavDropdown, Col, DropdownButton } from "react-bootstrap"
import { Link } from "react-router-dom"
function NavbarItem(props) {
  const { logout , refreshPage} = props
  return (
    <>
      <Navbar sticky="top" bg="white" expand="lg">
        <Container fluid>
          <Col>
            {/* {localStorage.UserToken !== undefined ? ( */}
            <Link to="/" className="navbar-brand">
              Home
            </Link>
            {/* ) : null} */}
          </Col>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {localStorage.UserToken === undefined ? (
              <>
                <Nav className="ms-auto my-2 my-lg-0">
                  <Link to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                  <Link to="/login" className="nav-link" >
                    Sign In
                  </Link>
                </Nav>
              </>
            ) : (
              <>
                <DropdownButton id="dropdown-button-dark-example2" title="Dropdown button">
                  
                    <Link to="/profile" className="dropdown-item" onClick={refreshPage} >
                      {" "}
                      Profile{" "}
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
