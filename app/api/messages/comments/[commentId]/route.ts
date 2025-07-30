import { CommentProps } from "@/types/app/data/types";
import {
  confirmComment,
  deleteComment,
  getComment,
} from "_data/services/message.services";
import { secureAccess } from "_data/utils/server.utils";
import { revalidateComments } from "_lib/utility/messages.utils";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: Promise<{ commentId: string }>;
  }
): Promise<Response> {
  const { commentId } = await params;
  const result = await getComment(commentId);
  if ("code" in result) throw result;
  return NextResponse.json<CommentProps>(result);
}
export async function DELETE(
  _request: Request,
  {
    params,
  }: {
    params: Promise<{ commentId: string }>;
  }
): Promise<Response> {
  await secureAccess();
  const { commentId } = await params;

  const result = await deleteComment(commentId);
  if ("code" in result) throw result;
  const { blogId } = result;
  if (blogId) revalidateComments(blogId);
  return NextResponse.json<CommentProps>(result);
}

export async function PUT(
  _request: Request,
  {
    params,
  }: {
    params: Promise<{ commentId: string }>;
  }
): Promise<Response> {
  await secureAccess();
  const { commentId } = await params;
  const result = await confirmComment(commentId);
  if ("code" in result) throw result;
  const { blogId } = result;

  if (blogId) revalidateComments(blogId);
  return NextResponse.json<CommentProps>(result);
}
