import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import quote from "../images/quote-s.png";
import Brand1 from '../images/4.png'
import Brand2 from '../images/3.png'
import Brand3 from '../images/6.png'
import Brand4 from '../images/2.png'
import Brand5 from '../images/1.png'
const Testimonial = () => {
  return (
    <div className="testimonial-wrapper py-5">
      <Container>
        <div className="testimonial-box text-center">
          <span className="global-span text-center">TESTIMONIALS</span>
          <div className="pb-5">
            <Carousel className="my-5" prevLabel="Previous" nextLabel="Next">
              <Carousel.Item>
                <img src={quote} alt="" className="quote-img"/>
                <p className="text-light fs-3 fw-light">
                  I am interested in the details about your wedding, your
                  ceremony & reception venues, your vision, your dress, your
                  colours and anything else you would like to share with me.
                </p>
                <h4 className="text-light fw-bold mt-4">JAMES & MIKE</h4>
              </Carousel.Item>
              <Carousel.Item>
                <img src={quote} alt="" className="quote-img" />
                <p className="text-light fs-3 fw-light">
                  I am interested in the details about your wedding, your
                  ceremony & reception venues, your vision, your dress, your
                  colours and anything else you would like to share with me.
                </p>
                <h4 className="text-light fw-bold mt-4">JAMES & MIKE</h4>
              </Carousel.Item>
              <Carousel.Item>
                <img src={quote} alt="" className="quote-img" />
                <p className="text-light fs-3 fw-light">
                  I am interested in the details about your wedding, your
                  ceremony & reception venues, your vision, your dress, your
                  colours and anything else you would like to share with me.
                </p>
                <h4 className="text-light fw-bold mt-4">JAMES & MIKE</h4>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="brand-box d-flex flex-wrap flex-lg-row justify-content-center justify-content-lg-around align-items-center py-5">
            <img src={Brand1} alt="" className="img-fluid" />
            <img src={Brand2} alt="" className="img-fluid" />
            <img src={Brand3} alt="" className="img-fluid" />
            <img src={Brand4} alt="" className="img-fluid" />
            <img src={Brand5} alt="" className="img-fluid" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
