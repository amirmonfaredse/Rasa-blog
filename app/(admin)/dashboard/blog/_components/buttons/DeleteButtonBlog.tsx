"use client";

import { useDeleteBlog } from "_data/mutate";

export default function DeleteButtonBlog({ blogId }: { blogId: string }) {
  const { trigger } = useDeleteBlog(blogId);
  return (
    <button
      onClick={async () => {
        const confirmed = confirm("آیا مطمئنی میخاهی این بلاگ را حذف کنی؟");
        if (confirmed) trigger();
      }}
      className="text-xs text-red-600 hover:bg-gray-50 p-2 rounded-lg"
    >
      حذف
    </button>
  );
}
