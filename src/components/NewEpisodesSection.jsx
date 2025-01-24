import { useState, useEffect } from "react";
import "../NewEpisodesSection.css";

const NewEpisodesSection = () => {
    const [episodes, setEpisodes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=Ligabue");
                if (!response.ok) {
                    throw new Error("Errore durante il recupero dei dati");
                }
                const data = await response.json();
                setEpisodes(data.data); // Salva la lista di tracce
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEpisodes();
    }, []);

    return (
        <div className="new-episodes-section">
            <h2>Nuovi Episodi Radio</h2>
            {isLoading && <p>Caricamento in corso...</p>}
            {error && <p>Errore: {error}</p>}
            <div className="episodes-grid">
                {!isLoading && !error && episodes.slice(0, 6).map((episode) => (
                    <div key={episode.id} className="episode-card">
                        <img src={episode.album.cover_medium} alt={episode.title} />
                        <div className="episode-info">
                            <h3>{episode.title}</h3>
                            <p>{episode.artist.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewEpisodesSection;
