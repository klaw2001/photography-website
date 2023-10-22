import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyForm from "./MyForm";
import Grid1 from '../images/about-1.jpg'
const FormBox = () => {
  return (
    <div className="form-wrapper py-5">
      <Container>
        <Row className="align-items-center row-cols-1 row-cols-md-2">
          <Col>
            <div className="social-links d-flex g-2 py-3" style={{gap:'20px'}}>
              <h5>
                <a href='https://hrishikeshnetke.in' target="_blank" className="text-decoration-none global-black fw-bold" rel="noopener noreferrer">FACEBOOK</a>
              </h5>
              <h5>
                <a href='https://hrishikeshnetke.in' target="_blank" className="text-decoration-none global-black fw-bold" rel="noopener noreferrer">INSTAGRAM</a>
              </h5>
              <h5>
                <a href='https://hrishikeshnetke.in' target="_blank" className="text-decoration-none global-black fw-bold" rel="noopener noreferrer">TWITTER</a>
              </h5>
            </div>
            <div className="parent">
                <img src={Grid1} alt="" className="object-fit-cover w-100" height={150}/>
                <img src={Grid1} alt="" className="object-fit-cover w-100" height={150}/>
                <img src={Grid1} alt="" className="object-fit-cover w-100" height={150}/>
                <img src={Grid1} alt="" className="object-fit-cover w-100" height={150}/>
                <img src={Grid1} alt="" className="object-fit-cover w-100" height={150}/>
                <img src={Grid1} alt="" className="object-fit-cover w-100" height={150}/>
            </div>
          </Col>
          <Col>
            <MyForm/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormBox;
