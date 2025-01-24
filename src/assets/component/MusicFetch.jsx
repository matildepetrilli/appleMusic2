import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const MusicFetch = function () {
  const [Song, setSong] = useState([]);
  const query = "rock"; // Puoi cambiare questa stringa con la tua ricerca dinamica

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
        );
        if (response.ok) {
          const data = await response.json();
          setSong(data.data);
        } else {
          console.error("Errore recupero dati");
        }
      } catch (error) {
        console.error("ERRORE", error);
      }
    };

    fetchData();
  }, [query]);

  const NewSong = Song.slice(0, 6);

  return (
    <>
      <Container className="bg-dark">
        <div className="container-fluid bg-dark">
          <div className="row d-lg-none">
            {NewSong.map((result) => (
              <div
                key={result.id}
                className="col-6 col-sm-4 col-md-2 text-white mb-4"
              >
                <img
                  src={result.album.cover_small}
                  alt={result.title}
                  className="radio-img rounded-4 w-100"
                />
                <p className="mt-2">{result.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default MusicFetch;
