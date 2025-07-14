import { AdminActions, AdminState } from "(admin)/_stores/adminStore";

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
