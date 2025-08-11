import { UplaodResult } from "@/types/app/data/types";
import { UploadFile } from "_data/services/media.services";
import { BufferingFile, ValidateImageFile } from "_data/utils/files.utils";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<Response> {
  const formData = await request.formData();
  const image = formData.get("file") as File;
  ValidateImageFile(image);

  const bufferResult = await BufferingFile(image);
  const result = await UploadFile(bufferResult);
  if ("message" in result) throw result;
  return NextResponse.json<UplaodResult>(result);
}
