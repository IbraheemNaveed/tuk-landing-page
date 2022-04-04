import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Cover1 from '../Assests/imageone.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className=" w-auto " src={Cover1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
