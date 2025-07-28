"use client";

import { useDeleteTag } from "_data/mutate";

function DeleteTagButton({ tagId }: { tagId: string }) {
  const { trigger } = useDeleteTag(tagId);
  return (
    <button
      onClick={async () => {
        const confirmed = confirm("از حذف این برچسب مطمئنی؟");
        if (confirmed) trigger();
      }}
      className="text-xs mx-2 "
    >
      حذف
    </button>
  );
}

export default DeleteTagButton;
