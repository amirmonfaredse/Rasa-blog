"use client";

import { removeAboutAction } from "@/app/_data/actions";

export default function DeleteButton({ id }) {
  return (
    <button
      onClick={async () => {
        const confirmed = confirm("مطمئنی؟");
        if (confirmed) {
          await removeAboutAction(id);
        }
      }}
      className="text-red-600"
    >
      حذف این بخش
    </button>
  );
}
