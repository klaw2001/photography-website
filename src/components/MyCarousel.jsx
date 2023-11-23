import React, { useRef, useState } from "react";
import logo from "../logo.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";
import "swiper/css/navigation";
// import required modules
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export default function MyCarousel() {
  const elem = {
    title: "WELCOME TO THE FILTERFILM WORLD",
    heading: "INSPIRATION",
    para: "BEING SEARCH OF MEANING",
    page: "HAPPY ENDING",
    path: "#services",
  };

  const elem2 = {
    title: "WELCOME TO THE FILTERFILM WORLD",
    heading: "NATURE",
    para: "BEING SEARCH OF MEANING",
    page: "PHOTOGRAPHY",
    path: "#services",
  };

  const elem3 = {
    title: "WELCOME TO THE FILTERFILM WORLD",
    heading: "PHOTOGRAPHY",
    para: "BEING SEARCH OF MEANING",
    page: "HAPPINESS",
    path: "#services",
  };
  return (
    <div className="position-absolute top-0 start-0 end-0 my-carousel">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-box1 d-flex justify-content-center align-items-center py-4 flex-column text-light position-relative">
            <h6 className="mb-2 fw-bold car-h6">{elem.title}</h6>
            <h1 className="my-3">{elem.heading}</h1>
            <p className="fw-light hero-p">{elem.para}</p>
            <a href="#services" className="hero-btn text-light my-3">
              READ MORE
            </a>
            <span className="position-absolute page-span">
              / 01 {elem.page}
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-box2 d-flex justify-content-center align-items-center py-4 flex-column text-light position-relative">
            <h6 className="mb-2 fw-bold car-h6">{elem2.title}</h6>
            <h1 className="my-3">{elem2.heading}</h1>
            <p className="fw-light hero-p">{elem2.para}</p>
            <a href="#services" className="hero-btn text-light my-3">
              READ MORE
            </a>

            <span className="position-absolute page-span">
              / 02 {elem2.page}
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-box3 d-flex justify-content-center align-items-center py-4 flex-column text-light position-relative">
            <h6 className="mb-2 fw-bold car-h6">{elem3.title}</h6>
            <h1 className="my-3">{elem3.heading}</h1>
            <p className="fw-light hero-p">{elem3.para}</p>
            <a href="#services" className="hero-btn text-light my-3">
              READ MORE
            </a>

            <span className="position-absolute page-span">
              / 03 {elem3.page}
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
