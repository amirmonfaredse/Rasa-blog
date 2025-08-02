"use client";

import { useDeleteBlog } from "_data/mutate";
import ConfirmModal from "_lib/notifications/modal/ConfirmModal";
import toast, { Toast } from "react-hot-toast";
export default function DeleteButtonBlog({ blogId }: { blogId: string }) {
  const { trigger } = useDeleteBlog(blogId);

  return (
    <button
      onClick={() => {
        toast((t: Toast) => <ConfirmModal t={t} trigger={trigger} />, {
          duration: Infinity,
        });
      }}
      className="text-xs text-red-600 hover:bg-gray-50 p-2 rounded-lg"
    >
      حذف
    </button>
  );
}
