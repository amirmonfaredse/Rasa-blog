import { CategorizedProps } from "@/types/app/data/types";
import {
  deleteCategorized,
  getCategorized,
} from "_data/services/categories.services";
import { secureAccess } from "_data/utils/server.utils";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ blogId: string }> }
) {
  const { blogId } = await params;
  let result = await getCategorized(blogId);
  if ("code" in result) throw result;

  return NextResponse.json<CategorizedProps[]>(result);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ blogId: string }> }
) {
  await secureAccess();

  const { blogId } = await params;
  const deleteResult = await deleteCategorized(blogId);
  if ("code" in deleteResult) throw deleteResult;
  return NextResponse.json<CategorizedProps[]>(deleteResult);
}
