"use client";

import { useEffect, useState } from "react";
import SlideManager from "./SlideManager";
import { useSliderContext } from "@/app/(admin)/_providers/NavigationProvider";
import SliderItem from "./SliderItem";

function Accordion({ title, sliders }) {
  const { sliderList, setSliderList } = useSliderContext();
  const [openAcc, setOpenAcc] = useState(true);
  function onOpenAcc() {
    setOpenAcc(!openAcc);
  }
  useEffect(() => {
    setSliderList(sliders);
  }, [sliderList, setSliderList, sliders]);
  return (
    <div className="w-full flex flex-col">
      <div
        style={{ borderColor: openAcc && "white" }}
        onClick={onOpenAcc}
        className="w-full h-14 flex items-center justify-start gap-2 px-10 rounded-lg border-4 border-avocado-100 text-avocado-900 group cursor-pointer hover:border-avocado-500 duration-300"
      >
        <h1>{title}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 group-hover:translate-y-1 duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {openAcc && (
        <div className="h-full flex items-start justify-center gap-5 ">
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
      )}
    </div>
  );
}

export default Accordion;
