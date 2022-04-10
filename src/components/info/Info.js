import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import { QuantityButton } from "../quantityButton/QuantityButton";

export const Info = () => {
  return (
    <div
      className="info "
      style={{
        marginTop: "120px",
      }}
    >
      <Container>
        <div
          className="fw-bold"
          style={{ fontSize: "14px", color: "hsl(26, 100%, 55%)" }}
        >
          SNEAKER COMPANY
        </div>
        <div
          className="fw-bold mt-3"
          style={{ fontSize: "42px", lineHeight: "50px" }}
        >
          Fall Limited Edition Sneakers
        </div>
        <div className="mt-4" style={{ color: "grey", fontSize: "16px" }}>
          information informationinformnformationinformation information
          information information information information information
          information information information information
        </div>
        <div className="fw-bolder fs-4 mt-3 d-flex">
          $125.00
          <Button
            size="sm"
            className="ms-2 fw-bold"
            style={{
              backgroundColor: "hsl(25, 100%, 94%)",
              borderColor: "white",
              color: "hsl(26, 100%, 55%)",
            }}
          >
            50%
          </Button>
        </div>

        <div
          className="fw-bold mt-1"
          style={{
            color: "grey",
            textDecoration: "line-through",
            fontSize: "16px",
          }}
        >
          $250
        </div>

        <div className="d-flex" style={{ marginTop: "38px" }}>
          <Col md="4">
            <QuantityButton />
          </Col>

          <Col md="8">
            <Button
              size="lg"
              style={{
                backgroundColor: "hsl(26, 100%, 55%)",
                borderColor: "hsl(26, 100%, 55%)",
                width: "80%",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <svg
                width="22"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                className="me-2"
              >
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#ffffff"
                  fill-rule="nonzero"
                />
              </svg>
              Add to cart
            </Button>
          </Col>
        </div>
      </Container>
    </div>
  );
};
