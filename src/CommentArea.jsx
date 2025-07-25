import { Component } from "react";
import { Container, Card } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";
const autValue =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjhjZDc4Y2RkZjAwMTU1ZDY3OTYiLCJpYXQiOjE3NTIyMTc4MDYsImV4cCI6MTc1MzQyNzQwNn0.VUjghxtyM9dLds1VTtQPuNkeK8y2cRlkYfbvLEgWGug";

class CommentArea extends Component {
  state = {
    commenti: [],
  };

  getComments = () => {
    fetch(endpoint + this.props.id, {
      headers: { Authorization: autValue },
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Errore nel recupero commenti");
      })
      .then((data) => this.setState({ commenti: data }))
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <Container className="my-5 d-flex justify-content-center">
        <Card
          className="shadow-sm rounded"
          style={{ maxWidth: "800px", width: "100%" }}
        >
          <Card.Body>
            <Card.Title as="h3" className="text-center mb-4">
              Commenti
            </Card.Title>

            <CommentsList commenti={this.state.commenti} />

            <hr className="my-4" />

            <AddComment id={this.props.id} />
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default CommentArea;
