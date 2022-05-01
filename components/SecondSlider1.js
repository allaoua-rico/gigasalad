import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
export default function ({ images }) {
  console.log(images);
  return (
    <div className="overflow-hidden flex justify-center px-10 w-full">
      <Swiper
        // pagination={{ clickable: true }}
        // modules={[Navigation, Pagination]}

        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {images.map((img) => {
          console.log(img);
          return (
            <SwiperSlide>
              <div className="relative	flex justify-center">
                <img src={img} alt="" />
                <div className="absolute z-20 text-white bottom-0">
                  <h3 className="font-bold">
                    Title
                  </h3>
                  <h4 className="text-sm">
                    SubTitle
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
