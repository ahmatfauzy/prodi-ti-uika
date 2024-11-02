// import React from 'react'
import NavBarBoots from "../../components/NavBar/NavBarBoots.jsx";
import Banner from "../../components/BackgroundComponent/Banner.jsx";
import PstiInfo from "../../components/Profile/PstiInfo";
// import AccordionComponent from "../../components/Accordion/AccordionBoots";
import Footer from "../../components/Footer/Footer";
import { Container } from "react-bootstrap";
import "./VisiMisiPage.css";

function VisiMisiPage() {
  return (
    <>
      <NavBarBoots />
      <Banner
        className="banner"
        imageUrl="/public/image/banner.jpg"
        title="VISI, MISI & TUJUAN"
      />
      <Container className="mt-5">
        <PstiInfo />
      </Container>
      {/* <AccordionComponent /> */}
      <Footer className="foot" />
    </>
  );
}

export default VisiMisiPage;
