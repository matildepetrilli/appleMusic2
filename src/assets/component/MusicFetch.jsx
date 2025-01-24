import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const MusicFetch = function () {
  const [songs, setSongs] = useState([]); 
  const query = "pop"; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
        );
        if (response.ok) {
          const data = await response.json();
          setSongs(data.data); 
        } else {
          console.error("Errore recupero dati");
        }
      } catch (error) {
        console.error("ERRORE", error);
      }
    };

    fetchData();
  }, []);

  const newSongs = songs.slice(0, 6); 

  return (
    <Container className="bg-dark">
      <div className="container-fluid bg-dark">
        <div className="row d-sm-flex">
          {newSongs.map((song) => (
            <div
              key={song.id}
              className="col-sm-4 col-md-2 text-white mb-4"
            >
              <img
                src={song.album.cover_small} 
                alt={song.title} 
                className="radio-img rounded-4 w-100"
              />
              <p className="mt-2">{song.title}</p> 
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MusicFetch;