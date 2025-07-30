"use client";

import { useConfirmComment } from "_data/mutate";

function ConfirmButton({ id }: { id: string }) {
  const { trigger } = useConfirmComment(id);
  return (
    <button
      onClick={async () => {
        const confirmed = confirm("مطمئنی ؟");
        if (confirmed) await trigger();
      }}
      className="w-[50%] h-[40px] flex justify-center items-center rounded-lg bg-avocado-500 hover:bg-avocado-300 hover:text-green-900 transition-colors duration-500"
    >
      تایید
    </button>
  );
}

export default ConfirmButton;
