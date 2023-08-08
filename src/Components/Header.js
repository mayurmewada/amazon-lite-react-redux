import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate();

  return (
    <Navbar className="text-light">
      <Container>
        <Link className="text-light navbar-brand me-4" to="/">
            <img
              src="https://bloximages.newyork1.vip.townnews.com/nashvillescene.com/content/tncms/assets/v3/editorial/9/22/922404a8-eff9-51f3-a590-3e75002cf990/6000d9f34fd8b.image.png?crop=771%2C405%2C0%2C3&resize=771%2C405&order=crop%2Cresize"
              width="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            amazon lite
        </Link>
        <Row className="w-100">
          <Col x="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Link
              to="/createnewproduct"
              className="fw-500 btn btn-secondary-dark secondary-color"
              variant="warning"
            >
              Create New Product
            </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
