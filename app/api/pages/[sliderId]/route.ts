import { ActionResult } from "@/types/app/data/types";
import {
  serviceDeleteSlide,
  serviceGetSlider,
} from "_data/pages/pages.services";
import { secureAccess } from "_data/utility";
import { revalidateSliders } from "_lib/utility/pages.utils";
import { NextResponse } from "next/server";

export async function GET({
  params,
}: {
  params: { sliderId: string };
}): Promise<Response> {
  const sliders = await serviceGetSlider(params.sliderId);
  return NextResponse.json(sliders);
}
export async function DELETE({ params }: { params: { sliderId: string } }) {
  await secureAccess();
  const sliderId = params.sliderId;
  const deleteResult = await serviceDeleteSlide(sliderId);
  revalidateSliders();
  return NextResponse.json<ActionResult[]>([deleteResult]);
}
