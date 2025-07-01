"use client";
import { useSliderContext } from "@/app/(admin)/_providers/NavigationProvider";
import SlideManager from "./SlideManager";
import SliderItem from "./SliderItem";
import { useEffect } from "react";
import { SlideFieldProps } from "@/types/app/data/types";

export default function SliderContainer({
  sliders,
}: {
  sliders: SlideFieldProps[];
}) {
  const { sliderList, setSliderList } = useSliderContext();
  useEffect(() => {
    setSliderList(sliders);
  }, [sliderList, setSliderList, sliders]);
  return (
    <div className="h-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-5 mx-2  ">
      <SlideManager />
      <div className="w-full h-full flex flex-col items-start justify-start gap-2 my-5">
        {sliderList?.length > 0 ? (
          sliderList.map((slide, index) => (
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
