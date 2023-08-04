import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart, totalAmount } = useSelector((state) => state.cartSlice);
  console.log(cart);

  return (
    <Row>
      <Col lg={12}>
        <Card className="d-flex flex-column">
          {cart?.length > 0 ? (
            <>
              <p className="p-3">Cart</p>
              {cart.map((product) => (
                <>
                  <Row className="p-3">
                    <Col lg={3}>
                      <Card.Img
                      className="w-100"
                        variant="left"
                        src={product.imageUrl}
                      />
                    </Col>
                    <Col lg={6}>
                      <Card.Title className="my-auto">
                        {product.name}
                      </Card.Title>
                      <Card.Text className="my-auto">
                        Quantity : {product.quantity}
                      </Card.Text>
                    </Col>
                    <Col className="d-flex px-0" lg={3}>
                      <Card.Text className="my-auto">
                        Rs. {product.price}
                      </Card.Text>
                    </Col>
                  </Row>
                  <hr />
                </>
              ))}
              <Row className="p-3">
                <Col className="d-flex justify-content-between" lg={12}>
                  <Card.Text className="my-auto">Total</Card.Text>
                  <Card.Title className="my-auto">Rs.{totalAmount}</Card.Title>
                </Col>
              </Row>
            </>
          ) : (
            <Row className="p-3">
              <Col lg={12}>
                <Card.Title>No Products Found</Card.Title>
              </Col>
            </Row>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default Cart;
