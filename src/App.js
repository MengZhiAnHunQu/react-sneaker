import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Display } from "./components/display/Display";
import { Info } from "./components/info/Info";
import { Top } from "./components/navbar/Top";


function App() {
  const [totalAmount, setTotalAmount] = useState(125);
  

  const moneyAdd=()=>{
    console.log("clicked");
    setTotalAmount(prev => prev + 125);
    // console.log(totalAmount);
  }
  // console.log(totalAmount);

  const moneyMinus=()=>{
    console.log("minus now");
    setTotalAmount(prev => prev - 125);
  }
  return (
  
    <div className="wrapper">
      <Container>
        <Top />
        <Row>
          <Col md="6">
            <Display />
          </Col>

          <Col md="6">
            <Info moneyAdd={moneyAdd} totalAmount={totalAmount} moneyMinus={moneyMinus}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
