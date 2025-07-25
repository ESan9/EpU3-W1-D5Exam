import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Nav,
  NavLink,
} from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="mt-auto">
      <Container fluid>
        <Row className="bg-dark text-light text-center">
          <Col>My Library</Col>
        </Row>
        <Row className="bg-dark text-light text-center">
          <Col>© {new Date().getFullYear()} Copyright</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
