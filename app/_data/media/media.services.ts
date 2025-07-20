import { StorageError } from "@supabase/storage-js";
import { PostgrestError } from "@supabase/supabase-js";
import {
  FilesUrlProps,
  ImageFieldProps
} from "../../../types/app/data/types";
import { supabase } from "../supabase";

export async function UploadFile(
  filePath: string,
  bufferedImage: Buffer
): Promise<string | StorageError> {
  const { error } = await supabase.storage
    .from("blogs-images")
    .upload(filePath, bufferedImage);
  const { data } = supabase.storage.from("blogs-images").getPublicUrl(filePath);

  return error ?? data.publicUrl!;
}

export async function addFileToUrlList(
  imageField: ImageFieldProps
): Promise<PostgrestError | FilesUrlProps> {
  const { error, data } = await supabase
    .from("filesUrl")
    .insert([imageField])
    .select()
    .single();
  return error ?? data!;
}

export async function getFiles(): Promise<PostgrestError | FilesUrlProps[]> {
  const { error, data } = await supabase.from("filesUrl").select("*");
  return error ?? data!;
}
