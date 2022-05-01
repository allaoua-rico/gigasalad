import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import { FiSearch, FiHeart } from "react-icons/fi";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

export default function BottomSlider() {
  return (
    <div className="overflow-hidden">
      <img
        className="max-h-max max-w-max w-auto animate-[carousel_180s_linear_infinite]"
        src="performer-scroll-profiles.webp"
        alt=""
      />
    </div>
  );
}
