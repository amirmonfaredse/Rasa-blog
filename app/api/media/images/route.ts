import { ActionResult } from "@/types/app/data/types";
import {
  serviceGetFilesFieldsFromURLList,
  serviceUploadFile,
} from "_data/media/mediaServices";
import { secureAccess } from "_data/utility";
import {
  addImageToList,
  BufferingFile,
  revalidateMedia,
  ValidateImageFile,
} from "_lib/utility/files.utils";
import { NextResponse } from "next/server";

export async function GET() {
  const images = await serviceGetFilesFieldsFromURLList();
  return NextResponse.json(images);
}

export async function POST(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const image = formData.get("imageFile") as File;
  const validateResult = ValidateImageFile(image);
  if (validateResult)
    return NextResponse.json<ActionResult[]>([validateResult]);
  const { name, file, size, type } = await BufferingFile(image);
  const uploadResult = await serviceUploadFile(name, file);
  const addToListResult = await addImageToList(name, size, type);
  revalidateMedia();
  return NextResponse.json<ActionResult[]>([uploadResult, addToListResult]);
}
