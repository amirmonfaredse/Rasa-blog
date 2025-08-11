import { SearchModalProps } from "@/types/app/website/types";

export default function SearchModal({ handleSearchModal }: SearchModalProps) {
  return (
    <div
      onClick={handleSearchModal}
      className="w-screen h-screen fixed flex justify-center items-center top-0 right-0 bg-ghost-1000 bg-opacity-40 z-20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[500px] h-52 flex flex-col justify-center items-center   bg-ghost-600 rounded-3xl shadow-lg"
      >
        <label className="w-full  px-5 text-ghost-200 mb-5 text-xl ">
          جستجو کنید
        </label>
        <input
          className="w-[90%] h-10 rounded-sm outline-none p-2"
          type="search"
        />
      </div>
    </div>
  );
}
