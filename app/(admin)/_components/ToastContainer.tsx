"use client";
import { Toaster } from "react-hot-toast";

export default function ToastContainer() {
  return (
    <Toaster
      toastOptions={{
        className: "min-w-44",
      }}
    />
  );
}
