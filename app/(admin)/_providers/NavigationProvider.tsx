"use client";
import { createContext, useContext, useState } from "react";
import { SliderContextType } from "../../../types/app/admin/types";

const SliderContext = createContext<SliderContextType>({
  sliderList: [],
  setSliderList: () => {},
  openDrawer: false,
  setOpenDrawer: () => {},
});
export function SliderContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sliderList, setSliderList] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <SliderContext.Provider
      value={{ sliderList, setSliderList, openDrawer, setOpenDrawer }}
    >
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
