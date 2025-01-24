
import { Container } from "react-bootstrap";
import MusicFetch from "./MusicFetch";

const NewCardMusic = () => {
  return (
    <Container fluid className="bg-dark text-white">      
      <MusicFetch songKey="eminem" />
    </Container>
  );
};

export default NewCardMusic;