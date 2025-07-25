import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixFooter from "./NetflixFooter";
import NetflixNavbar from "./NetflixNavbar";
import Welcome from "./Welcome";
import FilmGallery from "./FilmGallery";

function App() {
  return (
    <>
      <main className="d-flex flex-column">
        <NetflixNavbar />
        <Welcome />
        <FilmGallery search="Star Wars" />
        <FilmGallery search="Lord of The Rings" />
        <FilmGallery search="Cowboy Bebop" />
        <NetflixFooter />
      </main>
    </>
  );
}

export default App;
