import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/image/FTS.png";
import "./NavBar.css";

function NavBarBoots() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`navbar-fixed ${isScrolled ? "navbar-scrolled" : ""}`}
      expand="lg"
      style={{ padding: "1rem 0" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Logo" width="60" height="auto" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="fs-5">
              Home
            </Nav.Link>
            <Nav.Link href="/prestasi" className="fs-5">
              Prestasi
            </Nav.Link>
            <NavDropdown
              title="Profile"
              id="basic-nav-dropdown"
              className="fs-5 dropdown-item"
            >
              <NavDropdown.Item href="/visi-misi" className="dropdown mt-1">
                Visi & Misi
              </NavDropdown.Item>
              <NavDropdown.Item href="/struktur" className="dropdown">
                Struktur Organisasi
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBoots;
