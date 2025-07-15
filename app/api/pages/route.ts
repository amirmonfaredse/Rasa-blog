import { ActionResult } from "@/types/app/data/types";
import {
  serviceCreateSlide,
  serviceGetSliders,
} from "_data/pages/pages.services";
import { idRand, secureAccess } from "_data/utility";
import { extractSlideFields, revalidateSliders } from "lib/pagesUtils";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const sliders = await serviceGetSliders();
  return NextResponse.json(sliders);
}
export async function POST(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const slideId = idRand();

  const newFields = extractSlideFields(formData, slideId);
  const slideResult = await serviceCreateSlide(newFields);
  revalidateSliders();
  return NextResponse.json<ActionResult[]>([slideResult]);
}
