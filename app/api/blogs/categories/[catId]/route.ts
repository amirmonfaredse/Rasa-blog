import { ActionResult } from "@/types/app/data/types";
import {
  serviceDeleteCategory,
  serviceGetCategory,
  serviceUpdateCategory,
} from "_data/blog/categories/categories.services";
import { secureAccess } from "_data/utility";
import { extractCategoryFields, revalidateCategories } from "lib/categoryUtils";
import { NextResponse } from "next/server";
export async function GET({ params }: { params: { catId: string } }) {
  const category = await serviceGetCategory(params.catId);
  return NextResponse.json(category);
}
export async function PUT(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const catId = formData.get("id") as string;
  await serviceGetCategory(catId);
  const newFields = extractCategoryFields(formData, catId);
  const updateResult = await serviceUpdateCategory(newFields, catId);
  revalidateCategories();
  return NextResponse.json<ActionResult[]>([updateResult]);
}
export async function DELETE({
  params,
}: {
  params: { catId: string };
}): Promise<Response> {
  await secureAccess();
  const catId = params.catId;
  const deleteResult = await serviceDeleteCategory(catId);
  revalidateCategories();
  return NextResponse.json<ActionResult[]>([deleteResult]);
}
