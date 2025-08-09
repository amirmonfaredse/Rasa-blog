import SpinnerLoader from "utility/loaders/SpinnerLoader";

function EditButton({ isMutating }: { isMutating: boolean }) {
  return (
    <div className="w-full h-[100px] flex items-center justify-start">
      <button
        type="submit"
        disabled={isMutating}
        className="w-full h-[40px] flex items-center justify-center rounded text-white  bg-folly-600 hover:bg-folly-900  transition duration-400"
      >
        {isMutating ? <SpinnerLoader /> : "ویرایش"}
      </button>
    </div>
  );
}

export default EditButton;
