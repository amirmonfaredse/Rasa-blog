"use client";

import { actionDeleteTag } from "@/app/_data/blog/blogActions";

function DeleteTagButton({ slug }) {
  return (
    <button
      onClick={async () => {
        const confirmed = confirm("از حذف این برچسب مطمئنی؟");
        if (confirmed) actionDeleteTag(slug);
      }}
      className="text-xs mx-2 "
    >
      حذف
    </button>
  );
}

export default DeleteTagButton;
