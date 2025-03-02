import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../HeroSection.css";

const HeroSection = () => {
  return (
    <Container fluid className="hero-section">
      <Row>
        <Col md={6} xs={12} className="hero-item">
          <div className="hero-content">
            <h5>NUOVA STAZIONE RADIO</h5>
            <h2>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</h2>
          </div>
          <img
            src="../src/assets/1a.png"
            alt="Apple Music Chill"
            className="hero-image"
          />
        </Col>
        <Col md={6} xs={12} className="hero-item">
          <div className="hero-content">
            <h5>NUOVA STAZIONE RADIO</h5>
            <h2>Ecco la nuova casa <br/> della musica latina</h2>
          </div>
          <img
            src="../src/assets/1b.png"
            alt="Música Uno"
            className="hero-image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
