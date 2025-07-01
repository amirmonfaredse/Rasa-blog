import { FilesUrlProps, ImageFieldProps } from "../../../types/app/data/types";
import { supabase } from "../supabase";

export async function serviceUploadFile(
  filePath: string,
  bufferedImage: Buffer
): Promise<void> {
  const { error } = await supabase.storage
    .from("blogs-images")
    .upload(filePath, bufferedImage);
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است لطفا مجددا تلاش کنید");
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
): Promise<number> {
  const { status, error } = await supabase
    .from("filesUrl")
    .insert([imageField]);
  if (error) {
    console.log(error);
    throw new Error("مشکلی در فرایند آپلود ایجاد شده است");
  }
  return status;
}

export async function serviceGetFilesFieldsFromURLList(): Promise<
  FilesUrlProps[]
> {
  const { data, error } = await supabase.from("filesUrl").select("*");
  if (error) throw new Error("مشکلی در دریافت لیست آدرس ها ایجاد شده است");
  return data;
}
