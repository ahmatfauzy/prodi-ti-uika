import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Accordion.css"

function AccordionComponent() {
  return (
    <Container>
      <Row>
        <Col md={6} className="mb-3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Konten untuk Accordion Item #1.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mt-3">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Konten untuk Accordion Item #2.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        <Col md={6} className="mb-3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #3</Accordion.Header>
              <Accordion.Body>
                Konten untuk Accordion Item #3.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mt-3">
              <Accordion.Header>Accordion Item #4</Accordion.Header>
              <Accordion.Body>
                Konten untuk Accordion Item #4.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default AccordionComponent;
