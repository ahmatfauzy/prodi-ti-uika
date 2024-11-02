// import Container from "react-bootstrap/Container";
import NavBarBoots from "../../components/NavBar/NavBarBoots.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import PrestasiList from "../../components/PrestasiList/PrestasiList.jsx";
import Banner from "../../components/BackgroundComponent/Banner.jsx";

function HomePage() {
  return (
    <>
      <NavBarBoots />
      <Banner imageUrl="../../assets/image/banner.jpg" title="PRESTASI" />
      <PrestasiList />
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1"></div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
