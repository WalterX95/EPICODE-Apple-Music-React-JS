import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../NewReleasesSection.css";

const NewReleasesSection = () => {
  const [releases, setReleases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen");
        if (!response.ok) {
          throw new Error("Errore durante il recupero delle nuove uscite");
        }
        const data = await response.json();
        setReleases(data.data.slice(0, 8)); // Ottieni solo 8 elementi
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReleases();
  }, []);

  return (
    <Container fluid className="new-releases-section">
      <h3>Nuove uscite</h3>
      {isLoading && <p>Caricamento in corso...</p>}
      {error && <p>Errore: {error}</p>}
      <Row>
        {!isLoading && !error && releases.map((release, index) => (
          <Col key={release.id} md={3} xs={6} className="mb-3">
            <div className="release-card">
              <img src={release.album.cover_medium} alt={release.title} className="release-image" />
              <h5>{release.title}</h5>
              <p>{release.artist.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewReleasesSection;
