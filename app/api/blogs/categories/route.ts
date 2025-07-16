import { ActionResult } from "@/types/app/data/types";
import {
  serviceCreateCategory,
  serviceDeleteCategory,
  serviceGetCategories,
  serviceGetCategory,
  serviceUpdateCategory,
} from "_data/blog/categories/categories.services";
import { idRand, secureAccess } from "_data/utility";
import { extractCategoryFields, revalidateCategories } from "_lib/utility/category.utils";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = await serviceGetCategories();
  return NextResponse.json(categories);
}
export async function POST(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const catId = idRand();
  const newField = extractCategoryFields(formData, catId);
  const categoryResult = await serviceCreateCategory(newField);
  revalidateCategories();
  return NextResponse.json<ActionResult[]>([categoryResult]);
}

