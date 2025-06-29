"use client";
import { actionDeleteBlog } from "../../../../_data/blog/blogActions";

export default function DeleteButtonBlog({ blogId }: { blogId: string }) {
  return (
    <button
      onClick={async () => {
        const confirmed = confirm("آیا مطمئنی میخاهی این بلاگ را حذف کنی؟");
        if (confirmed) actionDeleteBlog(blogId);
      }}
      className="text-xs text-red-600 hover:bg-gray-50 p-2 rounded-lg"
    >
      حذف
    </button>
  );
}
