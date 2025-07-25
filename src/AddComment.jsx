import { Component } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";

const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";
const autValue =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjhjZDc4Y2RkZjAwMTU1ZDY3OTYiLCJpYXQiOjE3NTIyMTc4MDYsImV4cCI6MTc1MzQyNzQwNn0.VUjghxtyM9dLds1VTtQPuNkeK8y2cRlkYfbvLEgWGug";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "1",
    elementId: this.props.id,
  };

  submitReview = (e) => {
    e.preventDefault();
    fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: autValue,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => {
        if (response.ok) {
          alert("🎉 Recensione salvata!");
          this.setState({ comment: "", rate: "1" });
        } else {
          throw new Error("Errore nel salvataggio recensione");
        }
      })
      .catch((err) => {
        console.error("Errore:", err);
        alert("❌ Recensione NON salvata");
      });
  };

  render() {
    return (
      <Container className="d-flex justify-content-center mt-5">
        <Card
          className="shadow-sm rounded"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <Card.Body>
            <Card.Title className="text-center mb-4">
              Hai qualche feedback?
            </Card.Title>
            <Form onSubmit={this.submitReview}>
              <Row className="gx-3 gy-4">
                <Col xs={12}>
                  <Form.Group controlId="comment">
                    <Form.Label>Commento</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Descrivi perché ti è piaciuto"
                      value={this.state.comment}
                      onChange={(e) =>
                        this.setState({ comment: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={4}>
                  <Form.Group controlId="rate">
                    <Form.Label>Voto</Form.Label>
                    <Form.Select
                      value={this.state.rate}
                      onChange={(e) => this.setState({ rate: e.target.value })}
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n}>{n}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col
                  xs={12}
                  sm={8}
                  className="d-flex align-items-end justify-content-end"
                >
                  <Button variant="success" type="submit">
                    SALVA
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default AddComment;
