import React from "react";
import { Container, Row } from "react-bootstrap";
import imageShoe from "../../images/imageShoe.jpg";

export const Display = () => {
  return (
    <div>
      <Container>
        <Row>
          <img
            src={imageShoe}
            alt=""
            style={{ borderRadius: "75px", padding: "60px" }}
            className=" image-fluid   mt-3"
          />
        </Row>

        <div className="d-flex  justify-content-between px-4">
          <img
            src={imageShoe}
            alt=""
            width="80px"
            style={{ borderRadius: "10px" }}
          />{" "}
          <img
            src={imageShoe}
            alt=""
            width="80px"
            style={{ borderRadius: "10px" }}
          />{" "}
          <img
            src={imageShoe}
            alt=""
            width="80px"
            style={{ borderRadius: "10px" }}
          />{" "}
          <img
            src={imageShoe}
            alt=""
            width="80px"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </Container>
    </div>
  );
};
