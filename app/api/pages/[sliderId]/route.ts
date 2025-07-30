import { SlideFieldProps } from "@/types/app/data/types";
import {
  deleteSlide,
  getSlider,
  updateSlide,
} from "_data/services/pages.services";
import { secureAccess } from "_data/utils/server.utils";
import {
  extractSlideFields,
  revalidateSliders,
} from "_lib/utility/pages.utils";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: Promise<{ sliderId: string }>;
  }
): Promise<Response> {
  const { sliderId } = await params;
  const result = await getSlider(sliderId);
  if ("code" in result) throw result;
  return NextResponse.json(result);
}
export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ sliderId: string }>;
  }
): Promise<Response> {
  await secureAccess();
  const { sliderId } = await params;
  const formData = await request.formData();
  const newFields = extractSlideFields(formData, sliderId);
  const result = await updateSlide(newFields, sliderId);
  if ("code" in result) throw result;
  revalidateSliders();
  return NextResponse.json<SlideFieldProps>(result);
}
export async function DELETE(
  _request: Request,
  {
    params,
  }: {
    params: Promise<{ sliderId: string }>;
  }
) {
  await secureAccess();
  const { sliderId } = await params;

  const result = await deleteSlide(sliderId);
  if ("code" in result) throw result;
  revalidateSliders();
  return NextResponse.json<SlideFieldProps>(result);
}
