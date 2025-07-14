import { serviceGetFilesFieldsFromURLList } from "_data/media/mediaServices";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const images = await serviceGetFilesFieldsFromURLList();
  return NextResponse.json(images);
}
