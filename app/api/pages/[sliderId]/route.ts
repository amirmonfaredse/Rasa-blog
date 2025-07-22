import { ActionResult, SlideFieldProps } from "@/types/app/data/types";
import { deleteSlide, getSlider } from "_data/services/pages.services";
import { secureAccess } from "_data/utility";
import { revalidateSliders } from "_lib/utility/pages.utils";
import { NextResponse } from "next/server";

export async function GET({
  params,
}: {
  params: Promise<{ sliderId: string }>;
}): Promise<Response> {
  const { sliderId } = await params;
  const result = await getSlider(sliderId);
  if ("code" in result) throw result;
  return NextResponse.json(result);
}
export async function DELETE({
  params,
}: {
  params: Promise<{ sliderId: string }>;
}) {
  await secureAccess();
  const { sliderId } = await params;

  const result = await deleteSlide(sliderId);
  if ("code" in result) throw result;
  revalidateSliders();
  return NextResponse.json<SlideFieldProps>(result);
}
