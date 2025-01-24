import { Carousel } from "react-bootstrap";

const MusicCarousel = function () {
  return (
    <>
      <Carousel >
        <Carousel.Item className="ms-5">
          
            <h6>NUOVA STAZIONE RADIO</h6>
            <p>Rilassati al resto pensiamo noi. Ascolta Apple Music Chill</p>
            <img src="./src/assets/images/1a.png" alt="immagine radio" />
          
        </Carousel.Item>
        <Carousel.Item className="ms-5" >
          
          <h6>NUOVA STAZIONE RADIO</h6>
            <p>Ecco la nuova casa della musica latina.</p>
            <img src="./src/assets/images/1b.png" alt="immagine radio" />
          
        </Carousel.Item>
        <Carousel.Item className="ms-5">
         
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <img src="./src/assets/images/1c.png" alt="immagine radio" />

        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MusicCarousel;
