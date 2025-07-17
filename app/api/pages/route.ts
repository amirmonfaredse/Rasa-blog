import { ActionResult } from "@/types/app/data/types";
import {
  createSlide,
  getSliders,
} from "_data/pages/pages.services";
import { idRand, secureAccess } from "_data/utility";
import { extractSlideFields, revalidateSliders } from "_lib/utility/pages.utils";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const sliders = await getSliders();
  return NextResponse.json(sliders);
}
export async function POST(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const slideId = idRand();

  const newFields = extractSlideFields(formData, slideId);
  const slideResult = await createSlide(newFields);
  revalidateSliders();
  return NextResponse.json<ActionResult[]>([slideResult]);
}
