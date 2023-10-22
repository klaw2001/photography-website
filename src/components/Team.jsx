import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
const Team = () => {
  return (
    <div className="team-wrapper py-5 skin-bg">
      <Container>
        <Row className="row-cols-1 row-cols-lg-2 mb-5">
          <Col>
            <div className="about-text">
              <span className="global-span">TEAM MEMBERS</span>
              <h3 className="global-heading mt-3 global-black border-0">
                THE BEST TEAM <br /> AVAILABLE
              </h3>
            </div>
          </Col>
          <Col>
            <Row className="row-cols-1 row-cols-md-2">
              <Col className="">
                <p className="fw-light fs-5">
                  I am interested in the details about your wedding, your
                  ceremony & reception venues, your vision, your dress, your
                  colours and anything else you would like to share with me. I
                  am a Gold Coast and Brisbane
                </p>
              </Col>
              <Col>
                <p className="fw-light fs-5">
                  I am interested in the details about your wedding, your
                  ceremony & reception venues, your vision, your dress, your
                  colours and anything else you would like to share with me.
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
                  className="global-black fw-bold"
                  style={{ letterSpacing: "4px" }}
                >
                  JESSICA JUNG
                </h4>
                <span className="global-span">ART DIRECTOR</span>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                <h4
                  className="global-black fw-bold"
                  style={{ letterSpacing: "4px" }}
                >
                  SELENA GOMEZ
                </h4>
                <span className="global-span">PHOTOGRAPHER</span>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                <h4
                  className="global-black fw-bold"
                  style={{ letterSpacing: "4px" }}
                >
                  JUSTIN BIEBER
                </h4>
                <span className="global-span">PHOTOGRAPHER</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h4
                  className="global-black fw-bold"
                  style={{ letterSpacing: "4px" }}
                >
                  GOLD COAST
                </h4>
                <span className="global-span">EDITOR</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
