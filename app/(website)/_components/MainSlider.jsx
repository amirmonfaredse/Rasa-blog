"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import Image from "next/image";

function Slide({ title, image, bgColor, textColor, type }) {
  return (
    <div
      className="w-full h-full border bg-red-50 p-2"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="w-full h-full flex flex-col md:flex-row justify-between items-center">
        <div className="w-fit h-[80%] flex flex-col items-start justify-center px-4">
          <p className="text-red-700 flex items-center gap-2 absolute top-8 right-16">
            <Image
              className="animate-bounce"
              src="/slider/idea.svg"
              alt="بخوانید"
              width={20}
              height={20}
            />
            <span className="hover:scale-105 cursor-pointer duration-150">
              {type === "reading" && "بخوانید"}
            </span>
          </p>
          <h1
            style={{ color: textColor }}
            className="w-fit text-ghost-1000 text-2xl lg:text-3xl lg:leading-[50px] md:px-12 mt-16 md:mt-0"
          >
            {title}
          </h1>
        </div>
        <div className="w-[90%] md:w-1/2 h-fit flex items-center justify-center md:justify-end md:pl-10 mt-5 md:mt-0">
          <div className="w-[250px] h-[250px] flex justify-center items-center relative border border-ghost-1000 ">
            <div className="w-full md:w-[240px] h-[240px] border border-ghost-1000 absolute"></div>
            <Image className="" src={image} fill alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MainSlider({ sliders }) {
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
