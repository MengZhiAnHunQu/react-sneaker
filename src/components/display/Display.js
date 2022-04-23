import React from "react";
import { Container, Row } from "react-bootstrap";
import imageShoe from "../../images/imageShoe.jpg";
import imageProduct1Thumbnail from "../../images/imageProduct1Thumbnail.jpg";
import imageProduct2Thumbnail from "../../images/imageProduct2Thumbnail.jpg";
import imageProduct3Thumbnail from "../../images/imageProduct3Thumbnail.jpg";
import imageProduct4Thumbnail from "../../images/imageProduct4Thumbnail.jpg";

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
            src={imageProduct1Thumbnail}
            alt=""
            width="20%"
            style={{ borderRadius: "10px" }}
          />{" "}
          <img
            src={imageProduct2Thumbnail}
            alt=""
            width="20%"
            style={{ borderRadius: "10px" }}
          />{" "}
          <img
            src={imageProduct3Thumbnail}
            alt=""
            width="20%"
            style={{ borderRadius: "10px" }}
          />{" "}
          <img
            src={imageProduct4Thumbnail}
            alt=""
            width="20%"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </Container>
    </div>
  );
};
