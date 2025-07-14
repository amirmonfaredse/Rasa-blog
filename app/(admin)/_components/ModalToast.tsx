"use client";
import toast from "react-hot-toast";

export default function ModalToast({ to, t }: any) {
  return (
    <div className="w-full flex flex-col gap-2 my-2">
      <div className="w-full text-ghost-700">{t.message}</div>
      <div className="w-full flex">
        <button
          className="w-24 h-9 m-2 rounded-lg bg-avocado-300 text-white"
          onClick={() => {
            toast.dismiss(to.id);
            return true;
          }}
        >
          بله
        </button>
        <button
          className="w-24 h-9 m-2 rounded-lg bg-folly-300 text-white"
          onClick={() => {
            toast.dismiss(to.id);
            return false;
          }}
        >
          خیر
        </button>
      </div>
    </div>
  );
}
