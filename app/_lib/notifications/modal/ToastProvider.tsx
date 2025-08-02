"use client";
import { useAdminStore } from "_lib/store/store";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  // useEffect(() => {
  //   if (isOpen) {
  //     toast(
  //       (t) => (
  //         <div className="w-full flex flex-col gap-2 my-2">
  //           <div className="w-full text-ghost-700">{message}</div>
  //           <div className="w-full flex">
  //             <button
  //               onClick={() => {
  //                 onConfirm();
  //                 closeModal();
  //                 toast.dismiss(t.id);
  //               }}
  //               className="w-24 h-9 m-2 rounded-lg bg-avocado-300 text-white"
  //             >
  //               بله
  //             </button>
  //             <button
  //               onClick={() => {
  //                 closeModal();
  //                 toast.dismiss(t.id);
  //               }}
  //               className="w-24 h-9 m-2 rounded-lg bg-folly-300 text-white"
  //             >
  //               خیر
  //             </button>
  //           </div>
  //         </div>
  //       ),
  //       { duration: Infinity, id: "confirm-modal" }
  //     );
  //   } else {
  //     toast.dismiss("confirm-modal");
  //   }
  // }, [isOpen, message, closeModal, onConfirm]);

  return <Toaster />;
}
