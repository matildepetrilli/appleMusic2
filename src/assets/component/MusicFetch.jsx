import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const MusicFetch = function () {
  const [Songs, setSong] = useState([]);
  const query = "rock"; 

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

  const NewSong = Songs.slice(0, 6);

  return (
    <>
      <Container className="bg-dark">
        <div className="container-fluid bg-dark">
          <div className="row d-lg-none">
            {NewSong.map((Songs) => (
              <div
                key={Songs.id}
                className="col-6 col-sm-4 col-md-2 text-white mb-4"
              >
                <img
                  src={Songs.album.cover_small}
                  alt={Songs.title}
                  className="radio-img rounded-4 w-100"
                />
                <p className="mt-2">{Songs.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default MusicFetch;
