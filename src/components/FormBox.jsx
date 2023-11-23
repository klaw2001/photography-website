import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyForm from "./MyForm";
import Grid1 from "../images/about-1.jpg";
const FormBox = () => {
  return (
    <div className="form-wrapper py-5" id="contact">
      <Container>
        <Row className="align-items-center row-cols-1 row-cols-md-2">
          <Col>
            <div
              className="social-links d-flex g-2 py-3"
              style={{ gap: "20px" }}
            >
              <h5>
                <a
                  href="https://www.facebook.com/profile.php?id=100079551728275"
                  target="_blank"
                  className="text-decoration-none global-black fw-bold"
                  rel="noopener noreferrer"
                >
                  FACEBOOK
                </a>
              </h5>
              <h5>
                <a
                  href="https://instagram.com/filterfilms_?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  className="text-decoration-none global-black fw-bold"
                  rel="noopener noreferrer"
                >
                  INSTAGRAM
                </a>
              </h5>
              <h5>
                <a
                  href="https://instagram.com/filterfilms_?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  className="text-decoration-none global-black fw-bold"
                  rel="noopener noreferrer"
                >
                  TWITTER
                </a>
              </h5>
            </div>
            {/* <div className="parent">
              <img
                src={Grid1}
                alt=""
                className="object-fit-cover w-100"
                height={150}
              />
              <img
                src={Grid1}
                alt=""
                className="object-fit-cover w-100"
                height={150}
              />
              <img
                src={Grid1}
                alt=""
                className="object-fit-cover w-100"
                height={150}
              />
              <img
                src={Grid1}
                alt=""
                className="object-fit-cover w-100"
                height={150}
              />
              <img
                src={Grid1}
                alt=""
                className="object-fit-cover w-100"
                height={150}
              />
              <img
                src={Grid1}
                alt=""
                className="object-fit-cover w-100"
                height={150}
              />
            </div> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3765.3752831666066!2d84.78390887521127!3d19.309514981943718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDE4JzM0LjMiTiA4NMKwNDcnMTEuMyJF!5e0!3m2!1sen!2sin!4v1700752515881!5m2!1sen!2sin"
              // width="600"
              height="450"
              // style="border:0;"
              className="w-100"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col>
            <MyForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormBox;
