import React from "react";
import "./InspiringQuotes.css";
import avt_1 from "../../assets/avtar_1.jpg";
import avt_2 from "../../assets/avtar_2.jpg";
import avt_3 from "../../assets/avtar_3.jpg";
import avt_4 from "../../assets/avtar_4.jpg";
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const InspiringQuotes = () => {
  return (
    <section id="inspiringQuotes">
      <h2>Inspiring Quotes</h2>
      <Swiper className="container quotes__container"  modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="quotes">
          <div className="avtar">
            <img src={avt_1} alt="" />
          </div>
          <h5 className="avtar__name">Bill Gates</h5>
          <small className="avtar__quote">
            " Success is a lousy teacher. It seduces smart people into thinking
            they can't lose. "
          </small>
        </SwiperSlide>
        <SwiperSlide className="quotes">
          <div className="avtar">
            <img src={avt_2} alt="" />
          </div>
          <h5 className="avtar__name">Linus Torvalds</h5>
          <small className="avtar__quote">
            " See, you not only have to be a good coder to create system like
            Linux, you have to be a sneaky bastard too. "
          </small>
        </SwiperSlide>
        <SwiperSlide className="quotes">
          <div className="avtar">
            <img src={avt_3} alt="" />
          </div>
          <h5 className="avtar__name">Steve Jobs</h5>
          <small className="avtar__quote">
            " Because the people who are crazy enough to think they can change
            the world are the ones who do. "
          </small>
        </SwiperSlide>
        <SwiperSlide className="quotes">
          <div className="avtar">
            <img src={avt_4} alt="" />
          </div>
          <h5 className="avtar__name">Larry Page</h5>
          <small className="avtar__quote">
            " If you're changing the world, you're working on important things.
            You're excited to get up in the morning. "
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default InspiringQuotes;
