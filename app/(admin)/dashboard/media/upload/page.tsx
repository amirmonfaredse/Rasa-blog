import Image from "next/image";
import FileUploader from "../_components/FileUploader.jsx";
import { serviceGetFilesFieldsFromURLList } from "_data/media/mediaServices.js";

export default async function Page() {
  const images = await serviceGetFilesFieldsFromURLList();
  return (
    <div className="w-full h-full flex justify-start items-start">
      <div className="w-[100%] md:w-[50%] h-auto md:h-full  p-5">
        <h1 className="w-full h-[40px] text-xl text-gray-200 py-2">
          لیست فایل ها
        </h1>
        <ul className="w-full flex flex-col items-start justify-start py-2 gap-2">
          {images?.length > 0 ? (
            images.map((image, index) => (
              <li
                key={`${image.name}-${index}`}
                className="w-full h-[100px] flex justify-start items-center gap-2 bg-gray-200 rounded-lg px-2"
              >
                <span className="w-[20px] h-[20px] bg-gray-800 text-gray-50 rounded-lg flex items-center justify-center ">
                  {index + 1}
                </span>
                <h2 className="text-xs">{image.name.slice(0, 10) + "..."}</h2>
                <Image
                  src={image.url}
                  alt="پیش نمایش تصویر"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <input
                  className="w-[400px] h-[40px] rounded-lg p-2 bg-gray-50 text-gray-700 "
                  value={image.url}
                  readOnly
                  type="text"
                />
              </li>
            ))
          ) : (
            <li>تصویری وجود ندارد</li>
          )}
        </ul>
      </div>
      <div className="w-[100%] md:w-[50%] h-auto md:h-full  p-5 ml-5 flex items-center">
        <FileUploader />
      </div>
    </div>
  );
}
