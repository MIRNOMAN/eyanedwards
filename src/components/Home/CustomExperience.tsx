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
];

export default function CustomExperience() {
  return (
    <section className="container py-[90px] bg-white text-center">
      <h2 className="text-[16px] tracking-widest font-normal uppercase text-gray-500">
        Customer Experience
      </h2>
      <h3 className="text-[40px] mt-[32px] leading-[48px] font-bold text-[#AA7C38] text-gold-600 ">
        What Our Clients Are Saying
      </h3>
      <div className="mt-[60px] px-4  mx-auto">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={1} // Ensures the second slide is displayed by default
          coverflowEffect={{
            rotate: 5,
            stretch: 10,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation={false} // Removed navigation icons
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                    className="w-full h-[400px] object-cover rounded-xl overflow-hidden border-none"
                  />
                  <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-center">
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}