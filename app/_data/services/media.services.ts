import { BufferingFileResult } from "@/types/app/admin/types";
import type { StorageError } from "@supabase/storage-js";
import { PostgrestError } from "@supabase/supabase-js";
import {
  FilesUrlProps,
  ImageFieldProps,
  UplaodResult,
} from "../../../types/app/data/types";
import { supabase } from "../supabase";

export async function UploadFile(
  bufferResult: BufferingFileResult
): Promise<StorageError | UplaodResult> {
  const { error } = await supabase.storage
    .from("blogs-images")
    .upload(bufferResult.name, bufferResult.file);
  const { data } = supabase.storage
    .from("blogs-images")
    .getPublicUrl(bufferResult.name);
  const result = {
    name: bufferResult.name,
    url: data.publicUrl,
    size: bufferResult.size,
    type: bufferResult.type,
  };
  return error ?? result!;
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
