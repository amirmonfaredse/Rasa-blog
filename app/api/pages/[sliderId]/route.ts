import { ActionResult } from "@/types/app/data/types";
import {
  deleteSlide,
  getSlider,
} from "_data/pages/pages.services";
import { secureAccess } from "_data/utility";
import { revalidateSliders } from "_lib/utility/pages.utils";
import { NextResponse } from "next/server";

export async function GET({
  params,
}: {
  params: { sliderId: string };
}): Promise<Response> {
  const sliders = await getSlider(params.sliderId);
  return NextResponse.json(sliders);
}
export async function DELETE({ params }: { params: { sliderId: string } }) {
  await secureAccess();
  const sliderId = params.sliderId;
  const deleteResult = await deleteSlide(sliderId);
  revalidateSliders();
  return NextResponse.json<ActionResult[]>([deleteResult]);
}
