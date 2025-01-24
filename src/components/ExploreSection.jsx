import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../ExploreSection.css";

const ExploreSection = () => {
  const exploreItems = [
    "Esplora per genere",
    "Decenni",
    "Attività e stati d'animo",
    "Worldwide",
    "Classifiche",
    "Audio spaziale",
    "Video musicali",
    "Nuovi artisti",
    "Hit del passato",
  ];

  return (
    <Container fluid className="explore-section">
      <h3>Altro da esplorare</h3>
      <Row>
        {exploreItems.map((item, index) => (
          <Col key={index} md={3} xs={6} className="mb-3">
            <Button variant="dark" className="explore-button">
              {item}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExploreSection;
