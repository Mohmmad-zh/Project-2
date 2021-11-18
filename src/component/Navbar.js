import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavbarItem() {
  return (
    <>
      <Navbar sticky="top" bg="white" expand="lg">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            {/* <img
              src="https://www.kindpng.com/picc/m/156-1569093_style-dictionary-logo-dictionary-logo-hd-png-download.png"
              height="30px"
            /> */}
            Home
          </Link>
          <Link to="/" className="navbar-brand">
           
            Favourite
          </Link>
        
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              <Link to="/signup" className="nav-link">Sign Up</Link>
              <Link to="/login" className="nav-link">Sign In</Link>
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            </Nav>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item to="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to="/logout">Log Out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarItem