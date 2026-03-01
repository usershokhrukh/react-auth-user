import React from "react";
import introTopImg from "../assets/images/intro-top.png";
import introBottomImg from "../assets/images/intro-bottom.png";
import boxesImg from "../assets/images/boxes-img.png";
import "../assets/style/intro.scss";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Pagination, Autoplay} from "swiper/modules";

const Intro = () => {
  return (
    <div className="intro container">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="intro__main">
            <div className="intro__left">
              <h2 className="intro__left-title">New Laptop</h2>
              <p className="intro__left-subtext">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="intro__left-button">Shop now</button>
            </div>
            <div className="intro__right">
              <img
                className="intro__right-img-bottom"
                src={introBottomImg}
                alt=""
              />
            </div>
            {/* <img className="intro__right-img-top" src={introTopImg} alt="" /> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="intro__main">
            <div className="intro__left">
              <h2 className="intro__left-title">New GamePad</h2>
              <p className="intro__left-subtext">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="intro__left-button">Shop now</button>
            </div>
            <div className="intro__right">
              <img className="intro__right-img-bottom" src={boxesImg} alt="" />
            </div>
            {/* <img className="intro__right-img-top" src={introTopImg} alt="" /> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Intro;
