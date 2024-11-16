import NavBarBoots from "../../components/NavBar/NavBarBoots.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import PrestasiList from "../../components/PrestasiList/PrestasiList.jsx";
import Banner from "../../components/BackgroundComponent/Banner.jsx";
import bannerImage from "../../assets/image/banner.jpg";
import { Container } from "react-bootstrap";
import "./PrestasiPage.css";

function PrestasiPage() {
  return (
    <>
      <NavBarBoots />
      <Banner imageUrl={bannerImage} title="PRESTASI" />

      <Container >
        <div className="prestasi-list-container">
          <PrestasiList />
        </div>
      </Container>

      <div className="d-flex flex-column">
        <div className="flex-grow-1"></div>
        <Footer />
      </div>
    </>
  );
}

export default PrestasiPage;
