"use client";

import { useDeleteComment } from "_data/mutate";

function DeleteCommentButton({ id }: { id: string }) {
  const { trigger } = useDeleteComment(id);
  return (
    <button
      onClick={async () => {
        const confirmed = confirm("مطمئنی ؟");
        if (confirmed) await trigger();
      }}
      className="w-[50%] h-[40px] flex justify-center items-center rounded-lg bg-folly-600 hover:bg-folly-600 text-white transition-colors duration-500"
    >
      حذف
    </button>
  );
}

export default DeleteCommentButton;
