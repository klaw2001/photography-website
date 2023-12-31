import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../images/logo.png";
import Service1 from "../images/service-1.jpeg";
import Service2 from "../images/service-2.jpg";
import Service3 from "../images/service-3.jpg";
import Service4 from "../images/service-4.jpg";

const Services = () => {
  const list = [
    { id: 1, title: "commercial" },
    { id: 2, title: "personal" },
    { id: 3, title: "couple" },
    { id: 4, title: "marriage" },
  ];

  const [selectedService, setSelectedService] = useState(1); // Set to the default service ID (e.g., 1)

  // Create a mapping of service IDs to image sources
  const serviceImages = {
    1: Service1,
    2: Service2,
    3: Service3,
    4: Service4,
  };

  // Function to set the selected service
  const handleServiceClick = (id) => {
    setSelectedService(id);
  };

  return (
    <div
      className="services-wrapper position-relative py-5 my-lg-5"
      id="services"
    >
      <div className="service-overlay position-absolute top-0 start-0 bottom-0 "></div>
      <Container>
        <div className="service-box">
          <Row className="align-items-center row-cols-1 row-cols-lg-2">
            <Col className="col-12 col-md-6 col-lg-4">
              <div className="about-text service-text">
                <span className="global-span">WHAT I LOVE TO SHOOT</span>

                <h4 className="my-4 fst-italic global-black">
                Unleashing the beauty through the lens
                </h4>
                <div className="ser-list py-4">
                  {list.map((elem) => (
                    <div
                      className={`d-flex justify-content-between align-items-center ser-elements ${
                        selectedService === elem.id ? "active" : ""
                      }`}
                      key={elem.id}
                      onClick={() => handleServiceClick(elem.id)}
                    >
                      <div className="d-flex align-items-center">
                        <span className="global-black fs-6">/0{elem.id}</span>
                        <h4 className="ms-3">
                          <button className="bg-transparent border-0 text-uppercase fw-bold fs-5 global-black">
                            {elem.title}
                          </button>
                        </h4>
                      </div>
                      <div>
                        <span className="fs-2 " style={{ cursor: "pointer" }}>
                          {selectedService === elem.id ? "-" : "+"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col className="col-12 col-md-6 col-lg-8">
              <Row className="align-items-center">
                <Col className="col-12 col-lg-7 text-center image-col">
                  {selectedService !== null && (
                    <img
                      className="object-fit-cover"
                      width={400}
                      height={200}
                      src={serviceImages[selectedService]}
                      alt={`Service ${selectedService}`}
                    />
                  )}
                </Col>
                <Col className="col-12 col-lg-5">
                  <div className="ser-text mt-5 mt-lg-0">
                    <img src={logo} alt="" className="mb-4 img-fluid" />
                    <p className="fw-light fs-5">
                      At Filter Film, we go beyond capturing moments – we curate
                      experiences. As a full-service photography agency, we
                      specialize in transforming your vision into a visual
                      masterpiece. From weddings to special events, we
                      seamlessly blend creativity, precision, and passion to
                      bring your story to life.
                      <br />
                      <br />
                      <a className="body-btn global-black bg-transparent mt-2 mb-md-0 mb-5">
                        BOOK NOW
                      </a>
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Services;
