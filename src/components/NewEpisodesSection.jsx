import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../NewEpisodesSection.css";

const NewEpisodesSection = () => {
  const episodes = [
    { title: "Prólogo con Abuelo", image: "/path-to-image-1.jpg" },
    { title: "The Wanderer", image: "/path-to-image-2.jpg" },
    { title: "Michael Bublé & Carly Pearce", image: "/path-to-image-3.jpg" },
  ];

  return (
    <Container fluid className="new-episodes-section">
      <h3>Nuovi episodi radio</h3>
      <Row>
        {episodes.map((episode, index) => (
          <Col key={index} md={4} xs={12} className="mb-3">
            <Card>
              <Card.Img variant="top" src={episode.image} />
              <Card.Body>
                <Card.Title>{episode.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewEpisodesSection;
