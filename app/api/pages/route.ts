import { SlideFieldProps } from "@/types/app/data/types";
import { createSlide, getSliders } from "_data/services/pages.services";
import { secureAccess } from "_data/utils/server.utils";
import {
  extractSlideFields,
  revalidateSliders,
} from "_lib/utility/pages.utils";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const result = await getSliders();
  if ("code" in result) throw result;
  return NextResponse.json<SlideFieldProps[]>(result);
}
export async function POST(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();

  const newFields = extractSlideFields(formData);
  const result = await createSlide(newFields);
  if ("code" in result) throw result;
  revalidateSliders();
  return NextResponse.json<SlideFieldProps>(result);
}
