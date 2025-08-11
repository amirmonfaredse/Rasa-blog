import { SlideFieldProps } from "@/types/app/data/types";
import { StateCreator } from "zustand";
import {
  createInitSlider,
  initSliderFields,
  initSliderManager,
  sliderTitlePresets,
} from "../initials";
import { Mode, SliderSliceType } from "../../../../types/app/store/types";
import { StoreType } from "../store";

export const sliderSlice: StateCreator<
  StoreType,
  [
    ["zustand/subscribeWithSelector", never],
    ["zustand/devtools", never],
    ["zustand/immer", never]
  ],
  [],
  SliderSliceType
> = (set) => ({
  sliderId: "",
  sliderManager: initSliderManager,
  initSliderFields: initSliderFields,
  setSliderId: (sliderId?: string | undefined) =>
    set((state) => {
      sliderId ? (state.sliderId = sliderId) : (state.sliderId = "");
    }),
  onSliderFormMode: (newMode: Mode) =>
    set((state) => {
      state.sliderManager.formMode = newMode;
      state.sliderManager.titleValues = sliderTitlePresets[newMode];
    }),
  onSliderFields: (slider?: SlideFieldProps) =>
    set((state) => {
      slider
        ? (state.sliderManager.fieldsValues = slider)
        : (state.sliderManager.fieldsValues = createInitSlider());
    }),
  setInitSliderFields: (data) =>
    set((state) => {
      state.initSliderFields = data;
    }),
});
