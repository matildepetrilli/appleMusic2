import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MusicNavbar from "./assets/component/MusicNavbar";
import MusicFooter from "./assets/component/MusicFooter";
import MusicCarousel from "./assets/component/MusicCarousel";
import MusicCard from "./assets/component/MusicCard";
import MusicFetch from "./assets/component/MusicFetch";

function App() {
  return (
    <>
      <MusicNavbar />
      <h2 className="ms-3">Novità:</h2>
      <MusicCarousel />
      <h4 className="my-3 ms-3">
        Nuovi episodi radio <i className="bi bi-chevron-right"></i>
      </h4>
      <MusicCard />
      <h4>Nuove uscite <i className="bi bi-chevron-right"> </i> </h4>
      <MusicFetch/>
      <MusicFooter />
    </>
  );
}

export default App;
