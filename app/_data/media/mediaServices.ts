import { ToastType } from "@/types/app/admin/store";
import {
  ActionResult,
  FilesUrlProps,
  ImageFieldProps,
} from "../../../types/app/data/types";
import { supabase } from "../supabase";

export async function serviceUploadFile(
  filePath: string,
  bufferedImage: Buffer
): Promise<ActionResult> {
  try {
    await supabase.storage.from("blogs-images").upload(filePath, bufferedImage);
    return {
      type: ToastType.Success,
      message: "فایل با موفقیت بارگذاری شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "مشکلی در بارگذاری فایل ایجاد شده است",
      error,
    };
  }
}

export async function serviceGetImageFileURL(
  filePath: string
): Promise<string> {
  const { data } = supabase.storage.from("blogs-images").getPublicUrl(filePath);
  if (!data) {
    throw new Error("مشکلی ایجاد شده است  مجددا تلاش کنید");
  }
  return data.publicUrl;
}

export async function serviceAddFilesURLList(
  imageField: ImageFieldProps
): Promise<ActionResult> {
  try {
    await supabase.from("filesUrl").insert([imageField]);
    return {
      type: ToastType.Success,
      message: "فایل با موفقیت به لیست فایل ها اضافه شد",
    };
  } catch (error) {
    console.log(error);

    return {
      type: ToastType.Error,
      message: "مشکلی در فرایند اضافه کردن فایل به لیست فایل ها ایجاد شده است",
      error,
    };
  }
}

export async function serviceGetFilesFieldsFromURLList(): Promise<
  FilesUrlProps[]
> {
  const { data, error } = await supabase.from("filesUrl").select("*");
  if (error) throw new Error("مشکلی در دریافت لیست آدرس ها ایجاد شده است");
  return data;
}
