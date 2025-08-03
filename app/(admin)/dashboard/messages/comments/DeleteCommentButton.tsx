"use client";

import { useDeleteComment } from "_data/mutate";
import ConfirmRemoveModal from "_lib/notifications/modal/ConfirmRemoveModal";
import toast, { Toast } from "react-hot-toast";

function DeleteCommentButton({ id }: { id: string }) {
  const { trigger } = useDeleteComment(id);
  return (
    <button
      onClick={() => {
        toast((t: Toast) => <ConfirmRemoveModal t={t} trigger={trigger} />, {
          duration: Infinity,
        });
      }}
      className="w-[50%] h-[40px] flex justify-center items-center rounded-lg bg-folly-600 hover:bg-folly-600 text-white transition-colors duration-500"
    >
      حذف
    </button>
  );
}

export default DeleteCommentButton;
