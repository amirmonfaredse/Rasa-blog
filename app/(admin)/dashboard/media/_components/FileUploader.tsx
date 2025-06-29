"use client";
import Image from "next/image";
import { useActionState, useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { actionUploadImage } from "../../../../_data/media/mediaActions";
import CustomToastContainer from "../../../../utility/CustomToastContainer";
import SpinnerLoader from "../../../../utility/SpinnerLoader";
const initialState = {
  status: "",
  message: "",
};
function FileUploader() {
  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState("");
  const [state, formAction, pending] = useActionState(
    actionUploadImage,
    initialState
  );
  useEffect(() => {
    if (state?.message?.length > 0) {
      if (state?.status === "error") toast.error(state.message);
      if (state?.status === "success") toast.success(state.message);
    }
  }, [state]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      setFileName(file.name);
      if (file) reader.readAsDataURL(file);
      reader.onabort = () =>
        alert("به علت کامل نشدن فرایند خواندن فایل فرایند لغو شد");
      reader.onerror = () => alert("خواندن فایل با مشکل ایجاد شده است");
      reader.onload = () => {
        const dataUrl = reader.result;
        setPreview(dataUrl);
      };
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <form action={formAction} className="w-full h-full gap-5 flex flex-col ">
      <CustomToastContainer />
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
              {fileName !== "" && `نام فایل : ${fileName}`}
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
        disabled={pending}
        className="w-full h-[50px] flex justify-center items-center bg-avocado-400 text-white rounded-lg hover:bg-avocado-800 transition duration-300"
      >
        {pending ? <SpinnerLoader /> : "آپلود"}
      </button>
    </form>
  );
}

export default FileUploader;
