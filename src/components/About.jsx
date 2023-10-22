import React from "react";
// import Container from 'react-bootstrap/esm/Container'
import { Row, Container, Col } from "react-bootstrap";
import about1 from "../images/about-1.jpg";
import about2 from "../images/1111.jpg";
import about3 from "../images/about-3.jpg";
const About = () => {
  return (
    <div className="about-wrapper">
      <Container>
        <div className="about-box">
          <Row className="align-items-center justify-content-between row-cols-1 row-cols-md-2">
            <Col>
              <div className="about-text">
                <span className="global-span">GET TO KNOW ME</span>
                <h3 className="global-heading mt-3 global-black">
                  GET TO KNOW ME <br /> BETTER
                </h3>
                <h4 className="my-4 global-black fst-italic">
                  Cum sociis natoque penatibus et magnis disrient
                </h4>
                <p>
                  I’m a trend setter, an adventurer, a photographer! I love
                  experiments and personal projects. Finding new perspectives
                  and breathing in new life into old boring scenes is what
                  inspires and gets me excited!
                </p>
                <button className="body-btn global-black bg-transparent mt-2 mb-md-0 mb-5">
                  CONTACT US
                </button>
              </div>
            </Col>
            <Col>
              <div className="images-wrap">
                <div className="image-1">
                  <img
                    src={about1}
                    alt=""
                    width={242}
                    className="object-fit-cover"
                  />
                </div>
                <div className="image-2">
                  <img
                    src={about3}
                    alt=""
                    width={242}
                    height={200}
                    className="object-fit-cover"
                  />
                </div>
                <div className="image-3">
                  <img
                    src={about2}
                    alt=""
                    width={242}
                    height={338}
                    className="object-fit-cover"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
