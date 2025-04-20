'use client'
import { actionDeleteBlog } from "@/app/_data/blog/blogActions";

export default function DeleteButtonBlog({ blogId }) {
  return (
    <button
      onClick={async () => {
        const confirmed = confirm("آیا مطمئنی میخاهی این بلاگ را حذف کنی؟");
        if (confirmed) actionDeleteBlog(blogId);
      }}
      className="text-xs  text-red-600"
    >
      حذف
    </button>
  );
}
