import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import Welcome from "./welcome";
import BookList from "./BookList";
import horrorBooks from "..//data/horror.json";

function App() {
  return (
    <>
      <main className="d-flex flex-column vh-100">
        <MyNav />

        <Welcome />

        <h1 className="text-center">Libri Horror</h1>
        <BookList className="py-4 g-3" books={horrorBooks} />

        <MyFooter />
      </main>
    </>
  );
}

export default App;
