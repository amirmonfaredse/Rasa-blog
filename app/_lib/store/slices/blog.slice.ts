import { StateCreator } from "zustand";
import { initBlogForm } from "../initials";
import { StoreType } from "../store";
import { BlogSliceType } from "../types";

export const blogSlice: StateCreator<
  StoreType,
  [
    ["zustand/subscribeWithSelector", never],
    ["zustand/devtools", never],
    ["zustand/immer", never]
  ],
  [],
  BlogSliceType
> = (set) => ({
  initBlogFields: initBlogForm,
  setInitBlogFields: (data) =>
    set((state) => {
      state.initBlogFields = data;
    }),
});
