"use client";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import { SlideFieldProps } from "@/types/app/data/types";

export default function MainSlider({
  sliders,
}: {
  sliders: SlideFieldProps[];
}) {
  useEffect(() => {
    const sliderTimer = setInterval(() => {
      return () => {
        clearInterval(sliderTimer);
      };
    }, 1000);
  }, []);
  return (
    <Swiper
      navigation={true}
      slidesPerView={1}
      centeredSlides={true}
      className="w-full h-fit flex flex-col md:flex-row shadow-[0px_1px_31px_-16px_#000000] mySwiper"
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay, Navigation]}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      {sliders.length > 0 &&
        sliders.map((slide, index) => (
          <SwiperSlide key={`${index}-${slide.id}`} className="w-full h-full ">
            <Slide
              title={slide.title}
              image={slide.image}
              bgColor={slide.bgColor}
              textColor={slide.textColor}
              type={slide.type}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
