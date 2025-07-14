"use client";
import { useAdminStore } from "(admin)/_providers/StoreProvider";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ModalToast from "./ModalToast";
import { ToastType } from "@/types/app/admin/store";

export default function ToastListener() {
  const toasts = useAdminStore((state) => state.toasts);

  useEffect(() => {
    toasts.forEach((t) => {
      switch (t.type) {
        case ToastType.Success:
          toast.success(t.message);
          break;
        case ToastType.Error:
          toast.error(t.message);
          break;
        case ToastType.Modal:
          toast((to) => <ModalToast to={to} t={t} />, { duration: Infinity });
          break;
        default:
          toast(t.message);
      }
    });
  }, [toasts]);
  return (
    <Toaster
      toastOptions={{
        className: "min-w-44",
      }}
    />
  );
}
