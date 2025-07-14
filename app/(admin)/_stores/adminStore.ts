"use client";
import type { AdminStore, ToastProps } from "@/types/app/admin/store";
import { immer } from "zustand/middleware/immer";
import { createStore } from "zustand/vanilla";
export const defaultInitState: AdminState = {
  toasts: [],
};
export type AdminState = {
  toasts: ToastProps[];
};
export type AdminActions = {
  showToast: (newToast: ToastProps) => void;
  removeToast: (toastId: string) => void;
};

export const createAdminStore = (
  initialState: AdminState = defaultInitState
) => {
  return createStore<AdminStore>()(
    immer((set) => ({
      ...initialState,
      showToast: (newToast: ToastProps) => {
        set((state) => {
          state.toasts.push({ ...newToast, id: crypto.randomUUID() });
        });
      },

      removeToast: (toastId: string) =>
        set((state) => ({
          toasts: state.toasts.filter((t) => t.id !== toastId),
        })),
    }))
  );
};
