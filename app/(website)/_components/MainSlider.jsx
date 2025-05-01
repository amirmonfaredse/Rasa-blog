"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import Image from "next/image";
function Slide({}) {
  return (
    <div className="w-full h-full border bg-red-50 p-2">
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
              بخوانید
            </span>
          </p>
          <h1 className="w-fit text-ghost-1000 text-4xl leading-[50px] px-12">
            5 ویژگی شگفت انگیز شبکه های اجتماعی برای کسب و کار شما
          </h1>
        </div>
        <div className="w-1/2 h-full flex items-center justify-end pl-10">
          <div className="flex justify-center items-center w-[250px] h-[250px] border border-ghost-1000 z-50">
            <div className="w-[240px] h-[240px] border border-ghost-1000 absolute"></div>
            <Image
              className=" "
              src="/slider/social.jpg"
              width={250}
              height={250}
              alt="5 برتری اصلی سوشیال مدیا برای کسب و کار شما"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MainSlider() {
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
      className="w-full h-full mySwiper shadow-[0px_1px_31px_-16px_#000000] "
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay, Navigation]}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      <SwiperSlide className="w-full h-full ">
        <Slide />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full ">
        <Slide />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full ">
        <Slide />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full ">
        <Slide />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full ">
        <Slide />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full ">
        <Slide />
      </SwiperSlide>
    </Swiper>
  );
}

export default MainSlider;
