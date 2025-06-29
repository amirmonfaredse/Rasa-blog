"use client";

import { actionDeleteCategory } from "../../../../_data/blog/blogActions";

function DeleteButtonCategory({ catId }: { catId: string }) {
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
