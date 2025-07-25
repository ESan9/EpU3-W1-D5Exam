import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./NetflixNavbar";
import NetflixFooter from "./NetflixFooter";
import NetflixNavbar from "./NetflixNavbar";

function App() {
  return (
    <>
      <main className="d-flex flex-column vh-100">
        <NetflixNavbar />

        <NetflixFooter />
      </main>
    </>
  );
}

export default App;
