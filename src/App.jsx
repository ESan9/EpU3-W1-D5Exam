import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixFooter from "./NetflixFooter";
import NetflixNavbar from "./NetflixNavbar";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <main className="d-flex flex-column vh-100">
        <NetflixNavbar />
        <Welcome />

        <NetflixFooter />
      </main>
    </>
  );
}

export default App;
