import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../images/logo.png";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Container>
        <Row className="row-cols-1 row-cols-md-3">
          <Col>
            <span className="global-span">STUDIO</span>
            <h4>231 Main Street Chicago , IL</h4>
          </Col>
          <Col>
            <img src={logo} alt="" className="img-fluid" />
          </Col>
          <Col>
            <span className="global-span">PHONE</span>
            <p>312.229.9000 - 1 555 55 55</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
