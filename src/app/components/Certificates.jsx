"use client";

import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const certificates = [
  { image: "/certificatee44.png", title: "Certyfikat 1" },
  { image: "/certificate1.jpg", title: "Certyfikat 2" },
  { image: "/certificatee2.jpg", title: "Certyfikat 3" },
  { image: "/certificate33.jpg", title: "Certyfikat 4" },
];

const Certificates = () => {
  return (
    <div id="portfolio" className="py-12 px-6 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <button className="font-semibold uppercase mx-auto mb-5 text-center px-7 py-3 bg-main rounded-md inline-block text-white">
          Certyfikaty
        </button>
      </div>
      <div className="relative mx-5 sm:mx-10 md:mx-20">
        <Swiper
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={"auto"}
          spaceBetween={25}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: "auto",
              spaceBetween: 25,
            },
          }}
        >
          {certificates.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-auto w-full sm:h-[550px] overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  width={600}
                  height={600}
                  className="w-full h-full object-contain rounded-md shadow-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="arrow-right absolute top-[48%] hover:scale-105 transition left-[-15px] sm:left-[-20px] bg-main text-white cursor-pointer  rounded-full psm:-3  p-2 text-md sm:text-xl z-20">
          <FaArrowLeft />
        </button>
        <button className="arrow-left absolute top-[48%] hover:scale-105 transition right-[-15px] sm:right-[-20px] bg-main text-white cursor-pointer rounded-full sm:p-3 p-2 text-md sm:text-xl  z-20">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Certificates;
