"use client";

import { removeContactMessageAction } from "@/app/_data/actions";

export default function DeleteButton({ id }) {
  return (
    <button
      className="text-red-500"
      onClick={async () => {
        const confirmed = confirm("مطمئنی ؟");
        if (confirmed) removeContactMessageAction(id);
      }}
    >
      حذف پیام
    </button>
  );
}
