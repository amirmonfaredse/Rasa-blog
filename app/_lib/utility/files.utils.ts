import { ToastType } from "@/types/app/admin/store";
import { BufferingFileResult } from "@/types/app/admin/types";
import { ActionResult, ImageFieldProps } from "@/types/app/data/types";
import {
  addFileToUrlList,
  getFileUrl,
} from "_data/media/media.services";
import { revalidatePath } from "next/cache";

export function ValidateImageFile(file: File): ActionResult | undefined {
  const allowTypes = ["image/png", "image/jpeg", "image/jpg"];

  if (!allowTypes.includes(file.type))
    return {
      type: ToastType.Error,
      message: "فرمت مجاز تصاویر png , jpg , jpeg است",
    };
  if (file.size > 5_242_880)
    return {
      type: ToastType.Error,
      message: "حداکثر حجم فایل باید کمتر از5 مگابایت باشد",
    };
}

export async function BufferingFile(file: File): Promise<BufferingFileResult> {
  file.name.replace(/[^a-zA-Z0-9.\-_]/g, "");
  const arrayBuffer = await file.arrayBuffer();
  const fileResult = Buffer.from(arrayBuffer);
  return {
    name: file.name,
    file: fileResult,
    size: file.size,
    type: file.type,
  };
}
export async function addImageToList(
  name: string,
  size: number,
  type: string
): Promise<ActionResult> {
  const url = await getFileUrl(name);
  const imageFields = {
    url,
    name,
    size,
    type,
  };
  return await addFileToUrlList(imageFields);
}
export function revalidateMedia() {
  revalidatePath("dashboard/media");
  revalidatePath("dashboard/media/upload");
}
