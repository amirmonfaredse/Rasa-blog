"use client";

import { useDeleteContact } from "_data/mutate";

export default function DeleteButton({ id }: { id: string }) {
  const { trigger } = useDeleteContact(id);
  return (
    <button
      className="w-32 rounded-lg p-2 mt-5 bg-folly-500 text-white "
      onClick={async () => {
        const confirmed = confirm("مطمئنی ؟");
        if (confirmed) await trigger();
      }}
    >
      حذف پیام
    </button>
  );
}
