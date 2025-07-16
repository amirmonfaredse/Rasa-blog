"use client";
import "client-only";
import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "./selectors";

const useStoreBase = create(
  devtools(
    immer(
      combine({ notifs: [] }, (set) => ({
        addNotif: (newNotif: any) =>
          set((state) => {
            state.notifs.push(newNotif);
          }),
      }))
    )
  )
);

export const useStore = createSelectors(useStoreBase);
