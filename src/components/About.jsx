import React, { useRef } from "react";
// import Container from 'react-bootstrap/esm/Container'
import { Row, Container, Col } from "react-bootstrap";
import about1 from "../images/about-1.jpg";
import about2 from "../images/1111.jpg";
import about3 from "../images/about-3.jpg";
import { Element } from "react-scroll";
const About = () => {
  const aboutRef = useRef();
  return (
    <div className="about-wrapper" id="about" ref={aboutRef}>
      <Container>
        <div className="about-box">
          <Row className="align-items-center justify-content-between row-cols-1 row-cols-md-2">
            <Col>
              <div className="about-text">
                <span className="global-span">GET TO KNOW ME</span>
                <h3 className="global-heading mt-3 global-black">
                  CAPTURING MOMENTS, CREATING MEMORIES
                </h3>
                <h4 className="my-4 global-black fst-italic">
                  Unleashing the beauty through the lens
                </h4>
                <p>
                  Welcome to Filter Film, where moments transform into timeless
                  memories. I'm not just a photographer; I'm a trendsetter, an
                  adventurer, and a storyteller with a camera. My passion lies
                  in pushing boundaries, experimenting with creativity, and
                  breathing new life into every scene I capture.
                </p>
                <p>
                  From candid shots to meticulously planned projects, I thrive
                  on finding new perspectives and bringing fresh energy to even
                  the most familiar settings. Every click is an opportunity to
                  freeze a moment, evoke emotion, and create a visual narrative
                  that lasts a lifetime.
                </p>
                <p className="pb-3">
                  Join me on this visual journey, where we turn ordinary moments
                  into extraordinary memories. Let's collaborate and capture the
                  essence of your story. Contact us to discuss your vision, and
                  let's embark on a photographic adventure together.
                </p>
                <a href="#services" className="body-btn global-black bg-transparent  mb-md-0 mb-5">
                  CONTACT US
                </a>
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
