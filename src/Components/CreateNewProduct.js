import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addNewProduct } from "../redux/productSlice";

const CreateNewProduct = () => {
  const [formData, setFormData] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = (label, value) => {
    setFormData({ ...formData, [label]: value });
  };

  const handleSubmit = () => {
    // setFormData({
    //   ...formData,
    //   ,
    // });
    // console.log(formData);
    dispatch(
      addNewProduct({
        ...formData,
        productId: Math.floor(10000000 + Math.random() * 90000000),
      })
    );
    navigate('/')
  };

  return (
    <div>
      <Row>
        <h4 className="mt-4 text-center">Create New Product</h4>
        <Col className="m-auto mt-3" lg={6}>
          <Card className="d-flex flex-column p-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Name"
                name="productName"
                onChange={(e) => handleForm("productName", e.target.value)}
                // value={form?.productName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Description"
                name="productDesc"
                onChange={(e) => handleForm("productDesc", e.target.value)}
                // value={form?.productName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Image URL"
                name="productImageUrl"
                onChange={(e) => handleForm("productImageUrl", e.target.value)}
                // value={form?.productName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Price (in Rs.)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Product Price"
                name="productPrice"
                onChange={(e) => handleForm("productPrice", Number(e.target.value))}
                // value={form?.productName}
              />
            </Form.Group>
            <Button
              onClick={handleSubmit}
              variant="warning"
              className="primary-color"
              type="submit"
            >
              Submit
            </Button>
          </Card>
        </Col>
        <span className="text-center mt-4">
          <Link to="/"> &lt; Go Back </Link>
        </span>
      </Row>
    </div>
  );
};

export default CreateNewProduct;
