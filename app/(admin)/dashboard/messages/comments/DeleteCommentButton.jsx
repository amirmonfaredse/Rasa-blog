"use client";
import { actionCommentsRemoveMessage } from "@/app/_data/messages/messageActions";

function DeleteCommentButton({ id }) {
  return (
    <button
      onClick={async () => {
        const confirmed = confirm("مطمئنی ؟");
        if (confirmed) actionCommentsRemoveMessage(id);
      }}
      className="w-[50%] h-[40px] flex justify-center items-center rounded-lg bg-folly-600 hover:bg-folly-600 text-white transition-colors duration-500"
    >
      حذف
    </button>
  );
}

export default DeleteCommentButton;
