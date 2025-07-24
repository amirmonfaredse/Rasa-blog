"use client";

import { useDeleteCategory } from "_data/mutate";
import { mutate } from "swr";

function DeleteButtonCategory({ catId }: { catId: string }) {
  const { trigger } = useDeleteCategory(catId);
  return (
    <button
      onClick={async () => {
        const confirmed = confirm("مطمئنی میخای حذفش کنی؟");
        if (confirmed) trigger();
      }}
      className="text-xs mx-2 text-red-700"
    >
      حذف
    </button>
  );
}

export default DeleteButtonCategory;
