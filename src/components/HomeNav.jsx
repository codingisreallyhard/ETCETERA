import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navi() {
  return (
    <div className="flex justify-end absolute z-10 right-0 font-poppins ">
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="More" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/Gallery">Gallery</NavDropdown.Item>
                  <NavDropdown.Item href="/Contact">Contact</NavDropdown.Item>
                  <NavDropdown.Item href="/">Home</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Navi;
