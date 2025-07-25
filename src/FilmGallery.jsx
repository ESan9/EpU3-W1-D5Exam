import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/FilmGallery.css";

const endpoint = "http://www.omdbapi.com/?apikey=78413715&s=";

class FilmGallery extends Component {
  state = {
    films: [],
  };

  getFilms = () => {
    fetch(endpoint + this.props.search)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Errore nel recupero film");
      })
      .then((data) => {
        if (data.Search) {
          this.setState({ films: data.Search });
        } else {
          this.setState({ films: [] });
        }
      })
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <Container
        className="my-4"
        style={{ backgroundColor: "#141414", borderRadius: "6px" }}
      >
        <h5 className="text-white mb-3">{this.props.search}</h5>
        <Row>
          {this.state.films.slice(0, 6).map((film) => (
            <Col key={film.imdbID} xs={6} md={4} lg={2} className="mb-4">
              <img
                className="film-poster img-fluid"
                src={
                  film.Poster !== "N/A"
                    ? film.Poster
                    : "https://placecats.com/300/450"
                }
                alt={film.Title}
                // Qui ti ho messo una semplice gestione errore per l'extra dato che per Cowboy Bebop non trovava una cover l'ho sostituita con placecats
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placecats.com/300/450";
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default FilmGallery;
