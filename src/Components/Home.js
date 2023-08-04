import React from "react";
import { products } from "../config/productConfig";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { productAddToCart, removeProductFromCart } from "../redux/cartSlice";
import FeatherIcon from "feather-icons-react";

const Home = () => {
  const cart = useSelector((state) => state.cartSlice.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(productAddToCart(product));
  };

  const handleRemoveProductFromCart = (product) => {
    dispatch(removeProductFromCart(product));
  };

  const getQuantity = (i) => cart.findIndex((item) => item.productId === i);
  const getProductLength = (productId) =>
    cart.filter((item) => item.productId === productId).length;

  return (
    <Row>
      {products.map((product) => {
        // console.log(product);
        return (
          <Col key={product.productId} lg={4}>
            <Card>
              <Card.Img
                className="product-card-image"
                variant="top"
                src={product.imageUrl}
                alt={product.name}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Title>Rs. {product.price}</Card.Title>
                {getProductLength(product.productId) >= 1 ? (
                  <div className="quantity-btn">
                    <button
                      onClick={() => handleRemoveProductFromCart(product)}
                      className="quantity-btn-minus"
                    >
                      <FeatherIcon icon="minus" />
                    </button>
                    <span>{cart[getQuantity(product.productId)].quantity}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="quantity-btn-plus"
                    >
                      <FeatherIcon icon="plus" />
                    </button>
                  </div>
                ) : (
                  <Button
                    onClick={() => handleAddToCart(product)}
                    variant="warning"
                  >
                    Add to cart
                  </Button>
                )}
                {/* <div className="quantity-btn">
                  <button className="quantity-btn-minus">
                    <FeatherIcon icon="minus" />
                  </button>
                  <span>0</span>
                  <button className="quantity-btn-plus">
                    <FeatherIcon icon="plus" />
                  </button>
                </div>
                <Button
                  onClick={() => handleAddToCart(product)}
                  variant="warning"
                >
                  Add to cart
                </Button> */}
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Home;
