import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";
import "../index.css";
function GalleryNavi() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const Mobile = (
    <div className=" relative chicano ">
      <div className="flex justify-start  z-10 left-0 font-poppins text-xl fixed">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/Gallery">Gallery</Nav.Link>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
                <Nav.Link href="/Services">Services</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );

  const itIsDesktop = (
    <>
      <div className="bg-red-900 flex">
        <div>
          <img
            src="../../public/PNG Black on White 500 x 500.png"
            className="fixed  left-0 z-10 w-32 h-32"
          />
        </div>
        <div className=" relative  ">
          <div className=" fixed z-10 right-0 font-poppins text-2xl">
            <Navbar collapseOnSelect expand="lg" variant="dark">
              <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <NavDropdown title="More" id="collasible-nav-dropdown ">
                      <NavDropdown.Item href="/Gallery">
                        Gallery
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/Contact">
                        Contact
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/Services">
                        Services
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/">Home</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );

  return <>{isDesktop ? itIsDesktop : Mobile}</>;
}

export default GalleryNavi;
