"use client";
import { useSliders } from "_data/fetchers";
import SlideManager from "./SlideManager";
import SliderItem from "./SliderItem";

export default function SliderContainer() {
  const { sliders } = useSliders();

  return (
    <div className="h-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-5 mx-2  ">
      <SlideManager />
      <div className="w-full h-full flex flex-col items-start justify-start gap-2 my-5">
        {sliders?.length > 0 ? (
          sliders.map((slide, index) => (
            <SliderItem
              slide={slide}
              index={index}
              key={`${index}-${Math.floor(Math.random() * 100)}`}
            />
          ))
        ) : (
          <div className="text-avocado-900">اسلایدی وجود ندارد</div>
        )}
      </div>
    </div>
  );
}
