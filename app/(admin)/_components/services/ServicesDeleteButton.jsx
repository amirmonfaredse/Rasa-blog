"use client";

import { removeServiceAction } from "@/app/_data/actions";

export default function ServicesDeleteButton({ id }) {
  return (
    <button
      onClick={async () => {
        const confirmed = confirm("مطمئنی؟");
        if (confirmed) {
          await removeServiceAction(id);
        }
      }}
      className="text-red-600"
    >
      حذف این بخش
    </button>
  );
}
