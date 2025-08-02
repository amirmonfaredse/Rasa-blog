"use client";

import { useDeleteCategory } from "_data/mutate";
import ConfirmModal from "_lib/notifications/modal/ConfirmModal";
import toast, { Toast } from "react-hot-toast";

function DeleteButtonCategory({ catId }: { catId: string }) {
  const { trigger } = useDeleteCategory(catId);
  return (
    <button
      onClick={() => {
        toast((t: Toast) => <ConfirmModal t={t} trigger={trigger} />, {
          duration: Infinity,
        });
      }}
      className="text-xs mx-2 text-red-700"
    >
      حذف
    </button>
  );
}

export default DeleteButtonCategory;
