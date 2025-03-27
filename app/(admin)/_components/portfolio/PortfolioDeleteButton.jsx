"use client";

import { removePortfolioAction } from "@/app/_data/actions";

export default function PortfolioDeleteButton({ id }) {
  return (
    <button
      onClick={async () => {
        const confirmed = confirm("مطمئنی؟");
        if (confirmed) {
          await removePortfolioAction(id);
        }
      }}
      className="text-red-600"
    >
      حذف این بخش
    </button>
  );
}
