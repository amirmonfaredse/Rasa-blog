"use client";

import { useConfirmComment } from "_data/mutate";
import ConfirmRemoveModal from "_lib/notifications/modal/ConfirmRemoveModal";
import toast, { Toast } from "react-hot-toast";

function ConfirmCommentButton({ id }: { id: string }) {
  const { trigger } = useConfirmComment(id);
  return (
    <button
      onClick={() => {
        toast((t: Toast) => <ConfirmRemoveModal t={t} trigger={trigger} />, {
          duration: Infinity,
        });
      }}
      className="w-[50%] h-[40px] flex justify-center items-center rounded-lg bg-avocado-500 hover:bg-avocado-300 hover:text-green-900 transition-colors duration-500"
    >
      تایید
    </button>
  );
}

export default ConfirmCommentButton;
