import toast, { Toast } from "react-hot-toast";
import { TriggerWithoutArgs } from "swr/dist/mutation";

export default function ConfirmRemoveModal({
  t,
  trigger, 
}: {
  t: Toast;
  trigger: TriggerWithoutArgs;
}) {
  return (
    <div className="w-full flex flex-col gap-2 my-2">
      <div className="w-full text-ghost-700">
        از انجام این عملیات اطمینان دارید ؟
      </div>
      <div className="w-full flex">
        <button
          onClick={() => {
            toast.promise(
              async () => {
                await trigger();
              },
              {
                loading: "در حال حذف کردن ...",
                success: "با موفقیت حذف شد",
                error: "فرایند حذف کردن با مشکل رو به شده است",
              }
            );
            toast.dismiss(t.id);
          }}
          className="w-24 h-9 m-2 rounded-lg bg-avocado-300 text-white"
        >
          بله
        </button>
        <button
          onClick={() => {
            toast.dismiss(t.id);
          }}
          className="w-24 h-9 m-2 rounded-lg bg-folly-300 text-white"
        >
          خیر
        </button>
      </div>
    </div>
  );
}
