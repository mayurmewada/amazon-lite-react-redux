import React from "react";
import { Col, Row } from "react-bootstrap";
import Products from "./Products";
import Cart from "./Cart";

const main = () => {
  return (
    <Row className="py-3">
      <Col lg={8}>
        <Products />
      </Col>
      <Col lg={4}>
        <Cart />
      </Col>
    </Row>
  );
};

export default main;
