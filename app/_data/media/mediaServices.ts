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
  const { error } = await supabase.storage
    .from("blogs-images")
    .upload(filePath, bufferedImage);
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است لطفا مجددا تلاش کنید");
  }
  return {
    type: ToastType.Success,
    message: "فایل با موفقیت بارگذاری شد",
  };
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
  const { error } = await supabase.from("filesUrl").insert([imageField]);
  if (error) {
    console.log(error);
    throw new Error("مشکلی در فرایند آپلود ایجاد شده است");
  }
  return {
    type: ToastType.Success,
    message: "فایل با موفقیت به لیست فایل ها اضافه شد",
  };
}

export async function serviceGetFilesFieldsFromURLList(): Promise<
  FilesUrlProps[]
> {
  const { data, error } = await supabase.from("filesUrl").select("*");
  if (error) throw new Error("مشکلی در دریافت لیست آدرس ها ایجاد شده است");
  return data;
}
