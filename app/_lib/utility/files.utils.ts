import { BufferingFileResult } from "@/types/app/admin/types";
import { ActionResult, FilesUrlProps } from "@/types/app/data/types";
import { PostgrestError } from "@supabase/supabase-js";
import { addFileToUrlList } from "_data/services/media.services";
import { idRand } from "_data/utility";
import { revalidatePath } from "next/cache";

export function ValidateImageFile(file: File) {
  const allowTypes = ["image/png", "image/jpeg", "image/jpg"];
  if (!allowTypes.includes(file.type) || file.size > 5_242_880) throw file;
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
  url: string,
  size: number,
  type: string
): Promise<PostgrestError | FilesUrlProps> {
  const imageFields = {
    id: idRand(),
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
