import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cart from "./Components/Cart";
import Home from "./Components/Home";

function App() {
  return (
    <div className="app">
      <Container>
        <Row className="py-3">
          <Col lg={8}>
            <Home />
          </Col>
          <Col lg={4}>
            <Cart />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
