"use client";
import "client-only";
import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "./selectors";

export type StateType = {
  drawerIsOpen: boolean;
  categoryFormMode: boolean;
  tagFormMode: boolean;
};
const initState: StateType = {
  drawerIsOpen: false,
  categoryFormMode: true,
  tagFormMode: true,
};

const useStoreBase = create(
  devtools(
    immer(
      combine(initState, (set) => ({
        onDrawer: (prevState: boolean) =>
          set((state) => {
            state.drawerIsOpen = !prevState;
          }),
        onCategoryForm: () =>
          set((state) => {
            state.categoryFormMode = !state.categoryFormMode;
          }),
        onTagForm: () =>
          set((state) => {
            state.tagFormMode = !state.tagFormMode;
          }),
      }))
    )
  )
);

export const useAdminStore = createSelectors(useStoreBase);
