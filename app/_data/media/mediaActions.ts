"use server";
import { revalidatePath } from "next/cache";
import { ActionResult } from "next/dist/server/app-render/types";
import { addToImageList, serviceUploadFile } from "./mediaServices";

const allowedImageTypes = ["image/png", "image/jpeg", "image/jpg"];

export async function actionUploadImage(
  _: any,
  formData: FormData
): ActionResult {
  const image = formData.get("imageFile") as File;
  try {
    if (!allowedImageTypes.includes(image.type))
      return {
        status: "error",
        message: "فرمت مجاز تصاویر png , jpg , jpeg است",
      };
    if (image.size > 5_242_880)
      return {
        status: "error",
        message: "حداکثر حجم فایل باید کمتر از5 مگابایت باشد",
      };
    image.name.replace(/[^a-zA-Z0-9.\-_]/g, "");
    const arrayBuffer: ArrayBuffer = await image.arrayBuffer();
    const bufferImage: Buffer = Buffer.from(arrayBuffer);

    await serviceUploadFile(image.name, bufferImage);
    await addToImageList(image.name, image.size, image.type);
    revalidatePath("dashboard/media/upload");
    return {
      status: "success",
      message: "فایل با موفقیت آپلود شد",
    };
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی در فرایند آپلود فایل ایجاد شده است مجددا تلاش کنید");
  }
}
