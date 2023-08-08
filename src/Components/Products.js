import React from "react";
// import { products } from "../config/productConfig";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { productAddToCart, removeProductFromCart } from "../redux/cartSlice";
import FeatherIcon from "feather-icons-react";

const Products = () => {
  const { products } = useSelector((state) => state.productSlice);
  console.log(products);
  const { cart } = useSelector((state) => state.cartSlice);
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
          <Col className="mb-4" key={product.productId} lg={4}>
            <Card className="h-100">
              <Card.Img
                className="product-card-image"
                variant="top"
                src={product.productImageUrl}
                alt={product.productName}
              />
              <Card.Body>
                <div>
                  <Card.Title className="mb-0">{product.productName}</Card.Title>
                  <Card.Text>{product.productDesc}</Card.Text>
                </div>
                <div>
                  <Card.Title className="mt-3">Rs. {product.productPrice}</Card.Title>
                  {getProductLength(product.productId) >= 1 ? (
                    <div className="quantity-btn">
                      <button
                        onClick={() => handleRemoveProductFromCart(product)}
                        className="quantity-btn-minus"
                      >
                        <FeatherIcon icon="minus" />
                      </button>
                      <span>
                        {cart[getQuantity(product.productId)].quantity}
                      </span>
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
                      className="primary-color"
                    >
                      Add to cart
                    </Button>
                  )}
                </div>
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

export default Products;
