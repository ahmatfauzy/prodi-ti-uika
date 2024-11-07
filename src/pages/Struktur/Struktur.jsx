// import React from 'react'
import NavBarBoots from "../../components/NavBar/NavBarBoots.jsx";
import Banner from "../../components/BackgroundComponent/Banner.jsx";
import Footer from "../../components/Footer/Footer";
import { Container } from "react-bootstrap";
import bannerImage from "../../assets/image/banner.jpg";
import strukturImage from "../../assets/image/STRUKTURORGANISASI.jpeg";

function Struktur() {
  return (
    <>
      <NavBarBoots />
      <Banner
        className="banner"
        imageUrl={bannerImage}
        title="STRUKTUR ORGANISASI"
      />
      <Container className="mt-5 pb-4">
        <img
          src={strukturImage}
          alt="Struktur Organisasi"
          className="img-fluid mb-4"
        />
      </Container>
      <div className="d-flex flex-column ">
        <Footer />
      </div>
    </>
  );
}

export default Struktur;
