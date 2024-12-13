import Container from "react-bootstrap/Container";
import NavBarBoots from "../../components/NavBar/NavBarBoots.jsx";
// import AccordionBoots from "../../components/Accordion/AccordionBoots.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
// import AchievementsSection from "../../components/Achievement/AchievementsSection.jsx";
// import ButtonBoots from "../../components/button/ButtonBoots.jsx";
import BackgroundComponent from "../../components/BackgroundComponent/BackgroundComponentG1.jsx";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection.jsx";
import MarqueeSection from "../../components/MarqueeSection/MarqueeSection.jsx";
import VideoWithText from "../../components/VideoSect/VideoWithText.jsx";

function HomePage() {
  return (
    <>
      <NavBarBoots />
      <HeroSection />
      {/* <AchievementsSection /> */}
      <div className="bg">
        <BackgroundComponent />
      </div>
      <Container>
        <VideoWithText />
      </Container>
      <TestimonialSection />
      <MarqueeSection />

      {/* <Container>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia labore
          voluptates debitis nesciunt, suscipit, rerum voluptate accusantium
          libero quo impedit eius, fugit enim hic fugiat assumenda laudantium
          totam architecto saepe?
        </h1>
        <AccordionBoots />
      </Container> */}
      <div className="d-flex flex-column ">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
