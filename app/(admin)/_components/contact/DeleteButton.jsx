"use client";
import { actionRemoveMessage } from "@/app/_data/contact/contactAction";

export default function DeleteButton({ id }) {
  return (
    <button
      className="w-[100px] rounded-lg p-2 mt-5 bg-red-500 "
      onClick={async () => {
        const confirmed = confirm("مطمئنی ؟");
        if (confirmed) actionRemoveMessage(id);
      }}
    >
      حذف پیام
    </button>
  );
}
