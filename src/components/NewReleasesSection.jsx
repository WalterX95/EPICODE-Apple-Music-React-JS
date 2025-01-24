import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../NewReleasesSection.css";

const NewReleasesSection = () => {
  const releases = new Array(8).fill({
    title: "Song Placeholder",
    artist: "Artist Placeholder",
  });

  return (
    <Container fluid className="new-releases-section">
      <h3>Nuove uscite</h3>
      <Row>
        {releases.map((release, index) => (
          <Col key={index} md={3} xs={6} className="mb-3">
            <div className="release-card">
              <div className="release-placeholder" />
              <h5>{release.title}</h5>
              <p>{release.artist}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewReleasesSection;
