"use client";
import { SliderContextType } from "@/types/app/admin/types";
import { createContext, useContext, useState } from "react";

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
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

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
