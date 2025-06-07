"use client";
import { createContext, useContext, useState } from "react";

const SliderContext = createContext();
export function SliderContextProvider({ children }) {
  const [sliderList, setSliderList] = useState([]);

  return (
    <SliderContext.Provider value={{ sliderList, setSliderList }}>
      {children}
    </SliderContext.Provider>
  );
}

export function useSliderContext() {
  const context = useContext(SliderContext);
  if (context === undefined)
    throw new Error("Slider Context Used Outside Of Provider");
  return context;
}
