import {
  ActionResult,
  FilesUrlProps,
  UplaodResult,
} from "@/types/app/data/types";
import { getFiles, UploadFile } from "_data/services/media.services";
import { secureAccess } from "_data/utility";
import {
  addImageToList,
  BufferingFile,
  revalidateMedia,
  ValidateImageFile,
} from "_lib/utility/files.utils";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await getFiles();
  if ("code" in result) throw result;
  return NextResponse.json<FilesUrlProps[]>(result);
}

export async function POST(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const uploadResult = await fetch(`${process.env.BASE_URL}/api/media/upload`, {
    method: "POST",
    body: formData,
  });
  if ("message" in uploadResult) throw uploadResult;

  const data: UplaodResult = await uploadResult.json();
  const { name, url, size, type } = data;

  const addToListResult = await addImageToList(name, url, size, type);
  revalidateMedia();
  if ("code" in addToListResult) throw addToListResult;

  return NextResponse.json<FilesUrlProps>(addToListResult);
}
