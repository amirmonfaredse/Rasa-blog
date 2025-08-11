import { StateCreator } from "zustand";
import { initBlogForm } from "../initials";
import { StoreType } from "../store";
import { BlogSliceType } from "../../../../types/app/store/types";

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
  filteredBlogs: [],
  setFilteredBlogs: (blogs) =>
    set((state) => {
      state.filteredBlogs = blogs;
    }),

  setInitBlogFields: (data) =>
    set((state) => {
      state.initBlogFields = data;
    }),
});
