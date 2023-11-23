import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
const Team = () => {
  return (
    <div className="team-wrapper py-5 skin-bg">
      <Container>
        <Row className="row-cols-1 row-cols-lg-2 mb-5 align-items-center">
          <Col>
            <div className="about-text">
              <span className="global-span text-uppercase">TEAM MEMBERS</span>
              <h3 className="global-heading mt-3 global-black border-0">
                THE BEST TEAM <br /> AVAILABLE
              </h3>
            </div>
          </Col>
          <Col>
            <Row className="row-cols-1 row-cols-md-2">
              <Col className="">
              <p className="fw-light fs-5">
          Meet the creative minds behind Filter Film. Our team is passionate about capturing the essence of every moment. I am personally invested in the details of your wedding – the ceremony and reception venues, your unique vision, the elegance of your dress, the vibrant colors, and everything else that makes your story unique.
        </p>
              </Col>
              <Col>
              <p className="fw-light fs-5">
          Our commitment is to transform your special day into a visual masterpiece. I believe in the power of storytelling through photography, and I am dedicated to understanding and preserving the unique elements that make your celebration extraordinary. Let us be a part of your journey, capturing memories that last a lifetime.
        </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="col-lg-3 d-lg-block d-none">
            <img src={team1} alt="" className="" />
          </Col>
          <Col className="col-12 col-md-6 col-lg-4">
            <img src={team2} alt="" className="img-fluid" />
          </Col>
          <Col className="col-12 col-md-6 col-lg-5 mt-4 mt-md-0">
            <div className="team-list">
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                <h4
                  className="global-black fw-bold text-uppercase"
                  style={{ letterSpacing: "4px" }}
                >
                  Subham Dalai
                </h4>
                <span className="global-span text-uppercase">founder </span>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                <h4
                  className="global-black fw-bold text-uppercase"
                  style={{ letterSpacing: "4px" }}
                >
                  Deepak kumar sahu
                </h4>
                <span className="global-span text-uppercase">videographer </span>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                <h4
                  className="global-black fw-bold text-uppercase"
                  style={{ letterSpacing: "4px" }}
                >
                  Bishal ku patro
                </h4>
                <span className="global-span text-uppercase">  editor </span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h4
                  className="global-black fw-bold text-uppercase"
                  style={{ letterSpacing: "4px" }}
                >
                  Ajaya ku sahu
                </h4>
                <span className="global-span text-uppercase">Photographer </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
