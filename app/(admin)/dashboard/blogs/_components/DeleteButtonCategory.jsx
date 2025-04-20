"use client";

import { actionDeleteCategory } from "@/app/_data/blog/blogActions";

function DeleteButtonCategory({ catId }) {
  return (
    <button
      onClick={async () => {
        const confirmed = confirm("مطمئنی میخای حذفش کنی؟");
        if (confirmed) actionDeleteCategory(catId);
      }}
      className="text-xs mx-2 text-red-700"
    >
      حذف
    </button>
  );
}

export default DeleteButtonCategory;
