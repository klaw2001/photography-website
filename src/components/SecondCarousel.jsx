import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../images/post-1.jpg";
import image2 from "../images/FIL07872.jpg";
import image3 from "../images/post-3.jpg";
import image4 from "../images/post-4.jpg";
import image5 from "../images/post-5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../swiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import VideoPlayer from "./VideoPlayer";

export default function SecondCarousel() {
  return (
    <div className="position-relative sec-car" id="portfolio">
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
          {/* <video src={video} loop className="swiper-video"></video> */}
          <iframe
            src="https://player.cloudinary.com/embed/?public_id=videoff_ehslpz&cloud_name=djckyy3ew&player[muted]=false&player[posterOptions][transformation][startOffset]=0&player[autoplayMode]=on-scroll&player[autoplay]=true&player[loop]=true"
            className="w-100 h-100"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowfullscreen
            frameborder="0"
          ></iframe>
        </SwiperSlide>
        <SwiperSlide className="portfolio-img-2">
          {/* <img src={image2} alt="" className=" w-100" /> */}
        </SwiperSlide>
        <SwiperSlide className="portfolio-img-3">
          {/* <img src={image3} alt="" className="object-fit-cover" /> */}
        </SwiperSlide>
        <SwiperSlide className="portfolio-img-4">
          {/* <img src={image4} alt="" className="object-fit-cover" /> */}
        </SwiperSlide>
        <SwiperSlide className="portfolio-img-5">
          {/* <img src={image5} alt="" className="object-fit-cover" /> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
