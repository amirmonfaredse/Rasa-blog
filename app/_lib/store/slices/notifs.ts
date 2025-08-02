import { StateCreator } from "zustand";
import { StoreType } from "../store";

export type ModalProps = {
  isOpen: boolean;
  message: string;
  openModal: (message: string) => void;
  closeModal: () => void;
};

export interface NotifsSliceType {}

export const notifsSlice: StateCreator<
  StoreType,
  [
    ["zustand/subscribeWithSelector", never],
    ["zustand/devtools", never],
    ["zustand/immer", never]
  ],
  [],
  NotifsSliceType
> = (set) => ({});
