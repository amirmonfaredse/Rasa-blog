import { StateCreator } from "zustand";
import { LayoutSliceType } from "../../../../types/app/store/types";
import { StoreType } from "../store";

export const layoutSlice: StateCreator<
  StoreType,
  [
    ["zustand/subscribeWithSelector", never],
    ["zustand/devtools", never],
    ["zustand/immer", never]
  ],
  [],
  LayoutSliceType
> = (set) => ({
  drawerIsOpen: false,
  accordionIsOpen: true,
  onDrawer: (prevState: boolean) =>
    set((state) => {
      state.drawerIsOpen = !prevState;
    }),
  onAccordion: (prevState?: boolean | undefined) =>
    set((state) => {
      prevState
        ? (state.accordionIsOpen = !prevState)
        : (state.accordionIsOpen = !state.accordionIsOpen);
    }),
});
