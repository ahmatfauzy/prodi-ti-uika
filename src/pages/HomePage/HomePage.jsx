import Container from "react-bootstrap/Container";
import NavBarBoots from "../../components/NavBar/NavBarBoots.jsx";
import AccordionBoots from "../../components/Accordion/AccordionBoots.jsx";
// import ButtonBoots from "../../components/button/ButtonBoots.jsx";

function HomePage() {
  return (
    <>
      <NavBarBoots />
      <Container>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia labore
          voluptates debitis nesciunt, suscipit, rerum voluptate accusantium
          libero quo impedit eius, fugit enim hic fugiat assumenda laudantium
          totam architecto saepe?
        </h1>
        {/* <ButtonBoots className="mt-5 dark">Click Me</ButtonBoots> */}
        <AccordionBoots />
      </Container>
    </>
  );
}

export default HomePage;
