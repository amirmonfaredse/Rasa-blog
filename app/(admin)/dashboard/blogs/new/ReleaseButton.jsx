import SpinnerLoader from "@/app/utility/SpinnerLoader";

function ReleaseButton({ pending }) {
  return (
    <div className="w-full h-[100px] flex items-center justify-start">
      <button
        disabled={pending}
        className="w-[50%] h-[40px] flex items-center justify-center rounded  bg-gray-400 hover:bg-gray-700 hover:text-gray-100 transition duration-400"
      >
        {pending ? <SpinnerLoader /> : "انتشار"}
      </button>
    </div>
  );
}

export default ReleaseButton;
