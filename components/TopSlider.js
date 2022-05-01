import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import { FiSearch, FiHeart } from "react-icons/fi";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

export default function TopSlider() {
  return (
    <div className="max-h-[600px] relative flex flex-col items-center overflow-hidden ">
      <div className="flex flex-col md:flex-row-reverse md:justify-center items-center w-full ">
        <div className=" font-bold md:font-semibold text-2xl md:text-5xl md:text-left text-center p-8 max-w-xl">
          <span className="text-[#2690ff]">Book something awesome®</span> for
          your next event
        </div>
        <div className="slider max-h-full w-full overflow-hidden ">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect={"fade"}
            modules={[
              EffectFade,
              Autoplay,
              //  Navigation, Pagination,
            ]}
            className="mySwiper"
          >
            <SwiperSlide className="flex justify-center ">
              <img src="/portraits/belly-dancer--421w.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img src="/portraits/caterer--421w.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img src="/portraits/comedian--421w.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img src="/portraits/photographer--421w.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img src="/portraits/princess--421w.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img src="/portraits/rock-band--421w.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img src="/portraits/violinist--421w.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="input  hidden grow md:flex w-full  absolute bottom-14 z-20">
        <div className="flex  items-center mx-12 px-8 bg-gray-100/75 w-full h-14 rounded-md">
          <div className="flex w-full">
            <button>
              <FiSearch className="w-6 h-6 stroke-1 stroke-gray-800 mr-3" />
            </button>
            <input
              className="w-full bg-transparent text-sm"
              type="text"
              placeholder="What kind of talent or service can we help you find?"
            />
          </div>
          <button className="bg-[#2690ff] text-sm text-white px-10 py-2 my-4 rounded-md font-bold ">
            Search
          </button>
        </div>
      </div>
      <div className="md:hidden ">
        <div className="flex  items-center my-3 px-4 bg-gray-100/75  h-16 rounded-md">
          <input
            className="w-full bg-transparent text-md"
            type="text"
            placeholder="Search"
          />
          <FiSearch className="w-6 h-6 stroke-1 stroke-gray-800  mr-3" />
        </div>
      </div>
    </div>
  );
}
