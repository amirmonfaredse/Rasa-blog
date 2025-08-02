"use client";

import { useDeleteTag } from "_data/mutate";
import ConfirmModal from "_lib/notifications/modal/ConfirmModal";
import toast, { Toast } from "react-hot-toast";

function DeleteTagButton({ tagId }: { tagId: string }) {
  const { trigger } = useDeleteTag(tagId);
  return (
    <button
      onClick={() => {
        toast((t: Toast) => <ConfirmModal t={t} trigger={trigger} />, {
          duration: Infinity,
        });
      }}
      className="text-xs mx-2 "
    >
      حذف
    </button>
  );
}

export default DeleteTagButton;
