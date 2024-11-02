// import Container from "react-bootstrap/Container";
import NavBarBoots from "../../components/NavBar/NavBarBoots.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import PrestasiList from "../../components/PrestasiList/PrestasiList.jsx";
import Banner from "../../components/BackgroundComponent/Banner.jsx";
import bannerImage from "../../assets/image/banner.jpg";

function HomePage() {
  return (
    <>
      <NavBarBoots />
      <Banner imageUrl={bannerImage} title="PRESTASI" />
      <PrestasiList />
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1"></div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
