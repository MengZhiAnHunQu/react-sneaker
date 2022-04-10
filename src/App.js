import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Display } from "./components/display/Display";
import { Info } from "./components/info/Info";
import { Top } from "./components/navbar/Top";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Top />
        <Row>
          <Col md="6">
            <Display />
          </Col>

          <Col md="6">
            <Info />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
