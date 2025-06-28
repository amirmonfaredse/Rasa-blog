import { ImageFieldProps } from "../../../types/app/data/types";
import { supabase } from "../supabase";

export async function serviceUploadFile(
  filePath: string,
  bufferedImage: Buffer
): Promise<any> {
  const { data, error } = await supabase.storage
    .from("blogs-images")
    .upload(filePath, bufferedImage);
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است لطفا مجددا تلاش کنید");
  }
  return data;
}

export async function addToImageList(
  imageName: string,
  imageSize: number,
  imageType: string
): Promise<void> {
  const imageURL = await serviceGetImageFileURL(imageName);
  const imageField: ImageFieldProps = {
    url: imageURL,
    name: imageName,
    size: imageSize,
    type: imageType,
  };
  await serviceAddFilesURLList(imageField);
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
export async function serviceGetFilesFieldsFromURLList(): Promise<any> {
  const { data, error } = await supabase.from("filesUrl").select("*");
  if (error) throw new Error("مشکلی در دریافت لیست آدرس ها ایجاد شده است");
  return data;
}
