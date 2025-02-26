"use client";

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

const testimonials = [
  {
    video: "/path-to-video1.mp4",
  },
  {
    video: "/path-to-video2.mp4",
  },
  {
    video: "/path-to-video3.mp4",
  },
  {
    video: "/path-to-video3.mp4",
  },
];

export default function CustomExperience() {
  return (
    <section className="container md:py-[90px] py-10 bg-white text-center">
          <h2 className="text-[16px] tracking-widest font-montserrat font-normal md:leading-[20px] uppercase text-gray-500">
            Customer Experience
          </h2>
          <h3 className="md:text-[40px] text-[30px] mt-[32px] leading-[48px] font-minion font-bold text-[#AA7C38] text-gold-600 ">
            What Our Clients Are Saying
          </h3>
          <div className="mt-[60px] px-4 mx-auto relative">
            {/* Top Pagination */}
            <div className="custom-pagination-top flex justify-center mb-4"></div>
    
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              initialSlide={1}
              coverflowEffect={{
                rotate: 5,
                stretch: 10,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              spaceBetween={20}
              breakpoints={{
                768: { slidesPerView: 2.3 },
                1024: { slidesPerView: 2.3 },
              }}
              pagination={{
                clickable: true,
                el: " .custom-pagination-bottom",
                renderBullet: (index, className) => `
                  <span class="${className} w-3 h-3 rounded-full bg-gray-300 mx-1 hover:bg-[#AA7C38] transition-all"></span>
                `,
              }}
              navigation={false}
              modules={[Pagination, Autoplay, EffectCoverflow]}
              className="py-5"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-2xl shadow-xl">
                    <div className="relative">
                      <video
                        src={testimonial.video}
                        controls
                        className="md:w-full md:h-[300px] object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
    
            {/* Middle Pagination (Centered over Swiper) */}
            <div className="custom-pagination-middle flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    
            {/* Bottom Pagination */}
            <div className="custom-pagination-bottom flex justify-center mt-6"></div>
          </div>
        </section>
  );
}