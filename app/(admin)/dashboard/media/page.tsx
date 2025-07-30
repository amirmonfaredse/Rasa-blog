"use client";
import { useImageFiles } from "_data/fetchers";
import Image from "next/image";
import FileUploader from "./_components/FileUploader";
export default function Page() {
  const { images } = useImageFiles();
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-start items-start">
      <div className="w-full lg:w-[50%] h-auto lg:h-full  p-5">
        <h1 className="w-full h-[40px] text-xl text-ghost-800 py-2">
          لیست فایل ها
        </h1>
        <ul className="w-full flex flex-col items-start justify-start py-2 gap-2">
          {images &&
            images?.map((image, index) => (
              <li
                key={`${image.name}-${index}`}
                className="w-full h-28 flex justify-start items-center gap-2 bg-cles-100 rounded-lg px-2"
              >
                <h2 className="w-1/5 text-xs">
                  {image &&
                    image?.name?.slice(0, 10) +
                      (image?.name?.length > 10 && "...")}
                </h2>
                <div className="w-2/5 h-[90%] relative ">
                  <Image
                    src={image.url}
                    alt="پیش نمایش تصویر"
                    className="rounded-lg"
                    fill
                  />
                </div>
                <input
                  className="w-3/5 lg:w-[400px] h-[40px] rounded-lg p-2 bg-gray-50 text-gray-700 "
                  value={image.url}
                  readOnly
                  type="text"
                />
              </li>
            ))}
        </ul>
      </div>
      <div className="w-full lg:w-[50%] h-auto lg:h-full  p-5 ml-5 flex items-center">
        <FileUploader />
      </div>
    </div>
  );
}
