"use client";
import { ActionResult } from "@/types/app/data/types";
import "client-only";
import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "./selectors";

export type NotifProps = {
  notifId: string;
  data: ActionResult;
};
export type StateType = {
  drawerIsOpen: boolean;
  notifs: NotifProps[];
};
const initState: StateType = {
  drawerIsOpen: false,
  notifs: [],
};

const useStoreBase = create(
  devtools(
    immer(
      combine(initState, (set) => ({
        onDrawer: (prevState: boolean) =>
          set((state) => {
            state.drawerIsOpen = !prevState;
          }),
      }))
    )
  )
);

export const useAdminStore = createSelectors(useStoreBase);
