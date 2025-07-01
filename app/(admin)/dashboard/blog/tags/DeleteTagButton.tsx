"use client";

import { actionDeleteTag } from "_data/blog/tags/tags.actions";


function DeleteTagButton({ slug }: { slug: string }) {
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
