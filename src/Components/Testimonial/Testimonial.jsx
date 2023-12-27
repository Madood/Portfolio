import React from 'react';
import "./Testimonial.css";
import { List } from "./List"; // Corrected import path
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';

function Testimonial() {
  return (
    <section className="testimonial container section" id="Testimonial">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My clients say</span>

      <Swiper className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
        clickable: true,
      }}
        breakpoints={{
          576: {
          slidePerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
        }}
      modules={[Pagination]}
      >
        {List.map(({ id,image,  title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
               <img src={image} alt="" className="testimonial__img" /> 

              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p> 
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonial;
