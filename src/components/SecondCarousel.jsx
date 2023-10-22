import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../images/post-1.jpg";
import image2 from "../images/post-2 (1).jpg";
import image3 from "../images/post-3.jpg";
import image4 from "../images/post-4.jpg";
import image5 from "../images/post-5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../swiper.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function SecondCarousel() {
  return (
    <div className="position-relative sec-car">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt=""  className="object-fit-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt=""  className="object-fit-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" className="object-fit-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt=""  className="object-fit-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt=""  className="object-fit-cover"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
