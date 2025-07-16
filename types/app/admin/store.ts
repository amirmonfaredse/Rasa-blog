import { AdminActions, AdminState } from "_lib/store/store";

export type ToastProps = {
  id?: string;
  type?: string;
  message: string;
};

export type AdminStore = AdminState & AdminActions;

export enum ToastType {
  Success = "SUCCESS",
  Error = "ERROR",
  Modal = "MODAL",
  InProgress = "INPROGRESS",
}
