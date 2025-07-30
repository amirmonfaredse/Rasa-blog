"use client";
import { useCreateImage } from "_data/mutate";
import { useAdminStore } from "_lib/store/store";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

function FileUploader() {
  const { file, name, size, preview, type } = useAdminStore.use.uploadManager();

  const onReadFile = useAdminStore.use.onReadFile();
  const onDrop = useCallback(
    (acceptedFile: File[]) => onReadFile(acceptedFile[0]),
    [onReadFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const { trigger, response, isMutating } = useCreateImage();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file as File);
    formData.append("name", name);
    formData.append("size", size.toString());
    formData.append("type", type);
    await trigger(formData);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full gap-5 flex flex-col "
    >
      <div
        className="w-full h-[250px] flex flex-col items-center justify-center relative bg-gray-50 text-ghost-900 rounded-lg p-2"
        {...getRootProps()}
      >
        <Image fill src="/svg/upload.svg" alt="آپلود فایل" />
        <input
          {...getInputProps()}
          name="imageFile"
          accept="image/png, image/gif, image/jpeg, image/jpg"
        />
        {isDragActive ? (
          <p className="absolute top-5 bg-gray-200 p-2 rounded-lg z-20 text-ghost-600">
            فایل را اینجا رها کنید
          </p>
        ) : (
          <>
            <p className="absolute top-5 bg-gray-100 p-2 rounded-lg z-20 text-ghost-600">
              برای آپلود اینجا کلیک کنید و یا فایل خود را به اینجا بکشید
            </p>
            <p className="absolute bottom-5 bg-gray-100 p-2 rounded-lg z-20 text-ghost-600">
              {name !== "" && `نام فایل : ${name}`}
            </p>
          </>
        )}
      </div>
      <div className="w-full h-[250px] flex flex-col items-center justify-center relative bg-avocado-100 text-ghost-900 rounded-lg  p-2">
        {preview && (
          <Image
            src={preview}
            alt="پیش نمایش تصویر"
            fill
            className="object-contain"
          />
        )}
      </div>
      <button
        disabled={isMutating}
        className="w-full h-[50px] flex justify-center items-center bg-avocado-400 text-white rounded-lg hover:bg-avocado-800 transition duration-300"
      >
        آپلود
      </button>
    </form>
  );
}

export default FileUploader;
