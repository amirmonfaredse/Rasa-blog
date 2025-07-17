import { ActionResult } from "@/types/app/data/types";
import {
  getConfirmedComment,
  deleteComment,
  getComment,
} from "_data/messages/messageServices";
import { secureAccess } from "_data/utility";
import { revalidateComments } from "_lib/utility/messages.utils";
import { NextResponse } from "next/server";

export async function GET({
  params,
}: {
  params: { commentId: string };
}): Promise<Response> {
  const comment = await getComment(params.commentId);
  return NextResponse.json(comment);
}
export async function DELETE({
  params,
}: {
  params: { commentId: string };
}): Promise<Response> {
  await secureAccess();
  const commentId = params.commentId;
  const { deleteResult, blogId } = await deleteComment(
    commentId
  );
  if (blogId) revalidateComments(blogId);
  return NextResponse.json<ActionResult[]>([deleteResult]);
}

export async function PUT({
  params,
}: {
  params: { commentId: string };
}): Promise<Response> {
  await secureAccess();
  const commentId = params.commentId;
  const { updateResult, blogId } = await getConfirmedComment(
    commentId
  );
  if (blogId) revalidateComments(blogId);
  return NextResponse.json<ActionResult[]>([updateResult]);
}
