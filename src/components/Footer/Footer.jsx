// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Nav, NavDropdown } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <MDBFooter
      // bgColor="dark"
      className="text-center cuy text-lg-start text-light"
    >
      {/* <Container>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>
      </Container> */}

      <section className="mt-5">
        <MDBContainer className="text-center text-md-start">
          <MDBRow className="mt-3">
            {/* Map Section */}
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.698360563481!2d106.79084767415335!3d-6.559708464123664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c58dd95a6d9b%3A0x188b4e0a219aa125!2sFakultas%20Teknik%20UIKA%20Bogor!5e0!3m2!1sid!2sid!4v1730331827530!5m2!1sid!2sid"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </MDBCol>

            {/* Vertical Menu Section */}
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">Menu</h6>
              <div className="d-flex justify-content-center">
                <Nav className="flex-column footer-nav">
                  <Nav.Link href="/" className="fs-5 text-reset">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/prestasi" className="fs-5 text-reset">
                    Prestasi
                  </Nav.Link>
                  <NavDropdown
                    title="Profile"
                    id="basic-nav-dropdown"
                    className="fs-5 text-reset dropdown-item"
                  >
                    <NavDropdown.Item href="#action/3.1" className="text-reset">
                      Visi & Misi
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="text-reset">
                      Struktur Organisasi
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </div>
            </MDBCol>

            {/* Contact Section */}
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">Kontak</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Kedungbadak, Kota Bogor, Jawa Barat
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                humas@uika-bogor.ac.id
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +62-815-9118-035
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="d-flex justify-content-between align-items-center p-4"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "#f8f9fa",
        }}
      >
        <div className="text-start">
          © 2024 Copyright: 
          <a className="text-reset cp fw-bold" href="https://uika-bogor.ac.id/">
            UIKA Bogor
          </a>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com/pagesuika" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a
            href="https://www.instagram.com/uika_bogor/"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </div>
    </MDBFooter>
  );
}

export default Footer;
