"use client";

import { useDeleteContact } from "_data/mutate";
import ConfirmRemoveModal from "_lib/notifications/modal/ConfirmRemoveModal";
import toast, { Toast } from "react-hot-toast";

export default function DeleteContactButton({
  contactId,
}: {
  contactId: string;
}) {
  const { trigger } = useDeleteContact(contactId);
  return (
    <button
      className="w-32 rounded-lg p-2 mt-5 bg-folly-500 text-white "
      onClick={() => {
        toast((t: Toast) => <ConfirmRemoveModal t={t} trigger={trigger} />, {
          duration: Infinity,
        });
      }}
    >
      حذف پیام
    </button>
  );
}
