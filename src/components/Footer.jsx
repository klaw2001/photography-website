import React from "react";
import { Col, Container, DropdownDivider, Row } from "react-bootstrap";
import logo from "../images/logo.png";
const Footer = () => {
  return (
    <div className="footer-wrapper py-3">
      <Container>
        <Row className="row-cols-1 row-cols-md-3 align-items-center">
          <Col className="text-lg-start text-center">
            <span className="global-span">STUDIO</span>
            <h4 className="mt-2">
              Gandhinagar 2nd Lane extension , Berhampur , Odisha
            </h4>
            <span className="global-span fs-5">
              <a
                href="mailto:subhamabo@gmail.com"
                className="text-decoration-none"
                style={{ color: "#b9a893" }}
              >
                subhamabo@gmail.com
              </a>
            </span>
          </Col>
          <Col className="text-center py-5 py-lg-0">
            <a href="#">
              <img src={logo} alt="" className=" m-lg-auto" height={200} />
            </a>
          </Col>
          <Col className="text-center text-lg-end">
            <span className="global-span">PHONE</span>
            <p><a href="tel:+91 7008772762" className="text-decoration-none text-black fs-4">+91 7008772762</a></p>
          </Col>
        </Row>
      </Container>
      <DropdownDivider />
            <div className="text-center" style={{marginTop:'100px'}}>
        <h5>
          Developed And Designed By{" "}
          <a
            href="https://hrishikeshnetke.in"
            target="_blank"
            className="text-decoration-none"
            style={{ color: "#b9a893" }}
          >
            Hrishikesh Netke
          </a>
        </h5>
      </div>
    </div>
  );
};

export default Footer;
